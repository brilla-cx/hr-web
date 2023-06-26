import React from "react";

import { CtaTwo } from "@/types/types";

import { PortableText } from "../shared/post/PortableText/PortableText";
import { GlowingButton } from "../ui";

function CornerstoneCta2(props: CtaTwo) {
  return (
    <div>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            {props?.customCtaTitle}
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300">
            {<PortableText value={props?.customCtaContent} /> ??
              `What's the worst that will happen? You'll get better at what you do,
                enjoy a few laughs? It ain't hard...click the button below and give us
                a shot.`}
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <GlowingButton variant="link" href={props?.custpmCtaLinkHref}>
              {props?.customCtaLinkText ?? "Get started"}
            </GlowingButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CornerstoneCta2;
