import Container from "@/components/container";
import SignupHeader from "@/components/sections/signupheader";

import MultiStepForm from "./signupform";

export default function Page() {
  return (
    <>
      <Container large className="">
        <div className="mt-16">
          <SignupHeader title="Sign-Up" />
          <MultiStepForm />
        </div>
      </Container>
    </>
  );
}
