"use client";
import React, { Fragment } from "react";

import { WithContainer } from "@/components/layout/WithContainer/WithContainer";
import BrandsMarquee from "@/components/sections/BrandsMarquee/BrandsMarquee";
import Faqs from "@/components/sections/Faqs/Faqs";
import EmailForm from "@/components/shared/forms/EmailForm/EmailForm";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
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
      {WithContainer({
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
      {WithContainer({
        Component: SocialStats,
      })}

      {/* brands marquee */}
      {WithContainer({
        Component: BrandsMarquee,
        componentProps: { title: "G.O.A.T. brands we've worked with" },
      })}

      {/* pricing */}
      {WithContainer({
        Component: AdvertisePricing,
      })}

      {/* love cta section */}
      {WithContainer({
        Component: LoveCtaSection,
      })}

      {/* contact form */}
      {WithContainer({
        Component: EmailForm,
      })}

      {/* faq */}
      {WithContainer({
        Component: Faqs,
        componentProps: { faqs: props.faqs },
      })}
    </Fragment>
  );
}

export default AdvertisePage;
