import Image from "next/image";
import Link from "next/link";

import { PortableText } from "@/components/blog/portabletext";
import { H6 } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";
import { urlForImage } from "@/sanity/image";

export default function AuthorCard({ author }) {
  const imageProps = author?.image ? urlForImage(author.image) : null;
  return (
    <div className="mx-auto mt-3 max-w-2xl rounded bg-gray-100 px-8 py-8 text-gray-600">
      <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
        <div className="relative mt-1 h-20 w-20 flex-shrink-0 ">
          {imageProps && (
            <Link href={`/author/${author.slug.current}`}>
              <Image
                src={imageProps.src}
                alt={author.name}
                className="rounded-full object-cover"
                width={96}
                height={96}
              />
            </Link>
          )}
        </div>
        <div>
          <div className="my-5 md:mt-0">
            <H6 as="h3" className="text-lg font-medium text-gray-900">
              About {author.name}
            </H6>
          </div>
          <div className="mb-2 line-clamp-3 text-gray-600">
            {author.bio && <PortableText value={author.bio} />}
          </div>
          <div className="mt-3 inline">
            <Link
              href={`/author/${author.slug.current}`}
              className={cx(
                "decoration-none text-sm font-bold text-gray-900",
                hoverStyles
              )}
              aria-label="View author profile">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
