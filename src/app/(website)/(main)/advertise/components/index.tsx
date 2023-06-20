"use client";
import React, { Fragment } from "react";

import BrandsMarquee from "@/components/sections/BrandsMarquee/BrandsMarquee";
import Faqs from "@/components/sections/Faqs/Faqs";
import PageHeader from "@/components/sections/pageheader";
import { withContainer } from "@/components/shared/withContainer";
import EmailForm from "@/components/ui/email-form";
import { FaqType } from "@/types/types";

import AdvertisePricing from "./AdvertisePricing/AdvertisePricing";
import LoveCtaSection from "./LoveCtaSection/LoveCtaSection";
import SocialStats from "./SocialStats/SocialStats";

interface Props {
  faqs: FaqType[];
}

function AdvertisePage(props: Props) {
  return (
    <Fragment>
      {/* hero */}
      {withContainer({
        Component: PageHeader,
        componentProps: {
          title: "Transparent and real-time reporting",
          leadText:
            "Our performance data is transparent, accessible, and up-to-date. You'll get direct access to anonymized performance data when you partner with us.",
          includeForm: false,
          id: "advertise",
        },
      })}

      {/* social stats */}
      {withContainer({
        Component: SocialStats,
      })}

      {/* brands marquee */}
      {withContainer({
        Component: BrandsMarquee,
        componentProps: { title: "G.O.A.T. brands we've worked with" },
      })}

      {/* pricing */}
      {withContainer({
        Component: AdvertisePricing,
      })}

      {/* love cta section */}
      {withContainer({
        Component: LoveCtaSection,
      })}

      {/* contact form */}
      {withContainer({
        Component: EmailForm,
      })}

      {/* faq */}
      {withContainer({
        Component: Faqs,
        componentProps: { faqs: props.faqs },
      })}
    </Fragment>
  );
}

export default AdvertisePage;
