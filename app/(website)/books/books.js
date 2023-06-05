import Container from "@/components/container";
import PageHeader from "@/components/ui/sections/pageheader";

import PaginatedPosts from "./posts";

export default function Books({ searchParams }) {
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
          <PaginatedPosts searchParams={searchParams} />
        </div>
      </Container>
    </div>
  );
}

// Export revalidate for controlling data fetching behavior
export const revalidate = 3600;
