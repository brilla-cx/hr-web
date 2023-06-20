import { getAllFaqs } from "@/sanity/client";
import { FaqType } from "@/types/types";

import AdvertisePage from "./components";

export default async function Advertise() {
  const faqs = (await getAllFaqs()) as FaqType[];
  const sponsersFaqs = faqs.filter((faq) => faq.faqType.includes("sponsor"));
  return <AdvertisePage faqs={sponsersFaqs} />;
}
