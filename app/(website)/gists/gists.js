/* eslint-disable react/jsx-no-bind */
"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

import Container from "@/components/container";
import PostAlt from "@/components/postalt";
import { fetcher } from "@/sanity/client";
import { paginatedpostsquery } from "@/sanity/groq";

export default function Gists({ posts: initialposts }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const pageIndex = parseInt(page, 10) || 1;

  const POSTS_PER_PAGE = 12;

  const [isLoading, setIsLoading] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  // [(($pageIndex - 1) * 10)...$pageIndex * 10]{
  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  // const fetcher = (query, params) =>
  //   client && client.fetch(query, params);

  const { data: posts, isValidating } = useSWR(
    [paginatedpostsquery, params],
    fetcher,
    {
      fallbackData: initialposts,
      onSuccess: () => {
        setIsLoading(false);
      },
    }
  );

  useEffect(() => {
    setIsFirstPage(pageIndex < 2);
  }, [pageIndex]);

  useEffect(() => {
    setIsLastPage(posts.length < POSTS_PER_PAGE);
  }, [posts]);

  const handleNextPage = () => {
    router.push(`/gists?page=${pageIndex + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/gists?page=${pageIndex - 1}`);
  };

  return (
    <div className="bg-dark-blue">
      <Container
        large
        className="border-l border-r border-light-grey border-opacity-10">
        <div className="mx-auto px-4 max-w-6xl">
          <h1 className="text-center text-3xl font-semibold tracking-tight text-white lg:text-4xl lg:leading-snug">
            Gists
          </h1>
          <div className="text-center">
            <p className="mt-2 text-lg text-white/50">
              See all posts we have ever written.
            </p>
          </div>
          {posts && posts?.length === 0 && (
            <div className="flex h-40 items-center justify-center">
              <span className="text-lg text-gray-300">End of the result!</span>
            </div>
          )}

          {isValidating && (
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
              {new Array(6).fill().map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index}>
                  <SkeletonImg />
                </div>
              ))}
            </div>
          )}
          {posts && !isLoading && !isValidating && (
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
              {posts.map((post) => (
                <PostAlt key={post._id} post={post} aspect="landscape" />
              ))}
            </div>
          )}
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
      </Container>
    </div>
  );
}

const SkeletonImg = () => {
  const style = `
    svg#skeleton #colorbase {
      stop-color: #0c1432;
    }
     svg#skeleton #colorhighlight {
      stop-color: #141f50;
    }
`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      id="skeleton"
      aria-labelledby="loading-aria"
      viewBox="0 0 500 500"
      preserveAspectRatio="none">
      <title id="loading-aria">Loading...</title>
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
        style={{ fill: 'url("#fill")' }}
      />
      <defs>
        <clipPath id="clip-path">
          <rect x="0" y="0" rx="2" ry="2" width="505" height="320" />
          <rect x="0" y="340" rx="0" ry="0" width="154" height="21" />
          <rect x="0" y="380" rx="0" ry="0" width="480" height="18" />
          <rect x="0" y="410" rx="0" ry="0" width="365" height="18" />
          <circle cx="20" cy="465" r="18" />
          <rect x="60" y="453" rx="0" ry="0" width="164" height="27" />
          <circle cx="250" cy="466" r="4" />
          <rect x="277" y="460" rx="0" ry="0" width="179" height="14" />
        </clipPath>
        <linearGradient id="fill">
          <stop
            offset="0.599964"
            stopColor="#f0f0f0"
            stopOpacity="1"
            id="colorbase">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="1.59996"
            stopColor="#f7f7f7"
            stopOpacity="1"
            id="colorhighlight">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="2.59996"
            stopColor="#f0f0f0"
            stopOpacity="1"
            id="colorbase">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
