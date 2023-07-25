import { PhotoIcon } from "@heroicons/react/24/outline";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";

import { Card, H3, H6 } from "@/components/ui";
import { cx } from "@/lib/utils";
import { client } from "@/sanity/client";

export default function PostList({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
}) {
  const imageProps = useNextSanityImage(client, post?.image);
  const authorImageProps = useNextSanityImage(client, post?.author?.image);

    return (
      <Card>
        <div
          className={cx(
            "group cursor-pointer",
            minimal && "grid gap-10 md:grid-cols-2",
          )}>
          <div
            className={cx(
              " overflow-hidden   bg-gray-100 transition-all dark:bg-gray-800",
            )}>
            <Link
              className={cx("relative block", {
                "aspect-video": aspect === "landscape",
                "aspect-[5/4]": aspect === "custom",
                "aspect-square": aspect !== "landscape" && aspect !== "custom",
              })}
              href={`/gists/${post.slug.current}`}>
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
                <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                  <PhotoIcon />
                </span>
              )}
            </Link>
          </div>

          <div
            className={cx(
              fontSize === "large" ? "px-5 py-4" : "px-3 py-2",
              minimal && "flex items-center",
              "bg-white",
            )}>
            <div>
              {/* <CategoryLabel categories={post.categories} nomargin={minimal} /> */}
              <time
                className="truncate text-xs text-indigo-950"
                dateTime={post?.publishedAt || post._createdAt}>
                {format(
                  parseISO(post?.publishedAt || post._createdAt),
                  "MMMM dd, yyyy",
                )}
              </time>

              <Link
                href={`/gists/${pathPrefix ? `${pathPrefix}/` : ""}${
                  post.slug.current
                }`}>
                {fontSize === "large" ? (
                  <H3 as="h2" className="mt-2 line-clamp-2 h-20">
                    {post.title || post.name}
                  </H3>
                ) : (
                  <H6 as="h2" className="mt-1 line-clamp-2 h-16">
                    {post.title || post.name}
                  </H6>
                )}
              </Link>

              <div className="hidden">
                {post.excerpt && (
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <Link
                      href={`/gists/${pathPrefix ? `${pathPrefix}/` : ""}${
                        post.slug
                      }`}
                      legacyBehavior>
                      {post.excerpt}
                    </Link>
                  </p>
                )}
              </div>

              <div className="mb-1 mt-3 flex items-center space-x-3 text-gray-600">
                <Link href={`/author/${post.author?.slug?.current}`}>
                  <div className="flex items-center gap-3">
                    <div className="relative h-5 w-5 flex-shrink-0">
                      {post.author?.image && (
                        <Image
                          src={authorImageProps.src}
                          loader={authorImageProps.loader}
                          alt={post?.author?.name}
                          className="rounded-full object-cover"
                          fill
                          sizes="16px"
                        />
                      )}
                    </div>
                    <span className="truncate text-xs">
                      {post.author?.name}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
}
