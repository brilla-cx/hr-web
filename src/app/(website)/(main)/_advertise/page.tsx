import Container from "@/components/layout/Container/Container"; // Import Container component
import PageHeader from "@/components/shared/PageHeader/PageHeader";

export default function Advertise() {
  //Placeholder to create route
  return (
    <div className="bg-midnight">
      {/* Container for the content, with border styles */}
      <Container
        large
        className="border-l border-r border-neutral-200/10">
        {/* PageHeader component with title, lead text, includeForm, and formId */}
        <PageHeader
          title="Transparent and real-time reporting"
          leadText="Our performance data is transparent, accessible, and up-to-date. You'll get direct access to anonymized performance data when you sponsor us."
          id="advertise"
          includeForm
        />
      </Container>
    </div>
  );
}
