import BrandsMarquee from "@/components/about/brands-marquee";
import CheckReplay from "@/components/about/check-replay";
import EmailCta from "@/components/about/email-cta";
import Faqs from "@/components/about/faqs";
import WhatIsImportant from "@/components/about/what-is-important";
import WtfIsHeyRebekah from "@/components/about/wtf-is-rebekah";
import Container from "@/components/container";
import { HeroWithImage } from "@/components/ui/sections/hero";
import { getAllFaqs } from "@/sanity/client";

export function generateMetadata({ params }) {
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

export default async function About() {
  const faqs = await getAllFaqs();

  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        {/* hero */}
        <HeroWithImage
          title="Knowledge should be free. Experience, priceless."
          subtitle="Freelancers need better access to knowledge, skills, and tools to build thriving careers. That's our focus."
          subtitle2="Hey Rebekah is a free daily newsletter for freelancers. Everything we create is available for free to our readers and always will be. Not on the list? 👇🏼"
          image="https://global-uploads.webflow.com/639407458bad1a668d048184/63d5df12ac199185dea4ec84_about-hero-p-1080.webp"
        />

        {/* wtf is rebekah */}
        <WtfIsHeyRebekah />

        {/*  brands animated logo cloud */}
        <BrandsMarquee />

        {/* let's check the replay */}
        <CheckReplay />

        {/* news letter */}
        <EmailCta
          title="If you've read this far, just subscribe already"
          subtitle="What's the worst that will happen? You'll get better at what you do, enjoy a few laughs? It ain't hard...click the button below and give us a shot."
        />

        {/* what is important to us */}
        <WhatIsImportant />

        {/* faq */}
        <Faqs faqs={faqs} />
      </Container>
    </div>
  );
}
