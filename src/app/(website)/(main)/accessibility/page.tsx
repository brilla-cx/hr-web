import { Metadata } from "next";
import { draftMode } from "next/headers";

import Legal from "@/components/shared/legal/Legal";
import PreviewLegal from "@/components/shared/legal/PreviewLegal";
import PreviewProvider from "@/components/shared/PreviewProvider/PreviewProvider";
import { SITE_URL } from "@/lib/constants";
import { getLegalBySlug } from "@/lib/server/getLegalPage";

export function generateMetadata(): Metadata {
  const title = "Accessibility";
  const description =
    "Hey Rebekah strives for inclusive design for our readers. We're continually improving but it's a process. Please reach out to us for accessibility issues.";

  const url = `${SITE_URL}/accessibility`;

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

export default async function AccessibilityStatement() {
  const post: Post = await getLegalBySlug("accessibility");

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
