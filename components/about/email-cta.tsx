import { H3 } from "@/components/ui";

import SubscribeForm from "../ui/sections/subscribeform";

function EmailCta() {
  return (
    <div className="pb-10 lg:flex lg:items-center lg:justify-between">
      <div>
        <H3 as="h2" className="text-gray-200">
          {" "}
          Ready to upskill your game?
        </H3>
        <p className="mt-3 text-sm leading-6 text-gray-400">
          Join over 300,000 people in our community today.
        </p>
      </div>
      <SubscribeForm formId={""} />
    </div>
  );
}

export default EmailCta;
