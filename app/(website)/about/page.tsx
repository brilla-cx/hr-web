import Container from "@/components/container";
import PageHeader from "@/components/sections/pageheader";

export default function About() {
  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <PageHeader
          title="Knowledge should be free"
          leadText="We start from that basic principle. We believe paid courses should be obsolete. For our part, we're starting by helping the world's +2,900,000,000 knowledge workers upskill their work with AI. Not on the list? 👇🏼 "
          includeForm
          formId="about-sub"
        />
      </Container>
    </div>
  );
}
