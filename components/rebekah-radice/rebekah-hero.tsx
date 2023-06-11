import React from "react";

import { GlowingButton, H1, Lead } from "../ui";

interface Props {
  scrollToContact: () => void;
}

function RebekahHero(props: Props) {
  return (
    <div className="max-w-4xl py-10 mx-auto text-center">
      <H1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
        Social media speaker, consultant, and trainer
      </H1>
      <Lead className="mt-6 text-lg leading-8 text-gray-400">
        The interwebs crowned me a top digital marketing expert in the known
        universe. (cue eye rolls from my hubby and colleagues) I'm all about
        helping people get, keep, and grow their client base via digital magic.
      </Lead>
      <div
        className="max-w-sm mx-auto mt-12"
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => props.scrollToContact()}>
        <GlowingButton>Still Intersted</GlowingButton>
      </div>
    </div>
  );
}

export default RebekahHero;
