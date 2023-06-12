import React, { Fragment } from "react";

import BrandsMarquee from "@/components/about/brands-marquee";
import Faqs from "@/components/about/faqs";
import ExpectFromUs from "@/components/partners/expect-from-us";
import LookingFor from "@/components/partners/looking-for";
import OurPartners from "@/components/partners/our-partners";
import PartnerCommunityData from "@/components/partners/partner-community-stats";
import PageHeader from "@/components/sections/pageheader";
import { withContainer } from "@/components/shared/withContainer";
import { GlowingButton, H1 } from "@/components/ui";
import EmailForm from "@/components/ui/email-form";
import RebekahHeroImage from "@/public/rebekah-hero-image.jpg";
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

export default async function Partners() {
  const faqs = (await getAllFaqs()) as FaqType[];
  const tools = await getAllTools();

  const partnersFaqs = faqs.filter((faq) => faq.faqType.includes("partner"));

  return (
    <Fragment>
      <div
        className="w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${RebekahHeroImage.src})`,
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)",
        }}>
        <div className="flex min-h-[93vh] w-full items-center justify-center bg-gray-900 bg-opacity-50 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <H1 className="text-gray-200">Partner with Hey Rebekah</H1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Improve your good karma and do a solid for the 420 million
                  freelancers around the world. Instead of paying us a fat
                  affiliate commission, we ask that you provide an exclusive
                  discount to our readers. No brainer, right?
                </p>
                <div className="flex items-center justify-center mt-10 gap-x-6">
                  <GlowingButton
                    variant="link"
                    href="mailto:partners@heyrebekah.com?subject=I%20m20intersted%20in%20partnerschip%20with%20hey%20rebekah%20.%20please%20contact%20me.">
                    Become a Partner
                  </GlowingButton>
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
            "We imagine a world where all freelance professionals can build thriving careers so they can experience the joy of financial freedom and success.",
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
      })}
      {withContainer({
        Component: OurPartners,
        componentProps: { tools: tools },
      })}
      {withContainer({
        Component: EmailForm,
      })}
      {withContainer({
        Component: Faqs,
        componentProps: { faqs: partnersFaqs },
      })}
    </Fragment>
  );
}
