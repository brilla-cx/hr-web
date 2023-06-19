import { SITE_URL } from "@/lib/constants";

import Books from "./books";

export function generateMetadata() {
  const title = "Book Club";
  const description =
    "Looking for some books to help with your career? Join Hey Rebekah's Book Club. We'll send you personalized recommendations each week.";

  const url = `${SITE_URL}/books`;

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: "/og.png",
      url,
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
