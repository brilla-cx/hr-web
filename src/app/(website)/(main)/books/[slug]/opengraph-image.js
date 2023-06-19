import { ImageResponse } from "next/server";

import OgImage from "@/components/shared/post/OgImage/OgImage";
import { getBookbySlug } from "@/sanity/client";

export const runtime = "edge";

export default async function handler({ params }) {
  const { slug } = params;
  const book = await getBookbySlug(slug);

  const summary = `We read ${book.name} the good old fashioned way. You should too. If you join our community of +338K knowledge workers, we'll show you how you can read 10 books like ${book.name} a month with ChatGPT and AI.`;
  const testimonial = "Hey Rebekah's book club is the best. ~ Rebekah's son";

  const fontURL = new URL(
    "../../../assets/fonts/lexend-semibold.ttf",
    import.meta.url
  );
  const fontData = await fetch(fontURL).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <OgImage post={book} summary={summary} testimonial={testimonial} />,
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
