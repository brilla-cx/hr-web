import { draftMode } from "next/headers";

import PreviewProvider from "@/components/shared/PreviewProvider/PreviewProvider";
import { SITE_URL } from "@/lib/constants";
import { getBookbySlug } from "@/sanity/client";

import Post from "./components/Book/Book";
import PreviewBook from "./components/PreviewBook/PreviewBook";

export function generateStaticParams() {
  return [];
}

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const book = await getBookbySlug(params.slug);

  const bookName = book?.name;

  const seoTitle = `Hey Rebekah ❤️ ${bookName}`;
  const seoMetaDescription = `Thinking about a good book? ${bookName} is one of our favorites. Read our quick summary then pick up your copy.`;

  const bookUrl = `${SITE_URL}/books/${params.slug}`;

  return {
    title: seoTitle,
    description: seoMetaDescription,
    openGraph: {
      title: seoTitle,
      description: seoMetaDescription,
      url: bookUrl,
    },
    twitter: {
      title: seoTitle,
      description: seoMetaDescription,
    },
  };
}

export default async function PostPage({ params }) {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;

  const post = await getBookbySlug(params.slug);

  if (preview) {
    return (
      <PreviewProvider token={preview.token!}>
        <PreviewBook data={post} slug={params.slug} />
      </PreviewProvider>
    );
  }

  return <Post post={post} />;
}
