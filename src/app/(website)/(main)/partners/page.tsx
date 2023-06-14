import PartnerPage from "@/components/partners";
import { getAllFaqs, getAllTools } from "@/sanity/client";
import { FaqType } from "@/types/types";

export function generateMetadata() {
  const title = "Partner Program";
  const description =
    "Join the Hey Rebekah Partner Program. Give our community of 338K+ an exclusive discount instead of paying us a commission. No brainer right?";

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: "/og.png",
    },
    twitter: {
      title,
      description,
      images: "/og.png",
    },
  };

  return metadata;
}


export default async function Partners() {
  const faqs = (await getAllFaqs()) as FaqType[];
  const tools = await getAllTools();

  const partnersFaqs = faqs.filter((faq) => faq.faqType.includes("partner"));

  return <PartnerPage faqs={partnersFaqs} tools={tools} />;
}
