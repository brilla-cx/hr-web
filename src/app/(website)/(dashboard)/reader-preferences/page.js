import Container from "@/components/container";

import Preferences from "./preferences";
import SignupHeader from "@/components/sections/signupheader";

export function generateMetadata() {
  return {
    title: "Reader Prefrences | Hey Rebekah",
    description:
      "take a minute to tell us about your content preferences. The more details you give us, the more we customize your newsletter with stuff you really want to read.",
  };
}

export default function Page() {
  return (
    <Container large className="border-l border-r border-neutral-200/10">
      <div className="mt-16">
        <SignupHeader title="Personalization FTW!" />
        <Preferences />
      </div>
    </Container>
  );
}
