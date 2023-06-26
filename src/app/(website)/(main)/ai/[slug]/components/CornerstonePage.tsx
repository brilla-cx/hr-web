"use client";
import { useRef } from "react";

import {
  CornerstoneAboutUs,
  CornerstoneCoolThings,
  CornerstoneCta1,
  CornerstoneCta2,
  CornerstoneHero,
  CornerstoneIntro,
  CornerstoneProducts,
  CornerstoneResources,
  CornerstoneWhoFor,
  CornerstoneWhyShouldCare,
} from "@/components/Cornerstone";
import { WithContainer } from "@/components/layout/WithContainer/WithContainer";
import { CornerStonePage as CornerStonePageType } from "@/types/types";

function CornerStonePage(pageData: CornerStonePageType) {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const renderPageSections = () => {
    if (!pageData || !pageData.cornerstonePageSection) {
      return null;
    }

    return pageData.cornerstonePageSection.map((cps) => {
      switch (cps._type) {
        case "hero":
          return (
            <CornerstoneHero pageData={cps} nextSectionRef={nextSectionRef} />
          );
        case "intro":
          return (
            <div key={cps._key} ref={nextSectionRef}>
              {WithContainer({
                Component: CornerstoneIntro,
                componentProps: {
                  ...cps,
                },
              })}
            </div>
          );
        case "products":
          return WithContainer({
            Component: CornerstoneProducts,
            componentProps: {
              ...cps,
            },
          });
        case "whyShouldCare":
          return WithContainer({
            Component: CornerstoneWhyShouldCare,
            componentProps: {
              ...cps,
            },
          });
        case "whoFor":
          return WithContainer({
            Component: CornerstoneWhoFor,
            componentProps: {
              ...cps,
            },
          });
        case "coolThings":
          return WithContainer({
            Component: CornerstoneCoolThings,
            componentProps: {
              ...cps,
            },
          });
        case "ctaOne":
          return WithContainer({
            Component: CornerstoneCta1,
            componentProps: {
              ...cps,
            },
          });
        case "ctaTwo":
          return WithContainer({
            Component: CornerstoneCta2,
            componentProps: {
              ...cps,
            },
          });
        case "resources":
          return WithContainer({
            Component: CornerstoneResources,
            componentProps: {
              //   posts: posts,
              pageContent: { ...cps },
            },
          });
        case "aboutUs":
          return WithContainer({
            Component: CornerstoneAboutUs,
            componentProps: {
              ...cps,
            },
          });
        default:
          return null;
      }
    });
  };

  return <div>{renderPageSections()}</div>;
}

export default CornerStonePage;
