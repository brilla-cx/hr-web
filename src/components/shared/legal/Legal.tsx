import { PortableText } from "@portabletext/react";

import Container from "@/components/layout/Container/Container";
import { Prose } from "@/components/ui";

import PageHeader from "../PageHeader/PageHeader";

function Legal({ data }) {
  const title = data?.name ?? "Default Title";
  const leadText = data?.tldr ?? "Default Lead Text";
  const content = data?.content ?? "Default Content";
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
      <div className="mx-auto mb-20 mt-14 flex max-w-screen-xl flex-col gap-5 px-5 md:flex-row">
        <article className="flex-1 ">
          <Prose className="prose mx-auto max-w-prose break-words">
            <PortableText value={content} />
          </Prose>
        </article>
      </div>
    </div>
  );
}

export default Legal;
