"use client";

import { singlesocialblogquery } from "@/sanity/groq";
import { usePreview } from "@/sanity/preview";

import SocialBlog from "./socialblog";

export default function SocialBlogPreview({ slug }) {
  const socialBlog = usePreview(null, singlesocialblogquery, {
    slug: slug,
  });

  return <SocialBlog socialBlog={socialBlog} />;
}
