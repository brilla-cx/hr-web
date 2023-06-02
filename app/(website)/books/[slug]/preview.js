"use client";

import { singlebookquery } from "@/sanity/groq";
import { usePreview } from "@/sanity/preview";

import Post from "./post";

export default function PostPreview({ slug }) {
  const post = usePreview(null, singlebookquery, {
    slug: slug,
  });

  return <Post post={post}/>;
}
