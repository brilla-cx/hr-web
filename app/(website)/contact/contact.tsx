import {
  ChatBubbleBottomCenterIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { FaPizzaSlice } from "react-icons/fa";

import Container from "@/components/container";
import ContactCard from "@/components/shared/contactCard";
import PageHeader from "@/components/ui/sections/pageheader";

function Contact() {
  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <PageHeader
          title="Contact Hey Rebekah"
          leadText="Need to reach out to the Hey Rebekah team? No problem. We're excited
          to hear from you. While you're here, subscribe and see what the buzz
          is about. 👇🏽"
          includeForm
          formId="built-sub"
        />
        <div className="max-w-lg pb-16 mx-auto space-y-10 sm:pb-24 lg:px-8">
          <ContactCard
            title="Want to advertise?"
            desc="Oh cool! No worries, just drop our sales team a line and we'll be in touch."
            icon={<ChatBubbleBottomCenterIcon className="w-6 h-6" />}
            link={{
              title: "Contact sales",
              href: new URL(
                "mailto:sponsor@heyrebekah.com?subject=I%27d%20like%20to%20sponsor%20The%20Gist"
              ),
            }}
          />
          <ContactCard
            title="Have a question?"
            desc="No problem, send us a message and our support team will get back to you pronto."
            icon={<QuestionMarkCircleIcon className="w-6 h-6" />}
            link={{
              title: "Get support",
              href: new URL(
                "mailto:support@heyrebekah.com?subject=I%20have%20a%20question"
              ),
            }}
          />
          <ContactCard
            title="Want to talk?"
            desc="We'd love to hear from you."
            icon={<PhoneIcon className="w-6 h-6" />}
            link={{
              title: "Give us a call",
              href: new URL("tel:+14157274552"),
            }}
          />
          <ContactCard
            title="Buy us a slice?"
            desc="Yaasss please! We'd love that. Double pepperoni with a touch of extra sauce."
            icon={<FaPizzaSlice className="w-6 h-6" />}
            address="BRIL.LA, LLC. <br/> 1370 N. St. Andrews Place <br/> Los Angeles, CA 90028"
          />
        </div>
      </Container>
    </div>
  );
}

export default Contact;
