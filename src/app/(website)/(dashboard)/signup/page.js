import { Fragment } from "react";

import Container from "@/components/container";
import MultiStepForm from "@/components/sections/multistepform";
import PageHeader from "@/components/sections/pageheader";

export default function Page() {
  return (
    <Fragment>
      <Container large className="border-l border-r border-neutral-200/10">
        <PageHeader
          title="Signup for Hey Rebekah"
          leadText="This is just the best thing I've ever read! ~ Nancy (Rebekah's mom) "
          includeForm={false}
        />
        <div>
          <MultiStepForm />
        </div>
      </Container>
    </Fragment>
  );
}
