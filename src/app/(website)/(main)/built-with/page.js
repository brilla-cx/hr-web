import { getAllTools, getToolsCategories } from "@/sanity/client";

import Tools from "./tools";

export function generateMetadata() {
  const title = "Side Hustle Stack";
  const description =
    "Our tech stack is your new side hustle stack. Browse our Built With directory to see what we use. Plus, grab exclusive discounts on these tools for your own business!";

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: "/og.png",
    },
    twitter: {
      title,
      description,
      images: "/og.png",
    },
  };

  return metadata;
}

export default async function BuiltWith() {
  const tools = await getAllTools();
  const categories = await getToolsCategories();
  return <Tools tools={tools} categories={categories} />;
}

export const revalidate = 86400;
