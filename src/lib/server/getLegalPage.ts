import { cache } from "react";

import { getLegalPageBySlug } from "@/sanity/client";

export const getLegalBySlug = cache(async (slug: string) => {
  const page = await await getLegalPageBySlug(slug);
  return page;
});
