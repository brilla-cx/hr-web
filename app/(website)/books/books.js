import { Suspense } from "react";

import Container from "@/components/container";
import PageHeader from "@/components/ui/sections/pageheader";

import PaginatedPosts from "./posts";

export default function Books() {
  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <PageHeader
          title="Hey Rebekah Book Club"
          leadText="A collection of our favorite books and recommended reading."
          includeForm
          formId="books-sub"
        />

        <div className="mx-auto max-w-6xl px-4 text-gray-200">
          <Suspense
            fallback={<p>Susan went where?! Searching the premises...</p>}>
            <PaginatedPosts />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

// Export revalidate for controlling data fetching behavior
export const revalidate = 3600;