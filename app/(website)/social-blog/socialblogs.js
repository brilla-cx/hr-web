import { Suspense } from "react";

import Container from "@/components/container";
import PageHeader from "@/components/sections/pageheader";

import PaginatedPosts from "./posts";

export default function SocialBlogs() {
  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <PageHeader
          title="Social Media Blog"
          leadText="Since launching in 2004, over 24 million unique visitors have read my posts, and no, it's not just my mom on a refresh marathon."
          id="social-blog"
          includeForm
        />
        <div className="mx-auto max-w-6xl px-4 text-gray-200">
          <Suspense fallback={<p>Walking the dead...</p>}>
            <PaginatedPosts />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

// Export revalidate for controlling data fetching behavior
export const revalidate = 3600;
