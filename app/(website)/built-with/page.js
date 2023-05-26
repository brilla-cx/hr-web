import { getAllTools, getToolsCategories } from "@/sanity/client";

import Tools from "./tools";

export default async function BuiltWith() {
  const tools = await getAllTools();
  const categories = await getToolsCategories();
  return <Tools tools={tools} categories={categories} />;
}

// export const revalidate = 60;
