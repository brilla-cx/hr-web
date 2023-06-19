import { getAllFaqs } from "@/sanity/client";
import { FaqType } from "@/types/types";

import AdvertisePage from "./components";

export default async function Advertise() {
  const faqs = (await getAllFaqs()) as FaqType[];
  return <AdvertisePage faqs={faqs} />;
}
