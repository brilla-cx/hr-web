import { SITE_URL } from "@/lib/constants";

import Gists from "./components/Gists/Gists";

export function generateMetadata() {
  const title = "Gist Archive";
  const description =
    "Looking for a Hey Rebekah gist? No problem! Search the archives for past issues of our daily newsletter, or read the latest on ChatGPT and AI from Hey Rebekah!";

  const url = `${SITE_URL}/gists`;

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

export default function GistsPage({ searchParams }) {
  return <Gists searchParams={searchParams} />;
}

export const revalidate = 3600;
