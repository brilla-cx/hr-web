import { ImageResponse } from "next/server";

import OgImage from "@/components/post/OgImage/OgImage";
import { getToolbySlug } from "@/sanity/client";

export const runtime = "edge";

export default async function handler({ params }) {
  const data = await getToolbySlug(params.slug);
  const post = {
    name: `We ❤️ ${data.name}`,
  };
  const lexendDeca = fetch(
    new URL("../../../assets/fonts/lexend-semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontData = await lexendDeca;

  const summary = `We use ${data.name} everyday at Hey Rebekah to power our newsletter and community. Well, technically 4-days a week. Feel free to reach out to us with any questions.`;
  const testimonial =
    "Join our community of 338,000 people learning to crush it with AI.";

  return new ImageResponse(
    <OgImage post={post} summary={summary} testimonial={testimonial} />,
    {
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
    }
  );
}
