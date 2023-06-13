"use client";

import { Fragment, useRef } from "react";

import BrandsMarquee from "@/components/about/brands-marquee";
import ContactRebekah from "@/components/rebekah-radice/contact-rebekah";
import MarqueeImages from "@/components/rebekah-radice/marquee-images";
import RebekahHero from "@/components/rebekah-radice/rebekah-hero";
import RebekahTimeline from "@/components/rebekah-radice/rebekah-timeline";
import RememberFor from "@/components/rebekah-radice/remeber-for";
import SocialStats from "@/components/rebekah-radice/social-stats";
import { withContainer } from "@/components/shared/withContainer";

export default function RebekahRadice() {
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const section = contactSectionRef.current;
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Fragment>
      {withContainer({
        Component: RebekahHero,
        componentProps: {
          scrollToContact: scrollToContact,
        },
      })}
      {withContainer({
        Component: MarqueeImages,
        containerNoPadding: true,
      })}
      {withContainer({
        Component: RebekahTimeline,
      })}
      {withContainer({
        Component: BrandsMarquee,
        componentProps: {
          title: "G.O.A.T. brands i've worked with",
        },
      })}
      {withContainer({
        Component: SocialStats,
      })}
      {withContainer({
        Component: RememberFor,
        componentProps: {
          scrollToContact: scrollToContact,
        },
      })}
      {withContainer({
        Component: ContactRebekah,
        componentProps: {
          contactSectionRef: contactSectionRef,
        },
      })}
    </Fragment>
  );
}