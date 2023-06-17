"use client";

import { Fragment, useRef } from "react";

import BrandsMarquee from "@/components/about/brands-marquee";
import Faqs from "@/components/about/faqs";
import ExpectFromUs from "@/components/partners/expect-from-us";
import LookingFor from "@/components/partners/looking-for";
import OurPartners from "@/components/partners/our-partners";
import PartnerCommunityData from "@/components/partners/partner-community-stats";
import PageHeader from "@/components/sections/pageheader";
import { withContainer } from "@/components/shared/withContainer";
import { GlowingButton, H1, Lead } from "@/components/ui";
import EmailForm from "@/components/ui/email-form";
import RebekahHeroImage from "@/public/rebekah-hero-image.jpg";
import { FaqType, Tools } from "@/types/types";

interface Props {
  faqs: FaqType[];
  tools: Tools[];
}

function PartnerPage(props: Props) {
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
      <div
        className="w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${RebekahHeroImage.src})`,
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)",
        }}>
        <div className="flex min-h-[93vh] w-full items-center justify-center bg-gray-900 bg-opacity-75 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center">
                <H1 className="text-gray-200">Partner with Hey Rebekah</H1>
                <Lead className="mt-6 text-lg leading-8 text-gray-300">
                  Improve your good karma and do a solid for the +1,000,000,000
                  knowledge workers around the world. Instead of paying us a fat
                  affiliate commission, we ask that you provide an exclusive
                  discount to our readers. No brainer, right?
                </Lead>
                <div
                  className="flex items-center justify-center mt-10 gap-x-6"
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={() => scrollToContact()}>
                  <GlowingButton aria-label="Go to partner form">Become a Partner</GlowingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {withContainer({
        Component: PageHeader,
        componentProps: {
          title: "Knowledge should be free",
          leadText:
            'We believe curiosity is the driving force of progress. While others scramble to capitalize on buzzwords like "AI" and "automation", we see the future through a wider lens. We know technology is simply a tool, and humans are the builders.',
          id: "partners",
          includeForm: true,
        },
      })}
      {withContainer({
        Component: PartnerCommunityData,
      })}
      {withContainer({
        Component: BrandsMarquee,
        componentProps: { title: "G.O.A.T. brands we've worked with" },
      })}
      {withContainer({
        Component: LookingFor,
      })}
      {withContainer({
        Component: ExpectFromUs,
        componentProps: { scrollToContact: scrollToContact },
      })}
      {withContainer({
        Component: OurPartners,
        componentProps: { tools: props.tools },
      })}
      {withContainer({
        Component: () => (
          <div id="emailForm" ref={contactSectionRef}>
            <EmailForm />
          </div>
        ),
      })}
      {withContainer({
        Component: Faqs,
        componentProps: { faqs: props.faqs },
      })}
    </Fragment>
  );
}

export default PartnerPage;
