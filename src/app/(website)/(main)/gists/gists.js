import { Suspense } from "react";

import Container from "@/components/container";
import PageHeader from "@/components/sections/pageheader";

import PaginatedPosts from "./posts";

export default function Gists() {
  return (
    <div className="bg-midnight">
      <Container large className="border-l border-r border-neutral-200/10">
        <PageHeader
          title="Hey Rebekah gists"
          leadText="Our chronicles await. Who knew your brain could grow while popping
              a cold one? Settle in, pick a post and get better at what you do.
              Best yet, subscribe today and we'll throw in free delivery to your
              inbox."
          id="gists"
          includeForm
        />

        <div className="mx-auto max-w-6xl px-4 text-gray-200">
          <Suspense
            fallback={
              <p className="text-center text-lg">
                Susan went where?! Searching the premises...
              </p>
            }>
            <PaginatedPosts />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

// Export revalidate for controlling data fetching behavior
export const revalidate = 3600;
