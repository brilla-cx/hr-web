import { draftMode } from "next/headers";
import { lazy } from "react";

import { PreviewSuspense } from "@/components/preview";
import {
  getAllPosts,
  getAllPostsSlugs,
  getPostBySlug,
  getTopCategories,
} from "@/sanity/client";

import Post from "./post";

const PostPreview = lazy(() => import("./preview"));

export async function generateStaticParams() {
  const slugs = await getAllPostsSlugs();
  const posts = await getAllPosts();
  const featuredSlugs = posts
    .filter((item) => item.featured)
    .map((item) => ({ slug: item.slug.current }));
  const combinedSlugs = [...new Set(slugs.concat(featuredSlugs))];
  return combinedSlugs;
}
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  const seoTitle = post?.name;
  const seoMetaDescription = post?.seoMetaDescription?.[0]?.children?.[0]?.text;

  return {
    title: post.seo?.seoTitle || seoTitle,
    description: post.seo?.seoDescription || seoMetaDescription,
    openGraph: {
      title: post.seo?.seoTitle || seoTitle,
      description: post.seo?.seoDescription || seoMetaDescription,
    },
    twitter: {
      title: post.seo?.seoTitle || seoTitle,
      description: post.seo?.seoDescription || seoMetaDescription,
    },
  };
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  const categories = await getTopCategories();

  const { isEnabled: preview } = draftMode();

  if (preview) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PostPreview slug={params.slug} categories={categories} />
      </PreviewSuspense>
    );
  }

  return <Post post={post} categories={categories} />;
}

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      Just a sec, getting Rebekah's attention...
    </div>
  );
};
