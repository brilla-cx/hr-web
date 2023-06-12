import PartnerPage from "@/components/partners";
import { getAllFaqs, getAllTools } from "@/sanity/client";
import { FaqType } from "@/types/types";

export function generateMetadata() {
  return {
    title: "Partner | Knowledge should be free. Experience, priceless.",
    description:
      "Improve your good karma and do a solid for the +1,000,000,000 knowledge workers around the world. Instead of paying us a fat affiliate commission, we ask that you provide an exclusive discount to our readers. No brainer, right?",
    openGraph: {
      title: "Partner | Knowledge should be free. Experience, priceless.",
      description:
        "Improve your good karma and do a solid for the +1,000,000,000 knowledge workers around the world. Instead of paying us a fat affiliate commission, we ask that you provide an exclusive discount to our readers. No brainer, right?",
    },
  };
}

export default async function Partners() {
  const faqs = (await getAllFaqs()) as FaqType[];
  const tools = await getAllTools();

  const partnersFaqs = faqs.filter((faq) => faq.faqType.includes("partner"));

  return <PartnerPage faqs={partnersFaqs} tools={tools} />;
}
