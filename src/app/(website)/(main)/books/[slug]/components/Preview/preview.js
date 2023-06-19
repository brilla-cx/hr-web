"use client";

import { singlebookquery } from "@/sanity/groq";
import { usePreview } from "@/sanity/preview";

import Book from "../Book/Book";

export default function PostPreview({ slug }) {
  const post = usePreview(null, singlebookquery, {
    slug: slug,
  });

  return <Book post={post} />;
}
