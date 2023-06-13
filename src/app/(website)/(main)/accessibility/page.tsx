import { PortableText } from "@portabletext/react";

import Container from "@/components/container";
import PageHeader from "@/components/sections/pageheader";
import { Prose } from "@/components/ui";
import { getLegalPageBySlug } from "@/sanity/client";

export function generateMetadata() {
  return {
    title: "Accessibility Statement",
    description:
      "The Hey Rebekah website aims to meet accessibility standards and provide an inclusive experience for all users. Though more work remains, we are continuously improving to ensure content is accessible to people with disabilities. Contact us with any accessibility issues. Accessibility is an ongoing process, and we welcome input on how to improve.",
  };
}

export default async function AccessibilityStatement() {
  const post = await getLegalPageBySlug("accessibility");

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
