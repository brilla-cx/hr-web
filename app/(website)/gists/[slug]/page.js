import {
  getAllPosts,
  getAllPostsSlugs,
  getPostBySlug,
  getTopCategories,
} from "@/sanity/client";

import Post from "./post";

export async function generateStaticParams() {
  const slugs = await getAllPostsSlugs();
  const posts = await getAllPosts();
  const featuredSlugs = posts
    .filter((item) => item.featured)
    .map((item) => ({ slug: item.slug }));
  const combinedSlugs = [...new Set(slugs.concat(featuredSlugs))];
  return combinedSlugs;
}
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: post.name };
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  const categories = await getTopCategories();
  return <Post post={post} categories={categories} />;
}
