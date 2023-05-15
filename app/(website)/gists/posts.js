/* eslint-disable react/jsx-no-bind */
"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";

import PostAlt from "@/components/postalt";
import { getPaginatedPosts } from "@/sanity/client";

export default async function PaginatedPosts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const pageIndex = parseInt(page, 10) || 1;

  const POSTS_PER_PAGE = 12;

  // [(($pageIndex - 1) * 10)...$pageIndex * 10]{
  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  const posts = await getPaginatedPosts(params);

  const isFirstPage = pageIndex < 2;
  const isLastPage = posts.length < POSTS_PER_PAGE;

  const handleNextPage = () => {
    router.push(`/gists?page=${pageIndex + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/gists?page=${pageIndex - 1}`);
  };

  return (
    <div>
      {posts && posts?.length === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-300">End of the result!</span>
        </div>
      )}

      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {posts.map((post) => (
          <PostAlt key={post._id} post={post} aspect="landscape" />
        ))}
      </div>
      <div className="my-16 flex items-center justify-center">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination">
          <button
            type="button"
            disabled={isFirstPage}
            onClick={handlePrevPage}
            className="relative inline-flex items-center gap-1 rounded-l-md   border border-black  px-3 py-2 pr-4 text-sm    focus:z-20 disabled:pointer-events-none disabled:opacity-40   bg-pink text-black font-bold">
            <ChevronLeftIcon className="h-3 w-3" aria-hidden="true" />
            <span>Previous</span>
          </button>
          <button
            type="button"
            onClick={handleNextPage}
            disabled={isLastPage}
            className="relative inline-flex items-center gap-1 rounded-r-md border border-black  px-3 py-2 pl-4 text-sm font-bold  focus:z-20 disabled:pointer-events-none disabled:opacity-40 bg-pink text-black ">
            <span>Next</span>
            <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  );
}
