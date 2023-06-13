import { draftMode } from "next/headers";
import { lazy } from "react";

import { PreviewSuspense } from "@/components/preview";
import { getBookbySlug } from "@/sanity/client";

import Post from "./post";

const PostPreview = lazy(() => import("./preview"));

export function generateStaticParams() {
  return [];
}

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const book = await getBookbySlug(params.slug);
  return {
    title: book.seoTitle || book?.name,
    description: book.seoMetaDescription || book?.summary,
    openGraph: {
      title: book.seoTitle || book?.name,
      description: book.seoMetaDescription || book?.summary,
    },
    twitter: {
      title: book.seoTitle || book?.name,
      description: book.seoMetaDescription || book?.summary,
    },
  };
}

export default async function PostPage({ params }) {
  const post = await getBookbySlug(params.slug);

  const { isEnabled: preview } = draftMode();

  if (preview) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PostPreview slug={params.slug} />
      </PreviewSuspense>
    );
  }

  return <Post post={post} />;
}

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      Quick sec, waiting for Samuel to push a commit...
    </div>
  );
};
