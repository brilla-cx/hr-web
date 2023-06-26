import React, { RefObject } from "react";

import { HeroSection } from "@/types/types";

import { PortableText } from "../shared/post/PortableText/PortableText";

interface Props {
  pageData: HeroSection;
  nextSectionRef: RefObject<HTMLDivElement>;
}

function scrollToNext(nextSectionRef: RefObject<HTMLDivElement>) {
  const section = nextSectionRef.current;
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function CornerstoneHero(props: Props) {
  return (
    <div className="h-screen bg-midnight">
      <div className="relative px-6 isolate pt-14 lg:px-8">
        <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
              {props.pageData.customHeading ??
                `What is ${props.pageData.keyword.keyword}`}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              <PortableText value={props.pageData.customContent} />
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <button
                type="button"
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => scrollToNext(props.nextSectionRef)}
                className="text-sm font-semibold leading-6 text-gray-200">
                Learn more about {props.pageData.keyword.keyword}{" "}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CornerstoneHero;
