"use client";

import { useLiveQuery } from "next-sanity/preview";

import { singletoolsquery } from "@/sanity/groq";

import Tool from "../Tool/Tool";

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      Just a sec, getting Rebekah&apos;s attention...
    </div>
  );
};

export default function PostPreview({ data: initialData, slug }) {
  const [data, loading] = useLiveQuery(initialData, singletoolsquery, {
    slug,
  });

  if (loading) {
    return <Loading />;
  }

  return <Tool data={data} />;
}
