import { draftMode } from "next/headers";
import { lazy } from "react";

import { PreviewSuspense } from "@/components/preview";
import { SITE_URL } from "@/lib/constants";
import { getBookbySlug } from "@/sanity/client";

import Post from "./post";

const PostPreview = lazy(() => import("./preview"));

export function generateStaticParams() {
  return [];
}

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const book = await getBookbySlug(params.slug);

  const bookName = book?.name;

  const seoTitle = `Hey Rebekah ❤️ ${bookName}`;
  const seoMetaDescription = `Thinking about a good book? ${bookName} is one of our favorites. Read our quick summary then pick up your copy.`;

  const bookUrl = `${SITE_URL}/books/${params.slug}`;

  return {
    title: seoTitle,
    description: seoMetaDescription,
    openGraph: {
      title: seoTitle,
      description: seoMetaDescription,
      url: bookUrl,
    },
    twitter: {
      title: seoTitle,
      description: seoMetaDescription,
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
    <div className="flex min-h-screen flex-col items-center justify-center">
      Quick sec, waiting for Samuel to push a commit...
    </div>
  );
};
