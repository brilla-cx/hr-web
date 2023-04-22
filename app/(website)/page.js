import HomePage from "./home";

import { getAllGists } from "@/sanity/client";

export default async function Home() {
  const posts = await getAllGists();
  return <HomePage posts={posts} />;
}

// export const revalidate = 60;
