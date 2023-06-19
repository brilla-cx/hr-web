/**
 *
 * Step 1: Create Webhook in Sanity with the following Projections
 * https://github.com/sanity-io/sanity-algolia/issues/38#issuecomment-1503509206
 *
 */

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

export async function POST(req: NextRequest) {
  // First, let's verify the signature

  const headersList = headers();
  const signature = headersList.get(SIGNATURE_HEADER_NAME) || null;

  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret || !signature) {
    return NextResponse.json(
      {
        success: false,
        message: "secret or signature not found",
      },
      { status: 401 }
    );
  }

  const body = await req.json();
  console.log(body);

  // Check the signature valid or not
  const validSignature = isValidSignature(
    JSON.stringify(body),
    signature,
    secret
  );
  // If not, throw error
  if (!validSignature) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid signature",
      },
      { status: 401 }
    );
  }

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
    // eslint-disable-next-line no-sync
    await sanityAlgolia.webhookSync(sanityClient, body);
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
