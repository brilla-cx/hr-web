import Image from "next/image";
import Link from "next/link";
import { cx } from "@/lib/utils";
import { urlForImage } from "@/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";
import { Card, H4, H6 } from "@/components/ui";

export default function PostList({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight,
}) {
  const imageProps = post?.image ? urlForImage(post.image) : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;
  return (
    <Card>
      <div
        className={cx(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}>
        <div
          className={cx(
            " overflow-hidden   bg-gray-100 transition-all dark:bg-gray-800"
          )}>
          <Link
            className={cx(
              "relative block",
              aspect === "landscape"
                ? "aspect-video"
                : aspect === "custom"
                ? "aspect-[5/4]"
                : "aspect-square"
            )}
            href={`/gists/${pathPrefix ? `${pathPrefix}/` : ""}${post.slug}`}>
            {imageProps ? (
              <Image
                src={imageProps.src}
                {...(post.image.blurDataURL && {
                  placeholder: "blur",
                  blurDataURL: post.image.blurDataURL,
                })}
                alt={post.image?.alt || "Thumbnail"}
                priority={preloadImage ? true : false}
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
            minimal && "flex items-center"
          )}>
          <div>
            {/* <CategoryLabel categories={post.categories} nomargin={minimal} /> */}
            <time
              className="truncate text-xs uppercase text-black font-bold"
              dateTime={post?.publishedAt || post._createdAt}>
              {format(
                parseISO(post?.publishedAt || post._createdAt),
                "MMMM dd, yyyy"
              )}
            </time>

            <Link
              href={`/gists/${pathPrefix ? `${pathPrefix}/` : ""}${post.slug}`}>
              {fontSize === "large" ? (
                <H4 as="h2" className="mt-2 line-clamp-2">
                  {post.title || post.name}
                </H4>
              ) : (
                <H6 as="h2" className="mt-1 line-clamp-2">
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

            <div className="mt-3 flex items-center space-x-3 text-black dark:text-white">
              <Link href={`/author/${post.author?.slug?.current}`}>
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    {post.author?.image && (
                      <Image
                        src={AuthorimageProps.src}
                        loader={AuthorimageProps.loader}
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
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
