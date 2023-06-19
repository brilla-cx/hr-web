import { PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import CategoryLabel from "@/components/post/CategoryLabel/CategoryLabel";
import { H3, H6 } from "@/components/ui";
import hoverStyles from "@/lib/hover";
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
  hideCategory,
}) {
  const imageProps = post?.image ? urlForImage(post.image) : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <>
      <div
        className={cx(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}>
        <div
          className={cx(
            "group relative overflow-hidden rounded-md bg-gray-800 transition-all"
          )}>
          <Link
            className={cx("relative block", {
              "aspect-video": aspect === "landscape",
              "aspect-[5/4]": aspect === "custom",
              "aspect-square": aspect !== "landscape" && aspect !== "custom",
            })}
            href={`/${pathPrefix ? `${pathPrefix}` : "gists"}/${
              post.slug.current
            }`}>
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
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-500">
                <PhotoIcon />
              </span>
            )}
          </Link>
        </div>

        <div className={cx(minimal && "flex items-center")}>
          <div className="mt-3">
            {!hideCategory && (
              <CategoryLabel categories={post.category} nomargin />
            )}
            <Link
              href={`/${pathPrefix ? `${pathPrefix}` : "gists"}/${
                post.slug.current
              }`}>
              {fontSize === "large" ? (
                <H3
                  as="h2"
                  className={cx(
                    "mt-2 line-clamp-2 text-gray-200",
                    hoverStyles
                  )}>
                  <span className="inline">{post.name}</span>
                </H3>
              ) : (
                <H6 as="h2" className={cx("mt-1 line-clamp-2 text-gray-200 ")}>
                  <span className={cx(hoverStyles)}>{post.name}</span>
                </H6>
              )}
            </Link>

            <div className="hidden">
              {post.excerpt && (
                <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                  <Link
                    href={`/${pathPrefix ? `${pathPrefix}` : "gists"}/${
                      post.slug.current
                    }`}>
                    {post.excerpt}
                  </Link>
                </p>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between text-gray-300 dark:text-gray-400">
              {post.author && (
                <Link href={`/author/${post.author?.slug?.current}`}>
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
                    <span className="truncate text-sm">
                      {post.author?.name}
                    </span>
                    {post.isShort ? (
                      <div className="rounded bg-slate-800 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        Shorts
                      </div>
                    ) : null}
                  </div>
                </Link>
              )}
              <time
                className={cx(noDate && "sr-only", "truncate text-sm")}
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
