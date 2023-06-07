import BrandsMarquee from "@/components/about/brands-marquee";
import CheckReplay from "@/components/about/check-replay";
import EmailCta from "@/components/about/email-cta";
import Faqs from "@/components/about/faqs";
import WhatIsImportant from "@/components/about/what-is-important";
import WtfIsHeyRebekah from "@/components/about/wtf-is-rebekah";
import Container from "@/components/container";
import { HeroWithImage } from "@/components/ui/sections/hero";
import { getAllFaqs } from "@/sanity/client";

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
          image="https://cdn.sanity.io/images/smx99abf/production/8bc88423bf816a59253fefe69e8c59973b51b23a-1080x1080.webp"
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
