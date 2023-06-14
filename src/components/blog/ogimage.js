/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import { SITE_URL } from "@/lib/constants";
import { urlForImage } from "@/sanity/image";

export default function OgImage({ post, summary, testimonial }) {
  const absoluteURL =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : SITE_URL;

  if (!post.image) {
    return (
      <div
        tw="flex flex-col items-center justify-center w-full h-full p-10"
        style={{
          fontFamily: "Lexend Deca",
          backgroundColor: "hsl(224, 71%, 4%)",
        }}>
        <img
          src={`${absoluteURL}/hey-rebekah-logo-web.png`}
          alt="Hey Rebekah Logo"
          width={150}
          height={40}
        />
        <div
          tw="flex flex-col items-center mt-8 font-semibold tracking-tight leading-tight text-5xl max-w-4xl text-gray-200 text-center"
          style={{
            fontFamily: "Lexend Deca",
            maxHeight: "230px",
            overflow: "hidden",
          }}>
          {post?.name}
        </div>
        <p tw="mt-4 text-gray-400 text-lg text-center max-w-3xl">{summary}</p>
        {testimonial && (
          <p tw="absolute bottom-10 text-[#ff00fe] text-sm text-center">
            {testimonial}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      tw="flex w-full h-full"
      style={{
        fontFamily: "Lexend Deca",
        backgroundColor: "hsl(224, 71%, 4%)",
      }}>
      <div tw={`flex flex-col p-10 ${post.image ? "w-1/2" : "w-full"}`}>
        <img
          src={`${absoluteURL}/hey-rebekah-logo-web.png`}
          alt="Hey Rebekah Logo"
          width={150}
          height={40}
        />
        <div
          tw="flex flex-col items-center mt-16 font-semibold tracking-tight leading-tight text-4xl text-gray-200"
          style={{
            fontFamily: "Lexend Deca",
            maxHeight: "230px",
            overflow: "hidden",
          }}>
          {post?.name}
        </div>
        <p tw="mt-4 text-gray-400 text-lg">{summary}</p>
      </div>
      {testimonial && (
        <p tw="absolute bottom-10 left-0 mt-8 ml-10 text-[#ff00fe] text-sm">
          {testimonial}
        </p>
      )}
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
