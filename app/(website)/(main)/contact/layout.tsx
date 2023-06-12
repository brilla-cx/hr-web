import {
  ChatBubbleBottomCenterIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { FaPizzaSlice } from "react-icons/fa";

import Container from "@/components/container";
import PageHeader from "@/components/sections/pageheader";
import ContactCard from "@/components/shared/contactCard";

function ContactLayout() {
  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200/10">
        <PageHeader
          title="Contact Hey Rebekah"
          leadText="Need to reach out to the Hey Rebekah team? No problem. We make it easy and are excited to hear from you. We usually respond within a few hours. While you're here, click the button to get our free daily newsletter delivered hot and fresh."
          id="contact"
          includeForm
        />
        <div className="mx-auto max-w-5xl my-12 lg:my-20 space-y-8 pb-16 sm:pb-24 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10">
            <ContactCard
              title="Want to advertise?"
              desc="Oh cool! No worries, just drop our sales team a line and we'll be in touch lickety split."
              icon={<ChatBubbleBottomCenterIcon className="h-6 w-6" />}
              link={{
                title: "Contact sales",
                href: "mailto:np@heyrebekah.com?subject=I%27d%20like%20to%20sponsor%20The%20Gist",
              }}
            />
            <ContactCard
              title="Have a question?"
              desc="No problem, send us a message and we'll get back to you pronto, we promise."
              icon={<QuestionMarkCircleIcon className="h-6 w-6" />}
              link={{
                title: "Get support",
                href: "mailto:np@heyrebekah.com?subject=I%20have%20a%20question",
              }}
            />
            <ContactCard
              title="Want to talk?"
              desc="Hey, some of us prefer to hear a voice. If you'd prefer to speak to us, give us a shout."
              icon={<PhoneIcon className="h-6 w-6" />}
              link={{
                title: "Give us a call",
                href: "tel:+14157274552",
              }}
            />
            <ContactCard
              title="Buy us a slice?"
              desc="Yaasss please! We'd love that."
              icon={<FaPizzaSlice className="h-6 w-6" />}
              address="BRIL.LA, LLC. <br/> 1370 N. St. Andrews Place, Los Angeles, CA 90028"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactLayout;
