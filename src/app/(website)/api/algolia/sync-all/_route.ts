import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import algoliasearch from "algoliasearch";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "next-sanity";
import indexer from "sanity-algolia";

import { apiVersion, dataset, projectId, useCdn } from "@/sanity/config";

const algolia = algoliasearch(
  "U5XNUAICIA",
  process.env.ALGOLIA_WRITE_AI_KEY as string
);

const sanityClient = createClient({ projectId, dataset, apiVersion, useCdn });

// This document is used to sync documents with Algolia First Time
// Enable this route by removing _ and calling this GET function.
// For safety disable this once ran successfully.

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get("password");

  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (password !== secret) {
    return NextResponse.json(
      {
        success: false,
        message: "Password does not match!",
      },
      { status: 401 }
    );
  }

  const types = ["post", "book", "tool", "socialBlog"];
  const query = `*[_type in $types && !(_id in path("drafts.**"))][]._id`;

  // Second, let's process the webhook with Sanity-Algolia Plugin
  const algoliaIndex = algolia.initIndex("hey_rebekah");

  const sanityAlgolia = indexer(
    {
      post: {
        index: algoliaIndex,
        projection: `{
          name,
          slug,
          image,
          publishedAt,
          "tldr": pt::text(tldr),
          "keywords": seo.keywords,
          "author": author->name
        }`,
      },
      book: {
        index: algoliaIndex,
        projection: `{
          name,
          slug,
          image,
          publishedAt,
          "tldr": pt::text(summary),
          "author": bookAuthor
        }`,
      },
      tool: {
        index: algoliaIndex,
        projection: `{
          name,
          slug,
          image,
          publishedAt,
          "tldr": pt::text(shortDescription),
          "author": companyName
        }`,
      },
      socialBlog: {
        index: algoliaIndex,
        projection: `{
          name,
          slug,
          publishedAt,
          "tldr": seo.seoDescription,
          "keywords": seo.keywords,
          "author": author->name
        }`,
      },
    },
    (document) => {
      return document;
    }
  );

  try {
    await sanityClient.fetch(query, { types }).then((ids) =>
      // eslint-disable-next-line no-sync
      sanityAlgolia.webhookSync(sanityClient, {
        ids: { created: ids, updated: [], deleted: [] },
      })
    );

    console.log("algolia sync success");

    return NextResponse.json(
      { success: true, message: "Success" },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong", error: err },
      {
        status: 500,
      }
    );
  }
}
