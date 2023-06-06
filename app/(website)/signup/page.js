import Container from "@/components/container";
import MultiStepForm from "@/components/sections/multistepform";
import PageHeader from "@/components/sections/pageheader";

export default function Page() {
  return (
    <div>
      <div className="bg-midnight">
        <Container
          large
          className="border-l border-r border-neutral-200 border-opacity-10">
          <PageHeader
            title="Signup for Hey Rebekah"
            leadText="Join our community of over 320,000 professionals. "
            includeForm={false}
          />

          <div>
            <MultiStepForm />
          </div>
        </Container>
      </div>
    </div>
  );
}
