import { PortableText } from "@portabletext/react";
import React from "react";

import { IntroSection } from "@/types/types";

function CornerstoneIntro(props: IntroSection) {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
          {props?.customizeHeading
            ? props.customHeading
            : `The juice on ${props.keyword.keyword} in 60 seconds`}
        </h2>

        <div className="mx-auto mt-10 text-gray-400">
          <PortableText value={props.content} />
        </div>
      </div>
    </div>
  );
}

export default CornerstoneIntro;
