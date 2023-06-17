import { PortableText } from "@portabletext/react";

import Container from "@/components/container";
import PageHeader from "@/components/sections/pageheader";
import { Prose } from "@/components/ui";
import { getLegalPageBySlug } from "@/sanity/client";

export function generateMetadata() {
  const title = "Privacy Policy";
  const description =
    "We're a privacy-first company. We'll never sell your information and will do everything we can to protect it. Read more details on the whos and the whats.";

  const metadata = {
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


export default async function Privacy() {
  const post = await getLegalPageBySlug("privacy");

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
            id="privacy"
            includeForm
          />
        </Container>
      </div>
      <div className="mx-auto mb-20 mt-14 flex max-w-screen-xl flex-col gap-5 px-5 md:flex-row">
        <article className="flex-1 ">
          <Prose className="prose mx-auto max-w-prose break-words ">
            <PortableText value={content} />
          </Prose>
        </article>
      </div>
    </div>
  );
}
