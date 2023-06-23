"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  SearchBox,
  useInstantSearch,
} from "react-instantsearch-hooks-web";

import { timeAgo } from "@/lib/utils";
import { urlForImage } from "@/sanity/image";

import { searchClient } from '../searchClient';

export default function AlgoliaSearch({ closeModal }) {
  return (
    <div className="flex flex-col h-full bg-midnight border-neutral-200/10 border-2 mx-auto">
      <InstantSearch
        searchClient={searchClient}
        indexName="hey_rebekah"
        insights>
        <Configure
          analytics
          hitsPerPage={5}
        />
        <SearchBox
          autoFocus
          placeholder="Search for something..."
          classNames={{
            form: "relative",
            input:
              "text-gray-200 bg-slate-900 w-full py-3 border-b border-gray-200 focus:outline-none focus:ring-0 focus:border-pink [&:-webkit-search-cancel-button]:hidden placeholder-gray-400",
            submit: "absolute right-5 top-3.5",
            submitIcon: "w-4 h-4 fill-gray-200",
            reset: "absolute right-12 top-4 opacity-50",
            loadingIcon: "hidden",
          }}
        />

        <div className="h-auto overflow-auto">
          {/* <RefinementList attribute="brand" /> */}
          <EmptyQueryBoundary fallback={<EmptyFallback />}>
            <Hits hitComponent={Hit} onClick={closeModal} />
            {Hits.length > 0 && (
              <Pagination
                showFirst={false}
                showPrevious
                showNext
                showLast={false}
                classNames={{
                  root: "flex justify-center py-8",
                  list: "inline-flex space-x-2",
                  item:
                    "px-3 py-1 rounded text-gray-200 bg-gray-700 hover:bg-gray-800 ",
                  selectedItem: "px-3 py-1 rounded text-white bg-gray-900 border border-pink",
                }}
              />
            )}
          </EmptyQueryBoundary>
        </div>
      </InstantSearch>
    </div>
  );
}
function EmptyFallback() {
  return (
    <div className="flex items-center justify-center text-gray-400 mt-6">
      Feeling lucky today?
    </div>
  );
}

function getTypeLabel(type) {
  switch (type) {
    case "tool":
      return "Built With";
    case "book":
      return "Books";
    case "socialBlog":
      return "Social Blog";
    default:
      return "Gists";
  }
}

const TYPE_LOOKUP = {
  post: "gists",
  socialBlog: "social-blog",
  tool: "built-with",
  book: "books",
};

function Hit({ hit }) {
  const typeLabel = getTypeLabel(hit._type);

  return (
    <article className="relative flex items-center gap-5 px-5 py-2 border-b border-neutral-200/10 hover:bg-slate-800">
      {hit?.image && (
        <div className="w-12 h-12 lg:w-24 lg:h-24 shrink-0 flex items-center">
          <Image
            src={urlForImage(hit.image)?.src}
            width="100"
            height="100"
            alt={hit.image.imageAltText || "thumbnail"}
            className="object-cover w-12 h-12 lg:w-24 lg:h-24 bg-gray-200 item"
          />
        </div>
      )}
      <div>
        <span className="inline-block text-xs font-semibold tracking-wider text-pink-500 uppercase">
          {typeLabel}
        </span>

        <h1 className="text-lg max-w-xl font-semibold text-gray-200">
          <Link
            href={`/${TYPE_LOOKUP[hit._type]}/${hit?.slug?.current}` || "#"}>
            <span className="absolute inset-0" />
            <Highlight attribute="name" hit={hit} />
          </Link>
        </h1>
        <p className="text-xs text-gray-400">
          {timeAgo(hit.publishedAt || hit._createdAt)} by {hit.author}
        </p>
        <div className="mt-1 text-sm text-gray-400 max-w-xl line-clamp-2">
          <Highlight attribute="tldr" hit={hit} />
        </div>
      </div>
    </article>
  );
}

function EmptyQueryBoundary({ children, fallback }) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return fallback;
  }

  return children;
}