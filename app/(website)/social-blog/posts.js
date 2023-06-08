/* eslint-disable react/jsx-no-bind */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import SocialBlogAlt from "@/components/socialblogalt";
import { getPaginatedSocialBlogs } from "@/sanity/client";

export default async function PaginatedSocialBlogs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page");
  const pageIndex = parseInt(page, 10) || 1;

  const POSTS_PER_PAGE = 12;

  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  const posts = await getPaginatedSocialBlogs(params);

  const isFirstPage = pageIndex < 2;
  const isLastPage = posts.length < POSTS_PER_PAGE;

  const handleNextPage = () => {
    router.push(`/social-blog?page=${pageIndex + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/social-blog?page=${pageIndex - 1}`);
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
          <SocialBlogAlt key={post._id} post={post} aspect="landscape" />
        ))}
      </div>

      <div className="my-16 flex items-center justify-center md:my-24">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination">
          <button
            type="button"
            disabled={isFirstPage}
            onClick={handlePrevPage}
            className={`text-med relative inline-flex items-center gap-1 rounded-l-md px-3 py-2 pr-4 font-display text-sm font-bold uppercase text-gray-400 hover:bg-slate-800 hover:font-bold hover:text-gray-200 focus:z-20 disabled:pointer-events-none disabled:opacity-40`}>
            <FaCaretLeft
              className="mr-2 h-3 w-3 text-gray-400 hover:text-gray-200"
              aria-hidden="true"
            />
            <span>Previous</span>
          </button>
          <button
            type="button"
            onClick={handleNextPage}
            disabled={isLastPage}
            className={`text-med relative inline-flex items-center gap-1 rounded-r-md px-3 py-2 pl-4 font-display text-sm font-bold uppercase text-gray-400 hover:bg-slate-800 hover:font-bold hover:text-gray-200 focus:z-20 disabled:pointer-events-none disabled:opacity-40`}>
            <span>Next</span>
            <FaCaretRight
              className="ml-2 h-3 w-3 text-gray-400 hover:text-gray-200"
              aria-hidden="true"
            />
          </button>
        </nav>
      </div>
    </div>
  );
}
