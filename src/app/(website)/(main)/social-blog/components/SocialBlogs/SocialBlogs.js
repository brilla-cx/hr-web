import { Suspense } from "react";

import Container from "@/components/layout/Container/Container";
import PageHeader from "@/components/shared/PageHeader/PageHeader";

import PaginatedSocialBlogs from "../PaginatedSocialBlogs/PaginatedSocialBlogs";

export default function SocialBlogs({searchParams}) {
  return (
    <div className="bg-midnight">
      <Container large className="border-l border-r border-neutral-200/10">
        <PageHeader
          title="Social Media Blog"
          leadText="Over 24M readers and counting since 2004. Accidentally actionable, always authentic. Proud member of the unemployables and working hard to make knowledge free for professionals everywhere. Join me and 338,000 members of my community as we learn to harness AI to make our careers more human. 👇🏾"
          id="sblogs"
          includeForm
        />
        <div className="mx-auto max-w-6xl px-4 text-gray-200">
          <Suspense
            fallback={
              <p className="text-center text-lg">Walking the dead...</p>
            }>
            <PaginatedSocialBlogs searchParams={searchParams}/>
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
