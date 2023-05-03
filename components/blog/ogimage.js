import { parseISO, format } from "date-fns";
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
      style={{ fontFamily: "Apfel", backgroundColor: "#040b29" }}>
      <div tw="flex flex-col items-start justify-around px-10 w-1/2">
        <img
          src={`${absoluteURL}/hey-rebekah-logo-web.png`}
          alt="Hey Rebekah Logo"
          width={150}
          height={40}
        />
        <div tw="flex flex-col">
          <span tw="text-white uppercase">{sanitizedCategory}</span>
          <div
            tw="flex mt-2 font-semibold tracking-tight leading-snug text-6xl text-white"
            style={{
              fontFamily: "Apfel",
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

// <div
// tw="w-full h-full flex flex-col items-start justify-center bg-white px-10"
// style={{ fontFamily: "Apfel" }}>
// <div tw="text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">
//   {post.categories[0].title}
// </div>

// <h1 tw="mt-2 mb-3 text-3xl font-semibold tracking-tight lg:leading-snug lg:text-4xl dark:text-white">
//   {post.title}
// </h1>
// </div>
