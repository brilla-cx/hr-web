import { Metadata } from "next";

import Container from "@/components/layout/Container/Container";
import { SITE_URL } from "@/lib/constants";
import { generateMetadataHelper } from "@/lib/generateMetadata";

import SignupHeader from "../components/SignupHeader/SignupHeader";
import PrefrencesForm from "./components/PreferencesForm/PreferencesForm";

const readerPrefsTitle = "Reader Preferences";
const readerPrefsDescription =
  "Take a minute to tell us about your content preferences. We'll use machine learning to whip up a more personalized newsletter for you. It's like a custom feed to your inbox. Sweet!";
const readerPrefsUrl = `${SITE_URL}/reader-preferences`;

export function generateMetadata(): Metadata {
  return generateMetadataHelper(
    readerPrefsTitle,
    readerPrefsDescription,
    readerPrefsUrl
  );
}

export default function Page() {
  return (
    <Container large className="">
      <div className="mt-16">
        <SignupHeader title="Personalization FTW!" />
        <PrefrencesForm />
      </div>
    </Container>
  );
}
