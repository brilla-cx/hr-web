/* eslint-disable react/jsx-no-bind */
import { cache } from "react";

import Pagination from "@/components/shared/post/Pagination/Pagination";
import { getPaginatedSocialBlogs } from "@/sanity/client";

import SocialBlogAlt from "../SocialBlogAlt/SocialBlogAlt";

export const getSocialPostData = cache(async (params) => {
  const posts = await getPaginatedSocialBlogs(params);

  return posts;
});

export default async function PaginatedSocialBlogs({ searchParams }) {
  const page = searchParams?.page;
  const pageIndex = parseInt(page, 10) || 1;

  const POSTS_PER_PAGE = 12;

  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  const posts = await getSocialPostData(params);

  const isFirstPage = pageIndex < 2;
  const isLastPage = posts.length < POSTS_PER_PAGE;

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
        {/* The pagination buttons are contained in a navigation component.
      The buttons have a disabled state when at the first or last page, and use Tailwind CSS for styling, including padding, colors, and interaction states. */}
        <div className="my-16 flex items-center justify-center">
          <Pagination
            path="social-blog"
            pageIndex={pageIndex}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
          />
        </div>
      </div>
    </div>
  );
}
