import RSS, { FeedOptions } from "rss";

import { FEED_OPTIONS, SITE_URL } from "@/lib/constants";
import { getTextFromBlocks } from "@/lib/getTextFromBlock";
import { getAllPosts } from "@/sanity/client";
import { Post } from "@/types/types";

export async function GET() {
  const posts = (await getAllPosts()) ?? [];
  const feedOptions: FeedOptions = FEED_OPTIONS;
  const feed = new RSS(feedOptions);

  await posts?.map((post: Post) => {
    const description = getTextFromBlocks(post.tldr);
    return feed.item({
      title: post.name ?? "",
      description: description ?? "",
      url: `${SITE_URL}/gists/${post.slug.current}` ?? "",
      date: post?.publishedAt || post._createdAt,
      author: post.author?.name ?? "",
      categories: post.categories?.map(({ name }) => name) || [],
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
