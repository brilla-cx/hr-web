import PartnerPage from "@/components/partners";
import { getAllFaqs, getAllTools } from "@/sanity/client";
import { FaqType } from "@/types/types";

export function generateMetadata() {
  return {
    title: "Partner Program | Hey Rebekah",
    description:
      "Join the Hey Rebekah Partner Program. Give our community of 310K+ an exclusive discount instead of paying us a commission. No brainer right?",
    openGraph: {
      title: "Partner Program | Hey Rebekah",
      description:
        "Join the Hey Rebekah Partner Program. Give our community of 310K+ an exclusive discount instead of paying us a commission. No brainer right?",
      images: "/og.png",
    },
    twitter: {
      title: "Partner Program | Hey Rebekah",
      description:
        "Join the Hey Rebekah Partner Program. Give our community of 310K+ an exclusive discount instead of paying us a commission. No brainer right?",
      images: "/og.png",
    },
  };
}

export default async function Partners() {
  const faqs = (await getAllFaqs()) as FaqType[];
  const tools = await getAllTools();

  const partnersFaqs = faqs.filter((faq) => faq.faqType.includes("partner"));

  return <PartnerPage faqs={partnersFaqs} tools={tools} />;
}
