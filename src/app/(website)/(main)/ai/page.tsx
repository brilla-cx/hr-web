import { Fragment } from "react";

import { CornerstoneHero } from "@/components/Cornerstone";
import { CornerstoneIntro } from "@/components/Cornerstone";
import { CornerstoneProducts } from "@/components/Cornerstone";
import { CornerstoneWhyShouldCare } from "@/components/Cornerstone";
import { CornerstoneWhoFor } from "@/components/Cornerstone";
import { CornerstoneCoolThings } from "@/components/Cornerstone";
import { CornerstoneCta1 } from "@/components/Cornerstone";
import { CornerstoneResources } from "@/components/Cornerstone";
import { CornerstoneCta2 } from "@/components/Cornerstone";
import { CornerstoneAboutUs } from "@/components/Cornerstone";
import { WithContainer } from "@/components/layout/WithContainer/WithContainer";

function AI() {
  return (
    <Fragment>
      {WithContainer({
        Component: CornerstoneHero,
      })}
      {WithContainer({
        Component: CornerstoneIntro,
      })}
      {WithContainer({
        Component: CornerstoneProducts,
      })}
      {WithContainer({
        Component: CornerstoneWhyShouldCare,
      })}
      {WithContainer({
        Component: CornerstoneWhoFor,
      })}
      {WithContainer({
        Component: CornerstoneCoolThings,
      })}
      {WithContainer({
        Component: CornerstoneCta1,
      })}
      {WithContainer({
        Component: CornerstoneResources,
      })}
      {WithContainer({
        Component: CornerstoneCta2,
      })}
      {WithContainer({
        Component: CornerstoneAboutUs,
      })}
    </Fragment>
  );
}

export default AI;
