import React from "react";

import PageHeader from "@/components/sections/pageheader";
import { GlowingButton } from "@/components/ui";

function LoveCtaSection() {
  return (
    <div className="px-4 pb-12 mx-auto lg:pb-26 sm:px-8 sm:pb-20">
      <PageHeader
        title="❤️ Need something on the down low? Love it!"
        leadText="We got you. Our Love It placement is designed for those who wish to slide into the thoughts of readers more subtly. It's only $500 and you'll love it."
        includeForm={false}
        id="advertise"
      />
      <div className="max-w-md mx-auto">
        <GlowingButton>Get some love</GlowingButton>
      </div>
    </div>
  );
}

export default LoveCtaSection;
