import React, { Fragment } from "react";

import BrandsMarquee from "@/components/about/brands-marquee";
import Faqs from "@/components/about/faqs";
import Container from "@/components/container";
import ExpectFromUs from "@/components/partners/expect-from-us";
import LookingFor from "@/components/partners/looking-for";
import OurPartners from "@/components/partners/our-partners";
import PartnerCommunityData from "@/components/partners/partner-community-stats";
import PartnerHero from "@/components/partners/partnerhero";
import PageHeader from "@/components/sections/pageheader";
import EmailForm from "@/components/ui/email-form";
import { getAllFaqs, getAllTools } from "@/sanity/client";
import { FaqType } from "@/types/types";

export function generateMetadata() {
  return {
    title: "Partner | Knowledge should be free. Experience, priceless.",
    description:
      "Improve your good karma and do a solid for the 420 million freelancers around the world. Instead of paying us a fat affiliate commission, we ask that you provide an exclusive discount to our readers. No brainer, right?",
    openGraph: {
      title: "Partner | Knowledge should be free. Experience, priceless.",
      description:
        "Improve your good karma and do a solid for the 420 million freelancers around the world. Instead of paying us a fat affiliate commission, we ask that you provide an exclusive discount to our readers. No brainer, right?",
    },
  };
}

interface WithContainerProps<T extends Record<string, any>> {
  Component: React.ComponentType<T>;
  containerNoPadding?: boolean;
  componentProps?: T;
}

const withContainer = <T extends Record<string, any>>(
  props: WithContainerProps<T>
) => {
  const { Component, componentProps = {} as T } = props;
  return (
    <div className="bg-midnight">
      <div className="border-t border-neutral-200/10">
        <Container
          noPadding={props.containerNoPadding}
          alt={props.containerNoPadding}
          large
          className="border-l border-r border-neutral-200/10">
          <Component {...componentProps} />
        </Container>
      </div>
    </div>
  );
};

export default async function Partners() {
  const faqs = (await getAllFaqs()) as FaqType[];
  const tools = await getAllTools();

  const partnersFaqs = faqs.filter((faq) => faq.faqType.includes("partner"));

  return (
    <Fragment>
      {/* hero */}
      {withContainer({
        Component: PartnerHero,
        containerNoPadding: true,
        componentProps: {
          title: "Partner with Hey Rebekah",
          description:
            "Improve your good karma and do a solid for the 420 million freelancers around the world. Instead of paying us a fat affiliate commission, we ask that you provide an exclusive discount to our readers. No brainer, right?",
          imageUrl:
            "https://cdn.sanity.io/images/smx99abf/production/962448a739e0be023c1703997502c5bdd009688e-1280x920.webp",
          imageWidth: 1920,
          imageHeight: 1080,
          alt: "The team hanging around the board room in a meeting.",
        },
      })}

      {/* knowledge should be free */}
      {withContainer({
        Component: PageHeader,
        componentProps: {
          title: "Knowledge should be free",
          leadText:
            "We imagine a world where all freelance professionals can build thriving careers so they can experience the joy of financial freedom and success.",
          id: "partners",
          includeForm: true,
        },
      })}

      {/* community data */}
      {withContainer({
        Component: PartnerCommunityData,
      })}

      {/* brand we have worked with */}
      {withContainer({
        Component: BrandsMarquee,
        componentProps: { title: "G.O.A.T. brands we've worked with" },
      })}

      {/* What we're looking for */}
      {withContainer({
        Component: LookingFor,
      })}

      {/* What to expect from us */}
      {withContainer({
        Component: ExpectFromUs,
      })}

      {/* partners You're in great company */}
      {withContainer({
        Component: OurPartners,
        componentProps: { tools: tools },
      })}

      {/* form */}
      {withContainer({
        Component: EmailForm,
      })}

      {/* faqs */}
      {withContainer({
        Component: Faqs,
        componentProps: { faqs: partnersFaqs },
      })}
    </Fragment>
  );
}
