import { PortableText } from "@portabletext/react";
import React from "react";

import { IntroSection } from "@/types/types";

function CornerstoneIntro(props: IntroSection) {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
          {props?.customHeading ||
            `Static text with keyword ${props.keyword.keyword}`}
        </h2>

        <article className="mt-6 text-lg leading-8 text-gray-400">
          {props.content ? (
            <PortableText value={props.content} />
          ) : (
            <p className="mt-6 text-lg leading-8 text-gray-400">
              `Static content text with a keyword ${props.keyword.keyword}`
            </p>
          )}
        </article>
      </div>
    </div>
  );
}

export default CornerstoneIntro;
