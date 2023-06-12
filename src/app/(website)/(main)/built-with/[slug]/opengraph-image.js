import { ImageResponse } from "next/server";

import OgImage from "@/components/blog/ogimage";
import { getToolbySlug } from "@/sanity/client";

export const runtime = "edge";

export default async function handler({ params }) {
  const data = await getToolbySlug(params.slug);
  const post = {
    name: `Hey Rebekah x ${data.name}`,
    category: "Built With",
    author: { name: "Team" },
    publishedAt: data.publishedAt,
    __createdAt: data._createdAt,
  };
  const lexendDeca = fetch(
    new URL("../../../assets/fonts/lexend-semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontData = await lexendDeca;

  return new ImageResponse(<OgImage post={post} />, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Lexend Deca",
        data: fontData,
        weight: "600",
        style: "normal",
      },
    ],
  });
}
