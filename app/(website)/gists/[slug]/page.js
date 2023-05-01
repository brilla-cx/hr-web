import Post from "./post";
import {
  getAllPostsSlugs,
  getPostBySlug,
  getTopCategories,
} from "@/sanity/client";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: post.name };
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  const categories = [];
  // const categories = await getTopCategories();
  return <Post post={post} categories={categories} />;
}
