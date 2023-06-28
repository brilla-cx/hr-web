import Container from "@/components/layout/Container/Container";
import { SITE_URL } from "@/lib/constants";

import SignupHeader from "../components/SignupHeader/SignupHeader";
import SignupStepperForm from "../components/SignupStepForm/SignupStepperForm";
import SignupForm from "./SignupForm/SignupForm";

export default function Page() {
  return (
    <>
      <Container large className="">
        <div className="mt-16">
          <SignupHeader title="Sign Up" />
          {/* <SignupForm /> */}
          <SignupStepperForm />
        </div>
      </Container>
    </>
  );
}
export function generateMetadata() {
  const title = "Sign Up";
  const description =
    "Want to get get the jump on AI at work? Sign up for our newsletter. We'll deliver the best tips, tricks, and insights to your inbox. Free, hot, and fresh everyday.";
  const images = "/og.png";
  const url = `${SITE_URL}/signup`;

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      url,
    },
    twitter: {
      title,
      description,
      images,
    },
  };

  return metadata;
}
