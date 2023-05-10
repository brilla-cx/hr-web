import { getAllAuthorsSlugs, getAuthorPostsBySlug } from "@/sanity/client";

import Author from "./author";

export async function generateStaticParams() {
  // eslint-disable-next-line no-return-await
  return await getAllAuthorsSlugs();
}

async function getAuthor(slug) {
  const posts = await getAuthorPostsBySlug(slug);
  return posts?.[0]?.author || {};
}

export async function generateMetadata({ params }) {
  const author = await getAuthor(params.author);
  return { title: author.name };
}

export default async function AuthorPage({ params }) {
  const posts = await getAuthorPostsBySlug(params.author);
  const author = await getAuthor(params.author);
  return <Author posts={posts} author={author} />;
}
