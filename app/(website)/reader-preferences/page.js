import Container from "@/components/container";
import PageHeader from "@/components/sections/pageheader";

import Preferences from "./preferences";

export default function Page() {
  return (
    <div>
      <div className="bg-midnight">
        <Container
          large
          className="border-l border-r border-neutral-200 border-opacity-10">
          <PageHeader
            title="Personalization FTW!"
            leadText="Take a minute to tell us about your content preferences. The more details you give us, the more we customize your newsletter with stuff you really want to read."
            includeForm={false}
          />
          <div>
            <Preferences />
          </div>
        </Container>
      </div>
    </div>
  );
}
