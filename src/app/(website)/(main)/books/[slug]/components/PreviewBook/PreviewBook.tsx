"use client";

import { useLiveQuery } from "next-sanity/preview";

import { singlebookquery } from "@/sanity/groq";

import Book from "../Book/Book";

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      Quick sec, waiting for Samuel to push a commit...
    </div>
  );
};

export default function PreviewBook({ data: initialData, slug }) {
  const [data, loading] = useLiveQuery(initialData, singlebookquery, {
    slug: slug,
  });

  if (loading) {
    return <Loading />;
  }

  return <Book post={data} />;
}
