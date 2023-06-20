import React from "react";

import { GlowingButton, Lead } from "@/components/ui";

import { HeroH1 } from "../../ui/typography";

const HomeHero: React.FC = () => {
  return (
    <div className="px-2 py-16 sm:py-24 lg:px-16 lg:py-26">
      <div className="max-w-4xl">
        <HeroH1 className="text-gray-200">
          AI enables the future
          <br /> Choose to be part of it
        </HeroH1>
        <Lead className="mt-5 max-w-3xl text-gray-400">
          Hey Rebekah is a free daily newsletter. It's like Morning Brew for knowledge workers.
        </Lead>
        <Lead className="mt-5 max-w-3xl text-gray-400">
          We're more concerned about human ambition than AI. Together, let's make sure that Sam—armed with GPT and their YouTube tutorials—doesn't have all the fun.
        </Lead>
        <Lead className="mt-5 max-w-3xl text-gray-400">
          Join over 338,000 professionals in our community.
        </Lead>
        <div className="mt-8 md:mt-10 md:max-w-xs">
          <GlowingButton variant="link" href="/signup" id="hero" aria-label="Go to sign-up form">
            Level Up
          </GlowingButton>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
