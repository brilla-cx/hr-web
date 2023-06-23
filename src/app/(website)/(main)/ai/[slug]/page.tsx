import {
  CornerstoneHero,
  CornerstoneIntro,
  CornerstoneProducts,
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
          });
        default:
          return null;
      }
    });
  };

  return <div>{renderPageSections()}</div>;
}

export default CornerStonePage;
