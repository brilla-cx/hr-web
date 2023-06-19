"use client";

import { singlepostquery } from "@/sanity/groq";
import { usePreview } from "@/sanity/preview";

import Gist from "../Gist/Gist";

export default function PostPreview({ categories, slug }) {
  const post = usePreview(null, singlepostquery, {
    slug: slug,
  });

  return <Gist post={post} categories={categories} />;
}
