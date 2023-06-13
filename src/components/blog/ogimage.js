/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import { format, parseISO } from "date-fns";

import { SITE_URL } from "@/lib/constants";
import { urlForImage } from "@/sanity/image";

export default function OgImage({ post }) {
  const category = Array.isArray(post?.category)
    ? post?.category?.[0]?.name
    : post?.category?.name || post?.category || "";
  const sanitizedCategory = category.replace(/[\r\n\t]/g, "");
  const pubDate = format(
    parseISO(post?.publishedAt || post._createdAt),
    "MMMM dd, yyyy"
  );
  const absoluteURL =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : SITE_URL;
  return (
    <div
      tw="flex w-full h-full"
      style={{
        fontFamily: "Lexend Deca",
        backgroundColor: "hsl(224, 71%, 4%)",
      }}>
      <div
        tw={`flex flex-col items-start justify-around px-10 ${
          post.image ? "w-1/2" : "w-full"
        }`}>
        <img
          src={`${absoluteURL}/hey-rebekah-logo.svg`}
          alt="Hey Rebekah Logo"
          width={150}
          height={40}
        />
        <div tw="flex flex-col">
          <span tw="uppercase tracking-wider text-gray-400">
            {sanitizedCategory}
          </span>
          <div
            tw="flex mt-2 font-semibold tracking-tight leading-tight text-4xl text-gray-200"
            style={{
              fontFamily: "Lexend Deca",
              maxHeight: "230px",
              overflow: "hidden",
            }}>
            {post?.name}
          </div>
          <p tw="text-gray-400 text-md font-medium">
            By {post?.author?.name || post?.bookAuthor}
          </p>
        </div>

        <div tw="text-pink text-sm">{pubDate}</div>
      </div>
      {post.image && (
        <div tw="flex w-1/2 relative items-center">
          <img
            src={urlForImage(post.image).src}
            alt="Cover"
            tw="w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
}
