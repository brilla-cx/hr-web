"use client";

import { singlepostquery } from "@/sanity/groq";
import { usePreview } from "@/sanity/preview";

import Post from "./post";

export default function PostPreview({ categories, slug }) {
  const post = usePreview(null, singlepostquery, {
    slug: slug,
  });

  return <Post post={post} categories={categories} />;
}
