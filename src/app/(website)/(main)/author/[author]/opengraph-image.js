import { ImageResponse } from "next/server";

import OgImage from "@/components/blog/ogimage";
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

  return new ImageResponse(<OgImage post={author} />, {
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
