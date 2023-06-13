import {
  getAllAuthorsSlugs,
  getAuthorMeta,
  getAuthorPostsBySlug,
} from "@/sanity/client";

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
  const authorSeoMeta = await getAuthorMeta(params.author);
  const seoTitle = authorSeoMeta?.seoTitle || authorSeoMeta?.name;
  const seoMetaDescription =
    authorSeoMeta?.seoMetaDescription || authorSeoMeta?.expertise;

  return {
    title: seoTitle,
    description: seoMetaDescription,
    openGraph: {
      title: seoTitle,
      description: seoMetaDescription,
    },
    twitter: {
      title: seoTitle,
      description: seoMetaDescription,
    },
  };
}

export default async function AuthorPage({ params }) {
  const posts = await getAuthorPostsBySlug(params.author);
  const author = await getAuthor(params.author);
  return <Author posts={posts} author={author} />;
}
