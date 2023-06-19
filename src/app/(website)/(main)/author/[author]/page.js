import { SITE_URL } from "@/lib/constants";
import {
  getAllAuthorsSlugs,
  getAuthorMeta,
  getAuthorPostsBySlug,
} from "@/sanity/client";

import Author from "./components/Author/Author";

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

  const authorName = authorSeoMeta?.name;
  const authorCategory =
    authorSeoMeta?.category || "stuff that'll blow your mind";

  const seoTitle = `Looking for ${authorName}'s latest writing?`;
  const seoMetaDescription = `${authorName} writes about ${authorCategory} for Hey Rebekah. They'll help you bring AI into your work.`;

  const authorUrl = `${SITE_URL}/author/${params.author}`;

  return {
    title: seoTitle,
    description: seoMetaDescription,
    openGraph: {
      title: seoTitle,
      description: seoMetaDescription,
      url: authorUrl,
    },
    twitter: {
      title: seoTitle,
      description: seoMetaDescription,
    },
  };
}

export default async function AuthorPage({ params, searchParams }) {
  const author = await getAuthor(params.author);
  return (
    <Author
      author={author}
      searchParams={searchParams}
      authorSlug={params.author}
    />
  );
}

export const dynamic = "force-dynamic";
