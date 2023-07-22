import { cache } from "react";

import { SITE_URL } from "@/lib/constants";
import { getAllTools, getToolsCategories } from "@/sanity/client";

import Tools from "./components/Tools/tools";

export function generateMetadata() {
  const title = "Side Hustle Stack";
  const description =
    "Our tech stack is your new side hustle stack. Browse our Built With directory to see what we use. Plus, grab exclusive discounts on these tools for your own business!";

  const url = `${SITE_URL}/built-with`;

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: "/og.png",
      url,
    },
    twitter: {
      title,
      description,
      images: "/og.png",
    },
  };

  return metadata;
}

const getToolsData = cache(async (params) => {
  const tools = await getAllTools();
  return tools;
});
const getCategorieData = cache(async () => {
  const categories = await getToolsCategories();
  return categories;
});

export default async function BuiltWith() {
  const tools = await getToolsData();
  const categories = await getCategorieData();
  return <Tools tools={tools} categories={categories} />;
}

export const dynamic = "force-dynamic";
