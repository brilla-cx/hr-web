import { ImageResponse } from "next/server";

import OgImage from "@/components/blog/ogimage";
import { getBookbySlug } from "@/sanity/client";

export const runtime = "edge";

export default async function handler({ params }) {
  const { slug } = params;
  const book = await getBookbySlug(slug);

  const post = {
    name: `Hey Rebekah ❤️ ${book.name || ""}`,
    category: book.category?.name || "",
    author: { name: book.author?.name || "" },
    publishedAt: book.publishedAt || "",
    _createdAt: book._createdAt || "",
  };

  const fontURL = new URL(
    "../../../assets/fonts/lexend-semibold.ttf",
    import.meta.url
  );
  const fontData = await fetch(fontURL).then((res) => res.arrayBuffer());

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
