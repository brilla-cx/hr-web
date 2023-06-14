/* eslint-disable react/jsx-no-bind */

import Pagination from "@/components/blog/pagination";
import PostAlt from "@/components/postalt";
import { getPaginatedAuthorsPosts } from "@/sanity/client";

export default async function PaginatedPosts({ slug, searchParams }) {
  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  const page = searchParams?.page;
  const pageIndex = parseInt(page, 10) || 1;

  // Set the number of posts to be displayed per page
  const POSTS_PER_PAGE = 12;

  // Define the parameters for fetching posts based on the current page
  const params = {
    slug: slug,
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  // Fetch the posts for the current page
  const posts = await getPaginatedAuthorsPosts(params);

  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = posts.length < POSTS_PER_PAGE;

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
          <PostAlt
            key={post._id}
            post={post}
            aspect="landscape"
            pathPrefix="books"
          />
        ))}
      </div>

      {/* The pagination buttons are contained in a navigation component.
      The buttons have a disabled state when at the first or last page, and use Tailwind CSS for styling, including padding, colors, and interaction states. */}
      <div className="my-16 flex items-center justify-center">
        <Pagination
          path={`author/${slug}`}
          pageIndex={pageIndex}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
        />
      </div>
    </div>
  );
}
