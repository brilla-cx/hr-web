import { getPostsByCategory } from "@/sanity/client";

import Category from "./category";

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }) {
  const category = await getCategory(params.category);

  const description = `Hey Rebekah writes about ${category.name} and a bunch of other AI-related stuff too. Not a reader? Join 338K+ community members today, it's free!`;

  const trimmedDescription = description.replace(/\s+/g, " ").trim();

  return {
    title: `Read about ${category.name}`,
    description: trimmedDescription,
    robots: {
      index: "noindex",
      follow: "nofollow",
    },
  };
}

export const dynamicParams = true;

async function getCategory(slug) {
  const posts = await getPostsByCategory(slug);
  return posts?.[0]?.category?.[0] || {};
}

// export async function generateMetadata({ params }) {
//   // const author = await getAuthor(params.author);
//   return { title: author.name };
// }

export default async function AuthorPage({ params }) {
  const posts = await getPostsByCategory(params.category);
  const category = await getCategory(params.category);

  // console.log(posts, category);
  return <Category posts={posts} category={category} />;
}
