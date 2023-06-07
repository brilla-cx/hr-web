import Container from "@/components/container"; // Import Container component
import PageHeader from "@/components/sections/pageheader";

export default function Advertise() {
  //Placeholder to create route
  return (
    <div className="bg-midnight">
      {/* Container for the content, with border styles */}
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        {/* PageHeader component with title, lead text, includeForm, and formId */}
        <PageHeader
          title="Transparent and real-time reporting"
          leadText="Our performance data is transparent, accessible, and up-to-date. You'll get direct access to anonymized performance data when you sponsor us."
        />
      </Container>
    </div>
  );
}
