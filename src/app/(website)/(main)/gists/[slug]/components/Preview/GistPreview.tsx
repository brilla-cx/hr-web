"use client";

import { useLiveQuery } from "next-sanity/preview";

import { singlepostquery } from "@/sanity/groq";

import Gist from "../Gist/Gist";

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      Just a sec, getting Rebekah&apos;s attention...
    </div>
  );
};

export default function GistPreview({ data: initialData, categories, slug }) {
  const [data, loading] = useLiveQuery(initialData, singlepostquery, {
    slug,
  });

  if (loading) {
    return <Loading />;
  }

  return <Gist post={data} categories={categories} />;
}
