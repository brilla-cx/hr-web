import { draftMode } from "next/headers";

import PreviewProvider from "@/components/shared/PreviewProvider/PreviewProvider";
import { SITE_URL } from "@/lib/constants";
import {
  getAllPosts,
  getAllPostsSlugs,
  getPostBySlug,
  getTopCategories,
} from "@/sanity/client";

import Gist from "./components/Gist/Gist";
import GistPreview from "./components/Preview/GistPreview";

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

  const postUrl = `${SITE_URL}/gists/${params.slug}`;

  return {
    title: post.seo?.seoTitle || seoTitle,
    description: post.seo?.seoDescription || seoMetaDescription,
    openGraph: {
      title: post.seo?.seoTitle || seoTitle,
      description: post.seo?.seoDescription || seoMetaDescription,
      url: postUrl,
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
  const isInPreview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_WRITE_TOKEN }
    : undefined;
  if (isInPreview) {
    return (
      <PreviewProvider token={isInPreview.token!}>
        <GistPreview data={post} slug={params.slug} categories={categories} />
      </PreviewProvider>
    );
  }

  return <Gist post={post} categories={categories} />;
}

export const revalidate = 3600;
