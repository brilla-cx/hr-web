import Books from "./books";

export default function BooksPage({ searchParams }) {
  return <Books searchParams={searchParams} />;
}

export const dynamic = "force-dynamic";

// export const revalidate = 60;
