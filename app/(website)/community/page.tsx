import Container from "@/components/container";
import PageHeader from "@/components/ui/sections/pageheader";

export default function Community() {

  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <PageHeader
          title="Community"
          leadText="Knowledge should be free and accessible to all. We built this community to connect freelancers and share resources that help you thrive in your work."
          includeForm
          formId="community-sub"
        />
      </Container>
    </div>
  );
}
