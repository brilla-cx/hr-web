/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import { format, parseISO } from "date-fns";

import { urlForImage } from "@/sanity/image";

export default function OgImage({ post }) {
  const category = post?.category[0]?.name || "";
  const sanitizedCategory = category.replace(/[\r\n\t]/g, "");
  const pubDate = format(
    parseISO(post?.publishedAt || post._createdAt),
    "MMMM dd, yyyy"
  );
  const absoluteURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${process.env.VERCEL_URL}`;
  return (
    <div
      tw="flex w-full h-full"
      style={{ fontFamily: "Lexend Deca", backgroundColor: "#040b29" }}>
      <div tw="flex flex-col items-start justify-around px-10 w-1/2">
        <img
          src={`${absoluteURL}/hey-rebekah-logo-web.png`}
          alt="Hey Rebekah Logo"
          width={150}
          height={40}
        />
        <div tw="flex flex-col">
          <span tw="text-white uppercase text-pink-500">
            {sanitizedCategory}
          </span>
          <div
            tw="flex mt-2 font-semibold tracking-tight leading-snug text-6xl text-white"
            style={{
              fontFamily: "Lexend Deca",
              maxHeight: "230px",
              overflow: "hidden",
            }}>
            {post?.name}
          </div>
          <p tw="text-white/90 text-lg font-medium">
            <span href="/" tw="border-b border-pink-500 text-white">
              By {post?.author?.name}
            </span>
          </p>
        </div>

        <div tw="text-white opacity-70">{pubDate}</div>
      </div>

      <div tw="flex w-1/2 relative items-center">
        <img
          src={urlForImage(post?.image).src}
          alt="Cover"
          tw="w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
