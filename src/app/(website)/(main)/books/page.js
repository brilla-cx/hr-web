import Books from "./books";

export function generateMetadata() {
  return {
    title: "Freelancing Book Club | Hey Rebekah",
    description:
      "Looking for some books to help with your freelancing? Join Hey Rebekah's Freelancing Book Club. We'll send you personalized recommendations each week.",
    openGraph: {
      title: "Freelancing Book Club | Hey Rebekah",
      description:
        "Looking for some books to help with your freelancing? Join Hey Rebekah's Freelancing Book Club. We'll send you personalized recommendations each week.",
      images: "/og.png",
    },
    twitter: {
      title: "Freelancing Book Club | Hey Rebekah",
      description:
        "Looking for some books to help with your freelancing? Join Hey Rebekah's Freelancing Book Club. We'll send you personalized recommendations each week.",
      images: "/og.png",
    },
  };
}

export default function BooksPage({ searchParams }) {
  return <Books searchParams={searchParams} />;
}

export const dynamic = "force-dynamic";

export const revalidate = 86400;
