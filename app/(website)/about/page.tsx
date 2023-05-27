import Container from "@/components/container";
import PageHeader from "@/components/ui/sections/pageheader";

export default function About() {

  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <PageHeader
          title="Knowledge should be free"
          leadText="Freelancers need better access to knowledge, skills, and tools to build thriving careers. That's our focus. Hey Rebekah is a free daily newsletter for freelancers. Everything we create is available for free to our readers and always will be. Not on the list? 👇🏼 "
          includeForm // Prop to include subscription form
          formId="about-sub" // formId prop for PageHeader
        />
      </Container>
    </div>
  );
}
