import Container from "@/components/container"; // Import Container component
import PageHeader from "@/components/ui/sections/pageheader"; // Import PageHeader component
export default function About() {
  //Placeholder to create route
  return (
    <div className="bg-midnight">
      {/* Container for the content, with border styles */}
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        {/* PageHeader component with title, lead text, includeForm, and formId */}
        <PageHeader
          title="About Hey Rebekah"
          leadText="Freelancers need better access to knowledge, skills, and tools to build thriving careers. That's our focus. Hey Rebekah is a free daily newsletter for freelancers. Everything we create is available for free to our readers and always will be. Not on the list? 👇🏼"
          includeForm
          formId="about-subscribe"
        />
      </Container>
    </div>
  );
}
