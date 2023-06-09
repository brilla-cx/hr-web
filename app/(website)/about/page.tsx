import BrandsMarquee from "@/components/about/brands-marquee";
import CheckReplay from "@/components/about/check-replay";
import EmailCta from "@/components/about/email-cta";
import Faqs from "@/components/about/faqs";
import WhatIsImportant from "@/components/about/what-is-important";
import WtfIsHeyRebekah from "@/components/about/wtf-is-rebekah";
import Container from "@/components/container";
import { HeroWithImage } from "@/components/sections/herowithimage";
import { getAllFaqs } from "@/sanity/client";
import { FaqType } from "@/types/types";

export function generateMetadata() {
  return {
    title: "About | Knowledge should be free. Experience, priceless.",
    description:
      "Freelancers need better access to knowledge, skills, and tools to build thriving careers. That's our focus.",
    openGraph: {
      title: "About | Knowledge should be free. Experience, priceless.",
      description:
        "Freelancers need better access to knowledge, skills, and tools to build thriving careers. That's our focus.",
    },
  };
}
const withContainer = (Component, props) => {
  return (
    <div className="bg-midnight border-b border-neutral-200/10">
      <Container large className="border-l border-r border-t border-neutral-200/10">
        <Component {...props} />
      </Container>
    </div>
  );
};

export default async function About() {
  const faqs = (await getAllFaqs()) as FaqType[];
  const readerFaqs = faqs.filter((faq) => faq.faqType.includes("reader"));

  return (
    <>
      {withContainer(HeroWithImage, {
        title: "The future belongs to the curious",
        subtitle: "We believe curiosity is the driving force of progress. While others scramble to capitalize on buzzwords we see the future through a wider lens. We know technology is simply a tool and humans are the builders that wield it.",
        subtitle2: "Hey Rebekah is a free daily newsletter for knowledge workers. We help you incorporate tools like AI into your work. Kind of like we have. If you do it right, it's magical. Want to know what we do with all our spare time? Join us and find out.",
        image: "https://cdn.sanity.io/images/smx99abf/production/8bc88423bf816a59253fefe69e8c59973b51b23a-1080x1080.webp"
      })}
      {withContainer(WtfIsHeyRebekah, {})}
      {withContainer(BrandsMarquee, { title: "Some our fave clients" })}
      {withContainer(CheckReplay, {})}
      {withContainer(EmailCta, {
        title: "If you've read this far, just subscribe already",
        subtitle: "What's the worst that will happen? You'll get better at what you do, enjoy a few laughs? It ain't hard...click the button below and give us a shot."
      })}
      {withContainer(WhatIsImportant, {})}
      {withContainer(Faqs, { faqs: readerFaqs })}
    </>
  );
}
