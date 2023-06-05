/* eslint-disable react/jsx-no-bind */

"use client";

import { useRouter } from "next/navigation";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function Pagination({
  pageIndex,
  isFirstPage,
  isLastPage,
  path,
}) {
  const router = useRouter();

  // Define functions for navigating to the next and previous pages
  // These functions update the page query parameter in the URL
  const handleNextPage = () => {
    router.push(`/${path}?page=${pageIndex + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/${path}?page=${pageIndex - 1}`);
  };

  return (
    <nav
      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
      aria-label="Pagination">
      <button
        type="button"
        disabled={isFirstPage}
        onClick={handlePrevPage}
        className={`text-med relative inline-flex items-center gap-1 rounded-l-md px-3 py-2 pr-4 font-display text-sm font-bold uppercase text-gray-400 hover:bg-slate-900 hover:font-bold hover:text-gray-200 focus:z-20 disabled:pointer-events-none disabled:opacity-40`}>
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
        className={`text-med relative inline-flex items-center gap-1 rounded-r-md px-3 py-2 pl-4 font-display text-sm font-bold uppercase text-gray-400 hover:bg-slate-900 hover:font-bold hover:text-gray-200 focus:z-20 disabled:pointer-events-none disabled:opacity-40`}>
        <span>Next</span>
        <FaCaretRight
          className="ml-2 h-3 w-3 text-gray-400 hover:text-gray-200"
          aria-hidden="true"
        />
      </button>
    </nav>
  );
}
