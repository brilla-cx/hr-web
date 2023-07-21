import { Metadata } from "next";
import { cache } from "react";

import WtfIsHeyRebekah from "@/app/(website)/(main)/about/components/WtfIsHeyRebekah/WtfIsHeyRebekah";
import Container from "@/components/layout/Container/Container";
import BrandsMarquee from "@/components/sections/BrandsMarquee/BrandsMarquee";
import Faqs from "@/components/sections/Faqs/Faqs";
import { HeroWithImage } from "@/components/sections/HeroWithImage/HeroWithImage";
import { SITE_URL } from "@/lib/constants";
import { getAllFaqs } from "@/sanity/client";
import { FaqType } from "@/types/types";

import CheckReplay from "./components/CheckReplay/CheckReplay";
import EmailCta from "./components/EmailCta/EmailCta";
import WhatIsImportant from "./components/WhatIsImportant/WhatIsImportant";

export function generateMetadata(): Metadata {
  const title = "What is Hey Rebekah?";
  const description =
    "WTF is Hey Rebekah? Co-founded by Rebekah Radice, it's a free daily AI newsletter. We help you make the best of AI before it gets the best of you. 💪🏽";

  const url = `${SITE_URL}/about`;

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: "/og.png",
      url,
    },
    twitter: {
      title,
      description,
      images: "/og.png",
    },
  };

  return metadata;
}

const withContainer = (Component, props, bgColor) => {
  return (
    <div className={bgColor}>
      <div className="border-t border-neutral-200/10">
        <Container large className="border-l border-r border-neutral-200/10">
          <Component {...props} />
        </Container>
      </div>
    </div>
  );
};

const getFaqData = cache(async () => {
  const faq = await getAllFaqs();
  return faq;
});

export default async function About() {
  const faqs = (await getFaqData()) as FaqType[];
  const readerFaqs = faqs.filter((faq) => faq.faqType.includes("reader"));

  return (
    <>
      {withContainer(
        HeroWithImage,
        {
          title: "The future belongs to the curious",
          subtitle:
            "We believe curiosity is the driving force of progress. While others scramble to capitalize on buzzwords we see the future through a wider lens. We know technology is simply a tool and humans are the builders that wield it.",
          subtitle2:
            "Hey Rebekah is a free daily newsletter for knowledge workers. We help you incorporate tools like AI into your work. Kind of like we have. If you do it right, it's magical. Want to know what we do with all our spare time? Join us and find out.",
          image:
            "https://cdn.sanity.io/images/smx99abf/production/8bc88423bf816a59253fefe69e8c59973b51b23a-1080x1080.webp",
        },
        "bg-midnight",
      )}
      {withContainer(WtfIsHeyRebekah, {}, "bg-midnight")}
      {withContainer(
        BrandsMarquee,
        { title: "Some our fave clients" },
        "bg-midnight",
      )}
      {withContainer(CheckReplay, {}, "bg-midnight")}
      {withContainer(
        EmailCta,
        {
          title: "You've read this far, just subscribe already",
          subtitle:
            "What's the worst that will happen? You'll get better at what you do, enjoy a few laughs? It ain't hard...click the button below and give us a shot.",
        },
        "bg-midnight",
      )}
      {withContainer(WhatIsImportant, {}, "bg-midnight")}
      {withContainer(Faqs, { faqs: readerFaqs }, "bg-midnight")}
    </>
  );
}

export const dynamic = "force-static";
export const revalidate = false;
