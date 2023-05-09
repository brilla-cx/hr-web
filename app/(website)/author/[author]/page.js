import { getAllAuthorsSlugs, getAuthorPostsBySlug } from "@/sanity/client";

import Author from "./author";

export async function generateStaticParams() {
  const slugs = await getAllAuthorsSlugs();
  return slugs;
}

async function getAuthor(slug) {
  const posts = await getAuthorPostsBySlug(slug);
  return posts?.[0]?.author || {};
}

export async function generateMetadata({ params }) {
  const author = await getAuthor(params.author);
  return { title: author.title };
}

export default async function AuthorPage({ params }) {
  const posts = await getAuthorPostsBySlug(params.author);
  const author = await getAuthor(params.author);
  return <Author posts={posts} author={author} />;
}
