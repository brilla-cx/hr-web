import { redirect } from "next/navigation";

import { getCornerStonePageBySlug } from "@/sanity/client";
import { CornerStonePage as CornerStonePageType } from "@/types/types";

import DynamicPage from "./components/DynamicPage";

async function CornerStone({ params }: { params: { cornerstone: string } }) {
  const pageData = (await getCornerStonePageBySlug(
    params.cornerstone
  )) as unknown as CornerStonePageType;

  const isCornerstone = pageData.isCornerstone;

  if (!isCornerstone) {
    redirect("/");
  }

  return <DynamicPage {...pageData} />;
}

export default CornerStone;
