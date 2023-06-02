import { ImageResponse } from "next/server";

import OgImage from "@/components/blog/ogimage";
import { getBookbySlug } from "@/sanity/client";

export const runtime = "edge";

export default async function handler({ params }) {
  const post = await getBookbySlug(params.slug);

  const lexendDeca = fetch(
    new URL("../../assets/fonts/lexend-semibold.ttf", import.meta.url)
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
