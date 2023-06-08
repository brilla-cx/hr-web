import Marquee from "react-fast-marquee";

import Container from "@/components/container";
import { GlowingButton, H1, Lead } from "@/components/ui";

export default function RebekahRadice() {
  //Placeholder to create route
  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <div className="max-w-4xl py-10 mx-auto text-center">
          <H1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            Social media speaker, consultant, and trainer
          </H1>
          <Lead className="mt-6 text-lg leading-8 text-gray-400">
            The interwebs crowned me a top digital marketing expert in the known
            universe. (cue eye rolls from my hubby and colleagues) I'm all about
            helping people get, keep, and grow their client base via digital
            magic.
          </Lead>
          <div className="max-w-sm mx-auto mt-12">
            <GlowingButton>Still Intersted</GlowingButton>
          </div>
        </div>
        <div>
          <Marquee direction="left">{/* left image goes here */}</Marquee>
          <Marquee direction="right">{/* right image goes here */}</Marquee>
        </div>
      </Container>
    </div>
  );
}
