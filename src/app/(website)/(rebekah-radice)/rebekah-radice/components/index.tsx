/* eslint-disable camelcase */
"use client";
import { Fragment, useRef } from "react";

import { WithContainer } from "@/components/layout/WithContainer/WithContainer";
import BrandsMarquee from "@/components/sections/BrandsMarquee/BrandsMarquee";

import ContactRebekah from "./ContactRebekah/ContactRebekah";
import MarqueeImages from "./MarqueeImages/MarqueeImages";
import RebekahHero from "./RebekahHero/RebekahHero";
import RebekahTimeline from "./RebekahTimeline/rebekah-timeline";
import RememberedFor from "./RememberedFor/RememberedFor";
import SocialStats from "./SocialStats/SocialStats";

function RebekahRadicePage() {
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
      {WithContainer({
        Component: RebekahHero,
        componentProps: {
          scrollToContact: scrollToContact,
        },
      })}
      {WithContainer({
        Component: MarqueeImages,
        containerNoPadding: true,
      })}
      {WithContainer({
        Component: RebekahTimeline,
      })}
      {WithContainer({
        Component: BrandsMarquee,
        componentProps: {
          title: "G.O.A.T. brands I've worked with",
        },
      })}
      {WithContainer({
        Component: SocialStats,
      })}
      {WithContainer({
        Component: RememberedFor,
      })}
      {WithContainer({
        Component: ContactRebekah,
        componentProps: {
          contactSectionRef: contactSectionRef,
        },
      })}
    </Fragment>
  );
}

export default RebekahRadicePage;
