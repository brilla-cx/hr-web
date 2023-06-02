import { draftMode } from "next/headers";
import { lazy } from "react";

import { PreviewSuspense } from "@/components/preview";
import {
  getBookbySlug,
} from "@/sanity/client";

import Post from "./post";

const PostPreview = lazy(() => import("./preview"));

export function generateStaticParams() {
  return [];
}

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const post = await getBookbySlug(params.slug);
  return {
    title: post?.name,
    description: post?.summary,
    openGraph: {
     title: post?.name,
    description: post?.summary,
    },
  };
}

export default async function PostPage({ params }) {
  const post = await getBookbySlug(params.slug);

  const { isEnabled: preview } = draftMode();

  if (preview) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PostPreview slug={params.slug}  />
      </PreviewSuspense>
    );
  }

  return <Post post={post}  />;
}

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      Just a sec, getting Rebekah's attention...
    </div>
  );
};
