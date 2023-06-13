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
    title: `Hey Rebekah x ${data.seoTitle || data.name}`,
    description: `We’ll show you how we use ${
      data.seoTitle || data.name
    } and hook you up with our discount. Not an affiliate`,
    openGraph: {
      title: `Hey Rebekah x ${data.seoTitle || data.name}`,
      description: `We’ll show you how we use ${
        data.seoTitle || data.name
      } and hook you up with our discount. Not an affiliate`,
    },
    twitter: {
      title: `Hey Rebekah x ${data.seoTitle || data.name}`,
      description: `We’ll show you how we use ${
        data.seoTitle || data.name
      } and hook you up with our discount. Not an affiliate`,
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      Just a sec, getting Rebekah's attention...
    </div>
  );
};
