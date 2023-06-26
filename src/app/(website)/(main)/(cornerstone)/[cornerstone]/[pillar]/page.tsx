import { redirect } from "next/navigation";

import { getCornerStonePageBySlug } from "@/sanity/client";
import { CornerStonePage as CornerStonePageType } from "@/types/types";

import DynamicPage from "../components/DynamicPage";

async function PillarPage({ params }: { params: { pillar: string } }) {
  const pageData = (await getCornerStonePageBySlug(
    params.pillar
  )) as unknown as CornerStonePageType;

  const isCornerstone = pageData.isCornerstone;

  if (isCornerstone) {
    redirect("/");
  }

  return <DynamicPage {...pageData} />;
}

export default PillarPage;
