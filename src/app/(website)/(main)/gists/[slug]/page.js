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
    title: post.seo?.title || seoTitle,
    description: post.seo?.description || seoMetaDescription,
    openGraph: {
      title: post.seo?.title || seoTitle,
      description: post.seo?.description || seoMetaDescription,
    },
    twitter: {
      title: post.seo?.title || seoTitle,
      description: post.seo?.description || seoMetaDescription,
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      Just a sec, getting Rebekah's attention...
    </div>
  );
};

export const revalidate = 3600;
