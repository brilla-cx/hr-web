import React from "react";

import { GlowingButton, H1, Lead } from "@/components/ui";

const Hero: React.FC = () => {
  return (
    <div className="lg:py-26 px-4 py-12 sm:px-8 sm:py-20 lg:px-16">
      <div className="max-w-4xl">
        <H1 className="text-gray-200">
          AI enables the future
          <br /> Choose to be part of it
        </H1>
        <Lead className="mt-5 max-w-3xl text-gray-400">
          Hey Rebekah is a free daily newsletter for knowledge workers. We'll
          help you level up your skills with AI. No bull $#!t, just the good
          stuff. Everything we produce is free and always will be.
        </Lead>
        <Lead className="mt-5 max-w-3xl text-gray-400">
          Join our community of over 320,000 professionals.
        </Lead>
        <div className="mt-8 md:mt-10 md:max-w-xs">
          <GlowingButton variant="link" href="/signup" id="hero">
            Level Up
          </GlowingButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
