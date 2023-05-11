import { getPaginatedPosts } from "@/sanity/client";

import Gists from "./gists";

const POSTS_PER_PAGE = 12;

export default async function GistsPage() {
  const posts = await getPaginatedPosts(POSTS_PER_PAGE);
  return <Gists posts={posts} />;
}

// export const revalidate = 60;
