/* eslint-disable react/jsx-no-bind */
/**
 * PaginatedPosts Component
 * This component is responsible for rendering a paginated list of Gist posts on Hey Rebekah's Web App.
 * Path: app/(website)/social-blog/posts.js
 *
 * The PaginatedPosts component serves as an integral part of the Gists page that fetches and displays a list of "Social Blogs" or posts.
 * These posts are fetched from the Sanity CMS using a function named 'getPaginatedSocialBlogs' from "@/sanity/client".
 *
 * To achieve the pagination, we make use of useRouter and useSearchParams hooks from "next/navigation" to access the current page index from the URL's query string.
 * The range of posts to fetch is calculated based on the current page index and a constant POSTS_PER_PAGE which is set to 12.
 * These posts are then fetched asynchronously using the getPaginatedSocialBlogs function.
 *
 * The component also handles navigation to the next and previous pages of posts. This is accomplished by pushing new URLs to the router with the updated page index.
 * Each post is rendered using the PostAlt component, which is imported from "@/components/postalt".
 * The component also displays a set of navigation buttons which allow the user to navigate to the previous and next page of posts. These buttons are disabled when the user is on the first or last page respectively.
 *
 * The layout and style of the page are controlled with a div element and Tailwind CSS classes.
 * This component is particularly vital in maintaining a seamless user experience by providing easy navigation and an orderly display of posts.
 */

"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";

import SocialBlogAlt from "@/components/socialblogalt";
import { getPaginatedSocialBlogs } from "@/sanity/client";

export default async function PaginatedSocialBlogs() {
  // We access the Next.js router and search parameters
  const router = useRouter();
  const searchParams = useSearchParams();

  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  const page = searchParams.get("page");
  const pageIndex = parseInt(page, 10) || 1;

  // Set the number of posts to be displayed per page
  const POSTS_PER_PAGE = 12;

  // Define the parameters for fetching posts based on the current page
  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  // Fetch the posts for the current page
  const posts = await getPaginatedSocialBlogs(params);

  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = posts.length < POSTS_PER_PAGE;

  // Define functions for navigating to the next and previous pages
  // These functions update the page query parameter in the URL
  const handleNextPage = () => {
    router.push(`/social-blog?page=${pageIndex + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/social-blog?page=${pageIndex - 1}`);
  };

  return (
    <div>
      {/* If there are no posts, a message "End of the result!" is displayed. 
      The Tailwind CSS classes provide a flex container layout with vertically and horizontally centered content. */}
      {posts && posts?.length === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-300">End of the result!</span>
        </div>
      )}

      {/* This div serves as the container for the posts and utilizes CSS Grid layout through Tailwind CSS for varying column count depending on viewport size. */}
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {posts.map((post) => (
          <SocialBlogAlt key={post._id} post={post} aspect="landscape" />
        ))}
      </div>

      {/* The pagination buttons are contained in a navigation component.
      The buttons have a disabled state when at the first or last page, and use Tailwind CSS for styling, including padding, colors, and interaction states. */}
      <div className="my-16 md:my-24 flex items-center justify-center">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination">
          <button
            type="button"
            disabled={isFirstPage}
            onClick={handlePrevPage}
            className="relative inline-flex items-center gap-1 rounded-l-md border border-black px-3 py-2 pr-4 text-sm focus:z-20 disabled:pointer-events-none disabled:opacity-40 bg-pink text-black font-bold">
            <ChevronLeftIcon className="h-3 w-3" aria-hidden="true" />
            <span>Previous</span>
          </button>
          <button
            type="button"
            onClick={handleNextPage}
            disabled={isLastPage}
            className="relative inline-flex items-center gap-1 rounded-r-md border border-black px-3 py-2 pl-4 text-sm font-bold focus:z-20 disabled:pointer-events-none disabled:opacity-40 bg-pink text-black ">
            <span>Next</span>
            <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  );
}
