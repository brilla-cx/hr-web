import { ImageResponse } from "next/server";

import OgImage from "@/components/blog/ogimage";
import { getPostBySlug } from "@/sanity/client";

export const runtime = "edge";

export default async function handler({ params }) {
  const post = await getPostBySlug(params.slug);
  const chivo = fetch(
    new URL("../../assets/fonts/chivo.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await chivo;
  // const [interRegularFont, interBoldFont] = await Promise.all([
  //   InterRegular,
  //   InterBold
  // ]);

  return new ImageResponse(<OgImage post={post} />, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Chivo",
        data: fontData,
        style: "normal",
      },
      // {
      //   name: "Inter",
      //   data: interBoldFont,
      //   style: "normal",
      //   weight: 700
      // }
    ],
  });
}
