import Container from "@/components/container";
import MultiStepForm from "@/components/sections/multistepform";
import SignupHeader from "@/components/sections/signupheader";

export default function Page() {
  return (
    <>
      <Container large className="border-l border-r border-neutral-200/10">
        <div className="mt-16">
          <SignupHeader title="Signup for Hey Rebekah" />
          <MultiStepForm />
        </div>
      </Container>
    </>
  );
}
