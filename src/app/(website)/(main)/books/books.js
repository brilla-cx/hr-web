import Container from "@/components/container";
import PageHeader from "@/components/sections/pageheader";

import PaginatedPosts from "./posts";

export default function Books({ searchParams }) {
  return (
    <div className="bg-midnight">
      <Container large className="border-l border-r border-neutral-200/10">
        <PageHeader
          title="Hey Rebekah's Book Club"
          leadText="Must-reads for knowledge workers climbing the ladder or blazing a new trail. These books were chosen for ideas worth a fortune but costing only what's in your library. One new mind-bending, career-mending page-turner delivered weekly, gratis. Join us?"
          id="books"
          includeForm
        />

        <div className="mx-auto max-w-6xl px-4 text-gray-200">
          <PaginatedPosts searchParams={searchParams} />
        </div>
      </Container>
    </div>
  );
}

// Export revalidate for controlling data fetching behavior
export const revalidate = 86400;
