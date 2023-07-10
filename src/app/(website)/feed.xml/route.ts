/* eslint-disable camelcase */
import RSS, { FeedOptions } from "rss";

import { blocksToHtmlString } from "@/lib/blocksToHtml";
import { FEED_OPTIONS, SITE_URL } from "@/lib/constants";
import { getAllPosts } from "@/sanity/client";
import { Post } from "@/types/types";

function generateFeedItem(post: Post, feed: RSS) {
  const description = post.tldr ? blocksToHtmlString(post.tldr) : "";
  const content = post.content ? blocksToHtmlString(post.content) : "";

  feed.item({
    title: post.name || "",
    description: description || "",
    url: `${SITE_URL}/gists/${post.slug.current}` || "",
    date: post?.publishedAt || post._createdAt,
    author: post.author?.name || "",
    categories: post.categories?.map(({ name }) => name) || [],
    custom_elements: [
      {
        "content:encoded": {
          _cdata: content,
        },
      },
    ],
  });
}

async function generateFeed(): Promise<Response> {
  const posts = (await getAllPosts()) ?? [];
  const feedOptions: FeedOptions = FEED_OPTIONS;
  const feed = new RSS(feedOptions);

  await Promise.all(posts.map((post: Post) => generateFeedItem(post, feed)));

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}

export function GET(): Promise<Response> {
  return generateFeed();
}
