/* eslint-disable camelcase */
"use client";
import React, { Fragment, useRef } from "react";

import BrandsMarquee from "@/components/sections/BrandsMarquee/BrandsMarquee";
import { withContainer } from "@/components/shared/withContainer";

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
          title: "G.O.A.T. brands I've worked with",
        },
      })}
      {withContainer({
        Component: SocialStats,
      })}
      {withContainer({
        Component: RememberedFor,
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

export default RebekahRadicePage;
