import { SITE_URL } from "@/lib/constants";

import SocialBlogs from "./components/SocialBlogs/SocialBlogs";

export function generateMetadata() {
  const title = "Rebekah Radice's Blog";
  const description =
    "Rebekah Radice is a social media speaker, consultant, and trainer in Los Angeles, CA. She's now focused on helping the world adopt AI to upskill their work.";

  const url = `${SITE_URL}/social-blog`;

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

export default function SocialBlogsPage({searchParams}) {
  return <SocialBlogs searchParams={searchParams}/>;
}

export const dynamic = "force-dynamic";
