import PartnerHero from "@/components/partners/partnerhero";
import PageHeader from "@/components/sections/pageheader";

export default function Partners() {
  //Just placing imports here for now for rapid iteration
  return (
    <div>
      <PartnerHero
        title={"Partner with Hey Rebekah"}
        description={
          "Improve your good karma and do a solid for the 420 million freelancers around the world. Instead of paying us a fat affiliate commission, we ask that you provide an exclusive discount to our readers. No brainer, right?"
        }
        imageUrl={
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        }
        imageWidth={1920}
        imageHeight={1080}
        alt="The team hanging around the board room in a meeting."
      />
      <PageHeader
        title="Knowledge should be free"
        leadText="We imagine a world where all freelance professionals can build thriving careers so they can experience the joy of financial freedom and success."
        includeForm={false}
      />
    </div>
  );
}
