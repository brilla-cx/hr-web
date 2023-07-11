"use client";

import { useLiveQuery } from "next-sanity/preview";

import Legal from "@/components/shared/legal/Legal";
import { getlegalpagebyslugquery } from "@/sanity/groq";

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      Loading...
    </div>
  );
};

export default function PreviewLegal({ data: initialData, slug }) {
  const [data, loading] = useLiveQuery(initialData, getlegalpagebyslugquery, {
    slug,
  });

  if (loading) {
    return <Loading />;
  }

  return <Legal data={data} />;
}
