import BrandsMarquee from "@/components/about/brands-marquee";
import Faqs from "@/components/about/faqs";
import Container from "@/components/container";
import ExpectFromUs from "@/components/partners/expect-from-us";
import LookingFor from "@/components/partners/looking-for";
import OurPartners from "@/components/partners/our-partners";
import PartnerCommunityData from "@/components/partners/partner-community-stats";
import PartnerHero from "@/components/partners/partnerhero";
import EmailForm from "@/components/ui/email-form";
import PageHeader from "@/components/ui/sections/pageheader";
import { getAllFaqs, getAllTools } from "@/sanity/client";

export default async function Partners() {
  const faqs = await getAllFaqs();
  const tools = await getAllTools();
  return (
    <div className=" bg-midnight">
      <Container
        large
        className="space-y-16 border-l border-r border-neutral-200 border-opacity-10">
        <PartnerHero
          title={"Partner with Hey Rebekah"}
          description={
            "Improve your good karma and do a solid for the 420 million freelancers around the world. Instead of paying us a fat affiliate commission, we ask that you provide an exclusive discount to our readers. No brainer, right?"
          }
          imageUrl={
            "https://cdn.sanity.io/images/smx99abf/production/962448a739e0be023c1703997502c5bdd009688e-1280x920.webp"
          }
          imageWidth={1920}
          imageHeight={1080}
          alt="The team hanging around the board room in a meeting."
        />
        <div className="px-2 mx-auto max-w-7xl lg:px-8">
          <PageHeader
            title="Knowledge should be free"
            leadText="We imagine a world where all freelance professionals can build thriving careers so they can experience the joy of financial freedom and success."
            includeForm={false}
          />
          {/* stats */}
          <PartnerCommunityData />
          {/* brands */}
          <BrandsMarquee />
          {/* What we're looking for */}
          <LookingFor />
          {/* What to expect from us */}
          <ExpectFromUs />
          {/* partners You're in great company */}
          <OurPartners tools={tools} />
          {/* form */}
          <EmailForm />
          {/* faqs */}
          <Faqs faqs={faqs} />
        </div>
      </Container>
    </div>
  );
}
