import { ImageResponse } from "next/server";

import OgImage from "@/components/post/OgImage/OgImage";
import { getAuthorPostsBySlug } from "@/sanity/client";

export const runtime = "edge";

async function getAuthor(slug) {
  const posts = await getAuthorPostsBySlug(slug);
  return posts?.[0]?.author || {};
}

export default async function handler({ params }) {
  const author = await getAuthor(params.author);

  const lexendDeca = fetch(
    new URL("../../../assets/fonts/lexend-semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontData = await lexendDeca;

  const summary =
    "Wow, I have my own dynamic OG image? That's cool. BTW, if you want to check out my latest posts, subscribe to updates from me. You could say I'm an expert on how not to use generative AI.";
  const testimonial =
    "I can't stop reading Hey Rebekah. Ambreen won't let me. ~ Mom";

  return new ImageResponse(
    <OgImage post={author} summary={summary} testimonial={testimonial} />,
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
