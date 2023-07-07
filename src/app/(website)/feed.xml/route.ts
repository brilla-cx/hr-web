/* eslint-disable camelcase */
import RSS, { FeedOptions } from "rss";

import { SITE_URL } from "@/lib/constants";
import { getAllPosts } from "@/sanity/client";

const getTextFromBlocks = (blocks: { children: any[] }[]) => {
  if (!blocks || blocks.length === 0) {
    return "";
  }
  return blocks
    .map((item: { children: any[] }) =>
      item.children.map((child) => child.text).join("")
    )
    .join("");
};

export async function GET() {
  const posts = (await getAllPosts()) ?? [];
  const feedOptions: FeedOptions = {
    title: "Hey Rebekah | Like Morning Brew for AI",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/rss.xml`,
    image_url: `${SITE_URL}/logo.png`,
    pubDate: new Date(),
    copyright: `&copy; ${new Date().getFullYear()} Hey Rebekah is a product of BRIL.LA, LLC. &nbsp;All Rights Reserved.`,
  };
  const feed = new RSS(feedOptions);

  await posts?.map(
    (post: {
      name: any;
      tldr: any[];
      slug: { current: any };
      publishedAt: any;
      _createdAt: any;
      author: { name: any };
      categories: { name: any }[];
    }) => {
      const description = getTextFromBlocks(post.tldr);
      return feed.item({
        title: post.name ?? "",
        description: description ?? "",
        url: `${SITE_URL}/gists/${post.slug.current}` ?? "",
        date: post?.publishedAt || post._createdAt,
        author: post.author?.name ?? "",
        categories: post.categories?.map(({ name }) => name) || [],
      });
    }
  );

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
