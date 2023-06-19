import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

import Container from "@/components/container";
import PageHeader from "@/components/sections/pageheader";
import { Prose } from "@/components/ui";
import { SITE_URL } from '@/lib/constants';
import { getLegalPageBySlug } from "@/sanity/client";


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
  const post: Post = await getLegalPageBySlug("accessibility");

  // Fetch the post data and insert it into the component
  const title = post?.name ?? "Default Title";
  const leadText = post?.tldr ?? "Default Lead Text";
  const content = post?.content ?? "Default Content";

  return (
    <div className="bg-white">
      <div className="bg-midnight">
        <Container large className="border-l border-r border-neutral-200/10">
          <PageHeader
            title={title}
            leadText={leadText}
            id="accessibility"
            includeForm
          />
        </Container>
      </div>
      <div className="flex flex-col max-w-screen-xl gap-5 px-5 mx-auto mb-20 mt-14 md:flex-row">
        <article className="flex-1 ">
          <Prose className="mx-auto prose max-w-prose">
            <PortableText value={content} />
          </Prose>
        </article>
      </div>
    </div>
  );
}

export const dynamic = 'force-static'
export const revalidate = false