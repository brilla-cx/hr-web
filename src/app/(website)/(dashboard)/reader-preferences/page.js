import Container from "@/components/layout/Container/Container";
import { SITE_URL } from "@/lib/constants";

import SignupHeader from "../components/SignupHeader/SignupHeader";
import PrefrencesForm2 from "./PreferencesForm/PrefrencesForm2";

export function generateMetadata() {
  const title = "Reader Prefrences";
  const description =
    "Take a minute to tell us about your content preferences. We'll use machine learning to whip up a more personalized newsletter for you. It's like a custom feed to your inbox. Sweet!";
  const images = "/og.png";
  const url = `${SITE_URL}/reader-preferences`;

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

export default function Page() {
  return (
    <Container large className="">
      <div className="mt-16">
        <SignupHeader title="Personalization FTW!" />
        {/* <PreferencesForm /> */}
        <PrefrencesForm2 />
      </div>
    </Container>
  );
}
