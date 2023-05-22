import { ImageResponse } from "next/server";

import OgImage from "@/components/blog/ogimage";
import { getPostBySlug } from "@/sanity/client";

export const runtime = "edge";

const lexendDeca = fetch(
  new URL("../../assets/fonts/LexendDeca-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler({ params }) {
  const post = await getPostBySlug(params.slug);

  const fontData = await lexendDeca;
  // const [interRegularFont, interBoldFont] = await Promise.all([
  //   InterRegular,
  //   InterBold
  // ]);
  console.log(fontData);
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
      // {
      //   name: "Inter",
      //   data: interBoldFont,
      //   style: "normal",
      //   weight: 700
      // }
    ],
  });
}
