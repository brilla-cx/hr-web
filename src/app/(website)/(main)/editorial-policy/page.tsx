import { draftMode } from "next/headers";

import Legal from "@/components/shared/legal/Legal";
import PreviewLegal from "@/components/shared/legal/PreviewLegal";
import PreviewProvider from "@/components/shared/PreviewProvider/PreviewProvider";
import { SITE_URL } from "@/lib/constants";
import { getLegalPageBySlug } from "@/sanity/client";
import { Metadata } from "@/types/types";

export function generateMetadata(): Metadata {
  const title = "Editorial Policy";
  const description =
    "The TL;DR? We're a free daily newsletter for knowledge workers. We write about AI. We don't accept money for affiliate links and always mark paid content.";

  const url = `${SITE_URL}/editorial-policy`;

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

export default async function EditorialPolicy() {
  const post: Post = await getLegalPageBySlug("editorial-policy");
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
