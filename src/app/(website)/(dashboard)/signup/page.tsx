import { Metadata } from "next";

import Container from "@/components/layout/Container/Container";
import { SITE_URL } from "@/lib/constants";
import { generateMetadataHelper } from "@/lib/generateMetadata";

import SignupHeader from "../components/SignupHeader/SignupHeader";
import SignupStepperForm from "./components/SignupStepperForm";

const signUpTitle = "Sign Up";
const signUpDescription =
  "Want to get the jump on AI at work? Sign up for our newsletter. We'll deliver the best tips, tricks, and insights to your inbox. Free, hot, and fresh everyday.";
const signUpUrl = `${SITE_URL}/signup`;

export function generateMetadata(): Metadata {
  return generateMetadataHelper(signUpTitle, signUpDescription, signUpUrl);
}

export default function Page() {
  return (
    <>
      <Container large className="mt-16">
        <SignupHeader title="Sign Up" />
        <SignupStepperForm />
      </Container>
    </>
  );
}
