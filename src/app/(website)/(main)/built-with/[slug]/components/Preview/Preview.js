"use client";

import { singletoolsquery } from "@/sanity/groq";
import { usePreview } from "@/sanity/preview";

import Tool from "../Tool/Tool";

export default function PostPreview({ slug }) {
  const data = usePreview(null, singletoolsquery, {
    slug: slug,
  });

  return <Tool data={data} />;
}
