import { Metadata } from "next";

import RebekahRadicePage from "@/app/(website)/(rebekah-radice)/rebekah-radice/components";
import { SITE_URL } from "@/lib/constants";
import { generateMetadataHelper } from "@/lib/generateMetadata";

const rrTitle = "Rebekah Radice - Social Media Speaker, Consultant, Trainer";
const rrDescription =
  "Rebekah Radice is a social media speaker, consultant, and trainer in Los Angeles, CA. Rebekah helps growth-driven leaders build brand awareness and authority.";
const rrUrl = `${SITE_URL}/rebekah-radice`;

export function generateMetadata(): Metadata {
  return generateMetadataHelper(rrTitle, rrDescription, rrUrl);
}

export default function RebekahRadice() {
  return <RebekahRadicePage />;
}
