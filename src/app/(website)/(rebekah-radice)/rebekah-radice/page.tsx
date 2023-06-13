import { Metadata } from "next";

import RebekahRadicePage from "@/components/rebekah-radice";

export function generateMetadata(): Metadata {
  return {
    title: "Rebekah Radice - Social Media Speaker, Consultant, Trainer",
    description:
      "Rebekah Radice is a social media speaker, consultant, and trainer in Los Angeles, CA. Rebekah helps growth-driven leaders build brand awareness and authority.",
    openGraph: {
      title: "Rebekah Radice - Social Media Speaker, Consultant, Trainer",
      description:
        "Rebekah Radice is a social media speaker, consultant, and trainer in Los Angeles, CA. Rebekah helps growth-driven leaders build brand awareness and authority.",
      images: "/og.png",
    },
    twitter: {
      title: "Rebekah Radice - Social Media Speaker, Consultant, Trainer",
      description:
        "Rebekah Radice is a social media speaker, consultant, and trainer in Los Angeles, CA. Rebekah helps growth-driven leaders build brand awareness and authority.",
      images: "/og.png",
    },
  };
}

export default function RebekahRadice() {
  return <RebekahRadicePage />;
}
