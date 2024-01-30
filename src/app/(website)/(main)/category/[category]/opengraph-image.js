import { ImageResponse } from "next/og";

import OgImage from "@/components/shared/post/OgImage/OgImage";
import { getCategorybySlug } from "@/sanity/client";

export const runtime = "edge";

export default async function handler({ params }) {
  const category = await getCategorybySlug(params.category);
  // eslint-disable-next-line no-console
  console.log(category);
  const lexendDeca = fetch(
    new URL("../../../assets/fonts/lexend-semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontData = await lexendDeca;

  const summary = `Hey Rebekah writes about ${category.name} and a whole bunch of other cool $#!t too. We'll help you learn how to bring ChatGPT and AI into your work to make you even better at what you do. It's free and always will be.`;
  const testimonial = `Rebekah taught me everything I know about ${category.name} ~ Husband`;

  return new ImageResponse(
    <OgImage post={category} summary={summary} testimonial={testimonial} />,
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
