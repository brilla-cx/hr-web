import { Metadata } from "next";
import { draftMode } from "next/headers";
import { ReactElement } from "react";

import Legal from "@/components/shared/legal/Legal";
import PreviewLegal from "@/components/shared/legal/PreviewLegal";
import PreviewProvider from "@/components/shared/PreviewProvider/PreviewProvider";
import { SITE_URL } from "@/lib/constants";
import { getLegalPageBySlug } from "@/sanity/client";

export function generateMetadata(): Metadata {
  const title = "Privacy Policy";
  const description =
    "We're a privacy-first company. We'll never sell your information and will do everything we can to protect it. Read more details on the whos and the whats.";

  const url = `${SITE_URL}/privacy`;

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

interface Post {
  name?: string;
  tldr?: string;
  content?: any;
}

export default async function Privacy(): Promise<ReactElement> {
  const post: Post = await getLegalPageBySlug("privacy");

  const isInPreview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_WRITE_TOKEN }
    : undefined;

  if (isInPreview) {
    return (
      <PreviewProvider token={isInPreview.token!}>
        <PreviewLegal data={post} slug="privacy" />
      </PreviewProvider>
    );
  }

  return <Legal data={post} />;
}

export const dynamic = "force-static";
export const revalidate = false;
