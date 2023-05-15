import { ImageResponse } from "@vercel/og";

import OgImage from "@/components/blog/ogimage";
import { getPostBySlug } from "@/sanity/client";

export const runtime = "edge";

export default async function handler({ params }) {
  const post = await getPostBySlug(params.slug);
  const apfelGrotezk = fetch(
    new URL("../../assets/fonts/apfel-grotezk-fett.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await apfelGrotezk;
  // const [interRegularFont, interBoldFont] = await Promise.all([
  //   InterRegular,
  //   InterBold
  // ]);

  return new ImageResponse(<OgImage post={post} />, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Apfel",
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
