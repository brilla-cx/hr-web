import { draftMode } from "next/headers";
import { lazy } from "react";

import { PreviewSuspense } from "@/components/shared/preview";
import { SITE_URL } from "@/lib/constants";
import { getToolbySlug } from "@/sanity/client";

import Tool from "./components/Tool/Tool";

const PostPreview = lazy(() => import("./components/Preview/Preview"));

export function generateStaticParams() {
  return [];
}
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const data = await getToolbySlug(params.slug);

  const title = `Hey Rebekah ❤️ ${data.seoTitle || data.name}`;
  const description = `We’ll show you how we use ${
    data.seoTitle || data.name
  } and hook you up with our discount. Not an affiliate`;

  const dataUrl = `${SITE_URL}/built-with/${params.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: dataUrl,
    },
    twitter: {
      title,
      description,
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
