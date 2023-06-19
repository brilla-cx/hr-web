import Container from "@/components/layout/Container/Container";
import PageHeader from "@/components/shared/PageHeader/PageHeader";

export default function Community() {
  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200/10">
        <PageHeader
          title="Community"
          leadText="Knowledge should be free and accessible to all. We built this community to connect knowledge workers and share resources that help you thrive in your work using AI."
          id="community"
          includeForm
        />
      </Container>
    </div>
  );
}
