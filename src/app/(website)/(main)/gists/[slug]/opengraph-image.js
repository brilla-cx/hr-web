import { ImageResponse } from "next/og";

import OgImage from "@/components/shared/post/OgImage/OgImage";
import { getPostBySlug } from "@/sanity/client";

export const runtime = "edge";

export default async function handler({ params }) {
  const post = await getPostBySlug(params.slug);

  const lexendDeca = fetch(
    new URL("../../../assets/fonts/lexend-semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontData = await lexendDeca;

  const summary =
    "We have so many bloopers and WTF moments with AI and ChatGPT that we decided to create a free daily newsletter around it.";
  const testimonial =
    "Hey Rebekah is the best newsletter I've ever read. ~ Rebekah's mom";

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
