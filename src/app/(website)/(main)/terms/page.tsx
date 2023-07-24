import { Metadata } from "next";
import { draftMode } from "next/headers";
import { ReactElement } from "react";

import Legal from "@/components/shared/legal/Legal";
import PreviewLegal from "@/components/shared/legal/PreviewLegal";
import PreviewProvider from "@/components/shared/PreviewProvider/PreviewProvider";
import { SITE_URL } from "@/lib/constants";
import { getLegalBySlug } from "@/lib/server/getLegalPage";

export function generateMetadata(): Metadata {
  const title = "Terms of Service";
  const description =
    "Wondering about the fine print? No worries, read Hey Rebekah's Terms of Service for peace of mind. TL;DR version, if you're not happy, we're not happy.";

  const url = `${SITE_URL}/terms`;

  const metadata: Metadata = {
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

export default async function Terms(): Promise<ReactElement> {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;

  const post: Post = await getLegalBySlug("terms");

  if (preview) {
    return (
      <PreviewProvider token={preview.token!}>
        <PreviewLegal data={post} slug="privacy" />
      </PreviewProvider>
    );
  }

  return <Legal data={post} />;
}

export const dynamic = 'force-static'
export const revalidate = false