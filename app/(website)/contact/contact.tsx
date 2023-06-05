import {
  ChatBubbleBottomCenterIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { FaPizzaSlice } from "react-icons/fa";

import ContactCard from "@/components/shared/contactCard";

function Contact() {
  return (
    <>
      <ContactCard
        title="Want to advertise?"
        desc="Oh cool! No worries, just drop our sales team a line and we'll be in touch."
        icon={<ChatBubbleBottomCenterIcon className="w-6 h-6" />}
        link={{
          title: "Contact sales",
          href: "mailto:sponsor@heyrebekah.com?subject=I%27d%20like%20to%20sponsor%20The%20Gist",
        }}
      />
      <ContactCard
        title="Have a question?"
        desc="No problem, send us a message and our support team will get back to you pronto."
        icon={<QuestionMarkCircleIcon className="w-6 h-6" />}
        link={{
          title: "Get support",
          href: "mailto:support@heyrebekah.com?subject=I%20have%20a%20question",
        }}
      />
      <ContactCard
        title="Want to talk?"
        desc="We'd love to hear from you."
        icon={<PhoneIcon className="w-6 h-6" />}
        link={{
          title: "Give us a call",
          href: "tel:+14157274552",
        }}
      />
      <ContactCard
        title="Buy us a slice?"
        desc="Yaasss please! We'd love that. Double pepperoni with a touch of extra sauce."
        icon={<FaPizzaSlice className="w-6 h-6" />}
        address="BRIL.LA, LLC. <br/> 1370 N. St. Andrews Place <br/> Los Angeles, CA 90028"
      />
    </>
  );
}

export default Contact;
