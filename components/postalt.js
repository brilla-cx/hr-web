import { PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import CategoryLabel from "@/components/blog/category";
import { H3, H6 } from "@/components/ui";
import { cx, timeAgo } from "@/lib/utils";
import { urlForImage } from "@/sanity/image";

export default function PostAlt({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  noDate,
}) {
  const imageProps = post?.image ? urlForImage(post.image) : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  const hoverStyles = `bg-gradient-to-r
                        bg-[length:0px_10px]
                        bg-left-bottom bg-no-repeat
                        transition-[background-size]
                        duration-500
                        hover:bg-[length:100%_3px]
                        group-hover:bg-[length:100%_10px]
                        from-purple-800 to-purple-900`;
  return (
    <>
      <div
        className={cx(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}>
        <div
          className={cx(
            " overflow-hidden rounded-md bg-gray-800 transition-all group"
          )}>
          <Link
            className={cx("relative block", {
              "aspect-video": aspect === "landscape",
              "aspect-[5/4]": aspect === "custom",
              "aspect-square": aspect !== "landscape" && aspect !== "custom",
            })}
            href={`/gists/${post.slug}`}>
            {imageProps ? (
              <Image
                src={imageProps.src}
                {...(post.image.blurDataURL && {
                  placeholder: "blur",
                  blurDataURL: post.image.blurDataURL,
                })}
                alt={post.image?.alt || "Thumbnail"}
                priority={!!preloadImage}
                className="object-cover transition-all"
                fill
                sizes="(max-width: 768px) 30vw, 33vw"
              />
            ) : (
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-600">
                <PhotoIcon />
              </span>
            )}
          </Link>
        </div>

        <div className={cx(minimal && "flex items-center")}>
          <div className="mt-3">
            <CategoryLabel categories={post.category} nomargin />

            <Link
              href={`/gists/${pathPrefix ? `${pathPrefix}/` : ""}${post.slug}`}>
              {fontSize === "large" ? (
                <H3
                  as="h2"
                  className={cx(
                    "text-white mt-2 line-clamp-2 inline",
                    hoverStyles
                  )}>
                  {post.name}
                </H3>
              ) : (
                <H6
                  as="h2"
                  className={cx(
                    "text-white mt-1 line-clamp-2 inline",
                    hoverStyles
                  )}>
                  {post.name}
                </H6>
              )}
            </Link>

            <div className="hidden">
              {post.excerpt && (
                <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                  <Link href={`/gists/${post.slug}`}>{post.excerpt}</Link>
                </p>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between text-gray-500 dark:text-gray-400">
              <Link href={`/author/${post.author?.slug.current}`}>
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    {post.author?.image && (
                      <Image
                        src={AuthorimageProps.src}
                        alt={post?.author?.name}
                        className="rounded-full object-cover"
                        fill
                        sizes="20px"
                      />
                    )}
                  </div>
                  <span className="truncate text-sm">{post.author?.name}</span>
                </div>
              </Link>

              <time
                className={cx(noDate && "sr-only", "truncate text-sm ")}
                dateTime={post?.publishedAt || post._createdAt}>
                {timeAgo(post?.publishedAt || post._createdAt)}
              </time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
