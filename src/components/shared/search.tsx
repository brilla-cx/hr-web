"use client";

import algoliasearch from "algoliasearch/lite";
import Link from "next/link";
import {
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
  useInstantSearch,
} from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "U5XNUAICIA",
  "5086892b29c9c6a9408401d4dc5313fd"
);

export default function AlgoliaSearch() {
  return (
    <div className="flex h-full flex-col bg-white">
      <InstantSearch
        searchClient={searchClient}
        indexName="hey_rebekah"
        insights>
        <SearchBox />

        <div className="h-full overflow-auto">
          {/* <RefinementList attribute="brand" /> */}
          <EmptyQueryBoundary fallback={<EmptyFallback />}>
            <Hits hitComponent={Hit} />
          </EmptyQueryBoundary>
        </div>
      </InstantSearch>
    </div>
  );
}
function EmptyFallback() {
  return <div>Start typing something...</div>;
}

function Hit({ hit }) {
  return (
    <article className="flex py-5">
      {/* <img src={hit.image} alt={hit.name} className="h-16 w-16" /> */}
      <div>
        {/* <p>{hit.categories[0]}</p> */}
        <h1>
          <Link href={`/gists/${hit?.slug?.current}` || "#"}>
            <Highlight attribute="name" hit={hit} />
          </Link>
        </h1>
        <p>
          {hit.publishedAt || hit._createdAt} by {hit.author}
        </p>
        <Highlight attribute="tldr" hit={hit} />
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
