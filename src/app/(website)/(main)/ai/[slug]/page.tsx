import { getCornerStonePageBySlug } from "@/sanity/client";
import { CornerStonePage as CornerStonePageType } from "@/types/types";

import CornerStonePage from "./components/CornerstonePage";

async function CornerStone({ params }: { params: { slug: string } }) {
  const pageData = (await getCornerStonePageBySlug(
    params.slug
  )) as unknown as CornerStonePageType;

  return <CornerStonePage {...pageData} />;
}

export default CornerStone;
