import { ImageResponse } from "next/server";

import OgImage from "@/components/shared/post/OgImage/OgImage";
import { getSocialBlogBySlug } from "@/sanity/client";

export const runtime = "edge";

export default async function handler({ params }) {
  const post = await getSocialBlogBySlug(params.slug);
  const lexendDeca = fetch(
    new URL("../../../assets/fonts/lexend-semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontData = await lexendDeca;

  const summary =
    "Sharing is caring, thank you! Want to know what I'm up to now? Join me and 338,000 knowledge workers at Hey Rebekah. We'll help you upskill your work with ChatGPT and AI tools. It's free for readers and always will be. See you there!";
  const testimonial =
    "I can't stop reading Hey Rebekah! (She'll kill me) ~ Rebekah's son";

  const imageResponse = new ImageResponse(
    (
      <OgImage
        post={post}
        summary={summary}
        testimonial={testimonial}
        image="/main-og-image.png"
      />
    ),
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

  return imageResponse;
}
