import { getCategorybySlug } from "@/sanity/client";

import Category from "./category";

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }) {
  const category = await getCategorybySlug(params.category);

  const description = `Hey Rebekah writes about ${category.name} and a bunch of other AI-related stuff too. Not a reader? Join 338K+ community members today, it's free!`;

  return {
    title: `Read about ${category.name}`,
    description: description,
    robots: {
      index: "noindex",
      follow: "nofollow",
    },
  };
}

export const dynamicParams = true;

export default async function AuthorPage({ params, searchParams }) {
  const category = await getCategorybySlug(params.category);

  return <Category category={category} searchParams={searchParams} />;
}

export const dynamic = "force-dynamic";
