import { draftMode } from "next/headers";
import { lazy } from "react";

import { PreviewSuspense } from "@/components/preview";
import { getToolbySlug } from "@/sanity/client";

import Tool from "./tool";

const PostPreview = lazy(() => import("./preview"));

export function generateStaticParams() {
  return [];
}
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const data = await getToolbySlug(params.slug);
  return {
    title: `Hey Rebekah x ${data.name}`,
    description: data.shortDescription,
    openGraph: {
      title: `Hey Rebekah x ${data.name}`,
      description: data.shortDescription,
    },
  };
}

export default async function PostPage({ params }) {
  const data = await getToolbySlug(params.slug);
  const { isEnabled: preview } = draftMode();

  if (preview) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PostPreview slug={params.slug} />
      </PreviewSuspense>
    );
  }

  return <Tool data={data} />;
}

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      Just a sec, getting Rebekah's attention...
    </div>
  );
};
