import Books from "./books";

export function generateMetadata() {
  const title = "Book Club";
  const description =
    "Looking for some books to help with your career? Join Hey Rebekah's Book Club. We'll send you personalized recommendations each week.";

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: "/og.png",
    },
    twitter: {
      title,
      description,
      images: "/og.png",
    },
  };

  return metadata;
}

export default function BooksPage({ searchParams }) {
  return <Books searchParams={searchParams} />;
}

export const dynamic = "force-dynamic";

export const revalidate = 86400;
