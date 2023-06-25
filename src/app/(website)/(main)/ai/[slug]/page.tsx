import {
  CornerstoneAboutUs,
  CornerstoneCoolThings,
  CornerstoneCta1,
  CornerstoneCta2,
  CornerstoneHero,
  CornerstoneIntro,
  CornerstoneProducts,
  CornerstoneWhoFor,
  CornerstoneWhyShouldCare,
} from "@/components/Cornerstone";
import { WithContainer } from "@/components/layout/WithContainer/WithContainer";
import { getCornerStonePageBySlug } from "@/sanity/client";
import { CornerStonePage as CornerStonePageType } from "@/types/types";

async function CornerStonePage({ params }: { params: { slug: string } }) {
  const pageData = (await getCornerStonePageBySlug(
    params.slug
  )) as unknown as CornerStonePageType;

  const renderPageSections = () => {
    if (!pageData || !pageData.cornerstonePageSection) {
      return null;
    }

    return pageData.cornerstonePageSection.map((cps) => {
      switch (cps._type) {
        case "hero":
          return WithContainer({
            Component: CornerstoneHero,
            componentProps: {
              ...cps,
            },
          });
        case "intro":
          return WithContainer({
            Component: CornerstoneIntro,
            componentProps: {
              ...cps,
            },
          });
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
        // case "whoFor":
        //   return WithContainer({
        //     Component: CornerstoneCta1,
        //     componentProps: {
        //       ...cps,
        //     },
        //   });
        // case "whoFor":
        //   return WithContainer({
        //     Component: CornerstoneResources,
        //     componentProps: {
        //       ...cps,
        //     },
        //   });
        // case "whoFor":
        //   return WithContainer({
        //     Component: CornerstoneCta2,
        //     componentProps: {
        //       ...cps,
        //     },
        //   });
        // case "whoFor":
        //   return WithContainer({
        //     Component: CornerstoneAboutUs,
        //     componentProps: {
        //       ...cps,
        //     },
        //   });
        default:
          return null;
      }
    });
  };

  return <div>{renderPageSections()}</div>;
}

export default CornerStonePage;
