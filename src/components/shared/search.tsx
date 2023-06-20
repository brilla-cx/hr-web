"use client";

import algoliasearch from "algoliasearch/lite";
import Image from "next/image";
import Link from "next/link";
import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
  useInstantSearch,
} from "react-instantsearch-hooks-web";

import { timeAgo } from "@/lib/utils";
import { urlForImage } from "@/sanity/image";

const searchClient = algoliasearch(
  "U5XNUAICIA",
  "5086892b29c9c6a9408401d4dc5313fd"
);

export default function AlgoliaSearch({ closeModal }) {
  return (
    <div className="flex flex-col h-full">
      <InstantSearch
        searchClient={searchClient}
        indexName="hey_rebekah"
        insights>
        <SearchBox
          autoFocus
          placeholder="Enter Keywords..."
          classNames={{
            form: "relative",
            input:
              "w-full py-3 border-b border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 [&:-webkit-search-cancel-button]:hidden",
            submit: "absolute right-5 top-3.5",
            submitIcon: "w-4 h-4",
            reset: "absolute right-12 top-4 opacity-50",
            loadingIcon: "hidden",
          }}
        />

        <div className="h-full overflow-auto">
          {/* <RefinementList attribute="brand" /> */}
          <EmptyQueryBoundary fallback={<EmptyFallback />}>
            <Hits hitComponent={Hit} onClick={closeModal} />
          </EmptyQueryBoundary>
        </div>
      </InstantSearch>
    </div>
  );
}
function EmptyFallback() {
  return (
    <div className="flex items-center justify-center h-full text-gray-400">
      Start typing something...
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
    <article className="relative flex items-start gap-5 p-5 border-b border-gray-200 hover:bg-gray-50">
      {hit?.image && (
        <div className="w-16 h-16 mt-2 bg-gray-100 shrink-0">
          <Image
            src={urlForImage(hit.image)?.src}
            width="64"
            height="64"
            alt={hit.image.imageAltText || "thumbnail"}
            className="object-cover w-16 h-16"
          />
        </div>
      )}
      <div>
        <span className="inline-block text-xs font-semibold tracking-wider text-pink-500 uppercase">
          {typeLabel}
        </span>

        <h1 className="text-lg font-bold">
          <Link
            href={`/${TYPE_LOOKUP[hit._type]}/${hit?.slug?.current}` || "#"}>
            <span className="absolute inset-0" />
            <Highlight attribute="name" hit={hit} />
          </Link>
        </h1>
        <p className="text-sm text-gray-600">
          {timeAgo(hit.publishedAt || hit._createdAt)} by {hit.author}
        </p>
        <div className="mt-2 text-sm text-gray-700">
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
