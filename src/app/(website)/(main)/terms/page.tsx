import { PortableText } from "@portabletext/react";
import { ReactElement } from "react";

import Container from "@/components/container";
import PageHeader from "@/components/sections/pageheader";
import { Prose } from "@/components/ui";
import { getLegalPageBySlug } from "@/sanity/client";
import { Metadata } from "@/types/types";

export function generateMetadata(): Metadata {
  const title = "Terms of Service";
  const description =
    "Wondering about the fine print? No worries, read Hey Rebekah's Terms of Service for peace of mind. TL;DR version, if you're not happy, we're not happy.";

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: "/og.png",
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
  const post: Post = await getLegalPageBySlug("terms");

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
            id="terms"
            includeForm
          />
        </Container>
      </div>
      <div className="flex flex-col max-w-screen-xl gap-5 px-5 mx-auto mb-20 mt-14 md:flex-row">
        <article className="flex-1 ">
          <Prose className="mx-auto prose max-w-prose break-words">
            <PortableText value={content} />
          </Prose>
        </article>
      </div>
    </div>
  );
}
