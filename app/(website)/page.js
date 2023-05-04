import { getAllPosts } from "@/sanity/client";

import HomePage from "./home";

export default async function Home() {
  const posts = await getAllPosts();
  return <HomePage posts={posts} />;
}

// export const revalidate = 60;
