"use client";

import { useLiveQuery } from "next-sanity/preview";

import { singlesocialblogquery } from "@/sanity/groq";

import SocialBlog from "../SocialBlog/SocialBlog";

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      Just a minute, convincing Ambreen....
    </div>
  );
};

export default function SocialBlogPreview({ data: initialData, slug }) {
  const [data, loading] = useLiveQuery(initialData, singlesocialblogquery, {
    slug: slug,
  });

  if (loading) {
    return <Loading />;
  }

  return <SocialBlog socialBlog={data} />;
}
