import Gists from "./gists";

export function generateMetadata() {
  return {
    title: "Gist Archive | Hey Rebekah",
    description:
      "Looking for a Hey Rebekah gist? No problem! Search the archives for past issues of our daily newsletter, or read the latest gist from Hey Rebekah!",
    openGraph: {
      title: "Gist Archive | Hey Rebekah",
      description:
        "Looking for a Hey Rebekah gist? No problem! Search the archives for past issues of our daily newsletter, or read the latest gist from Hey Rebekah!",
      images: "/og.png",
    },
    twitter: {
      title: "Gist Archive | Hey Rebekah",
      description:
        "Looking for a Hey Rebekah gist? No problem! Search the archives for past issues of our daily newsletter, or read the latest gist from Hey Rebekah!",
      images: "/og.png",
    },
  };
}

export default function GistsPage() {
  return <Gists />;
}

export const revalidate = 3600;
