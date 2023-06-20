import { Metadata } from "next";

import RebekahRadicePage from "@/app/(website)/(rebekah-radice)/rebekah-radice/components";
import { SITE_URL } from "@/lib/constants";

export function generateMetadata(): Metadata {
  const title = "Rebekah Radice - Social Media Speaker, Consultant, Trainer";
  const description =
    "Rebekah Radice is a social media speaker, consultant, and trainer in Los Angeles, CA. Rebekah helps growth-driven leaders build brand awareness and authority.";
  const images = "/og.png";
  const url = `${SITE_URL}/rebekah-radice`;

  return {
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
}

export default function RebekahRadice() {
  return <RebekahRadicePage />;
}
