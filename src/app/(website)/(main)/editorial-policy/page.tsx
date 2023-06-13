import { PortableText } from "@portabletext/react";

import Container from "@/components/container";
import PageHeader from "@/components/sections/pageheader";
import { Prose } from "@/components/ui";
import { getLegalPageBySlug } from "@/sanity/client";

export function generateMetadata() {
  return {
    title: "Editorial Policy | Hey Rebekah",
    description:
      "The TL;DR? We're a free daily newsletter for freelancers that does not accept money for affiliate links and always marks sponsored content.",
    openGraph: {
      title: "Editorial Policy | Hey Rebekah",
      description:
        "The TL;DR? We're a free daily newsletter for freelancers that does not accept money for affiliate links and always marks sponsored content.",
      images: "/og.png",
    },
    twitter: {
      title: "Editorial Policy | Hey Rebekah",
      description:
        "The TL;DR? We're a free daily newsletter for freelancers that does not accept money for affiliate links and always marks sponsored content.",
      images: "/og.png",
    },
  };
}

export default async function EditorialPolicy() {
  const post = await getLegalPageBySlug("editorial-policy");

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
            id="editorial"
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
