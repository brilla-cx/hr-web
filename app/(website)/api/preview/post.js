"use client";

import { singlepostquery } from "@/sanity/groq";
import { usePreview } from "@/sanity/preview";

export default function Post() {
  const post = usePreview(null, singlepostquery, {
    slug: "around-the-corner",
  });

  console.log(post);

  return (
    <div>
      <pre> {JSON.stringify(post, null, 4)} </pre>
    </div>
  );
}
