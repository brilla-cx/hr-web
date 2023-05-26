import { PortableText } from "@portabletext/react";

import Container from "@/components/container";
import { Prose } from "@/components/ui";
import PageHeader from "@/components/ui/sections/pageheader";
import { getLegalPageBySlug } from "@/sanity/client";

export default async function Terms() {
  const post = await getLegalPageBySlug('terms');

  // Fetch the post data and insert it into the component
  const title = post?.name ?? "Default Title";
  const leadText = post?.tldr ?? "Default Lead Text";
  const content = post?.content ?? "Default Content";

  return (
    <div className="bg-white">
      <div className="bg-midnight">
        <Container
          large
          className="border-l border-r border-neutral-200 border-opacity-10">
          <PageHeader
            title={title}
            leadText={leadText}
            includeForm
            formId="terms-sub"
          />
        </Container>
      </div>
      <div className="mx-auto mb-20 mt-14 flex max-w-screen-xl flex-col gap-5 px-5 md:flex-row">
        <article className="flex-1 ">
          <Prose className="prose mx-auto max-w-prose">
            <PortableText value={content} />
          </Prose>
        </article>
      </div>
    </div>
  );
}
