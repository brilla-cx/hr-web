import Container from "@/components/container";
import PageHeader from "@/components/ui/sections/pageheader";

function Contact({ children }) {
  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <PageHeader
          title="Contact Hey Rebekah"
          leadText="Need to reach out to the Hey Rebekah team? No problem. We're excited
          to hear from you. While you're here, subscribe and see what the buzz
          is about. 👇🏽"
          includeForm={false}
        />
        <div className="max-w-lg pb-16 mx-auto space-y-10 sm:pb-24 lg:px-8">
          {children}
        </div>
      </Container>
    </div>
  );
}

export default Contact;
