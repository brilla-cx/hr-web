import {
  getAllPosts,
  getAllPostsSlugs,
  getPostBySlug,
  getTopCategories,
} from "@/sanity/client";

import Tool from "./tool";

export function generateStaticParams() {
  return [];
}
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  return {
    // title: post.seo?.title || post.name,
    // description: post.seo?.description || tldr,
    // openGraph: {
    //   title: post.seo?.title || post.name,
    //   description: post.seo?.description || tldr,
    // },
  };
}

export default async function PostPage({ params }) {
  // const post = await getPostBySlug(params.slug);
  return "Tools";
  // return <Post post={post} categories={categories} />;
}
