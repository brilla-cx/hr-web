import React from "react";

import { GlowingButton, H1, Lead } from "@/components/ui";

interface Props {
  scrollToContact: () => void;
}

function RebekahHero(props: Props) {
  return (
    <div className="max-w-4xl py-10 mx-auto text-center">
      <H1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
        Social media speaker, consultant, and trainer
      </H1>
      <Lead className="max-w-3xl mx-auto mt-6 text-xl leading-8 text-center text-gray-400">
        The interwebs crowned me a top digital marketing expert in the known
        universe (cue eye rolls). I'm all about helping people get, keep, and
        grow their client base via digital magic.
      </Lead>
      <div
        className="max-w-sm mx-auto mt-12"
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => props.scrollToContact()}>
        <GlowingButton ariaLabel="Scroll to next section">Still Interested?</GlowingButton>
      </div>
    </div>
  );
}

export default RebekahHero;
