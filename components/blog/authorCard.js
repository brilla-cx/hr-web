import Image from "next/image";
import Link from "next/link";

import { PortableText } from "@/components/blog/portabletext";
import { H6 } from "@/components/ui";
import { urlForImage } from "@/sanity/image";

export default function AuthorCard({ author }) {
  const imageProps = author?.image ? urlForImage(author.image) : null;
  return (
    <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400 max-w-2xl mx-auto">
      <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
        <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
          {imageProps && (
            <Link href={`/author/${author.slug.current}`}>
              <Image
                src={imageProps.src}
                alt={author.name}
                className="rounded-full object-cover"
                fill
                sizes="96px"
              />
            </Link>
          )}
        </div>
        <div>
          <div className="my-3 md:mt-0">
            <H6
              as="h3"
              className="text-lg font-medium text-gray-800 dark:text-gray-300">
              About {author.name}
            </H6>
          </div>
          <div>{author.bio && <PortableText value={author.bio} />}</div>
          <div className="mt-3">
            <Link
              href={`/author/${author.slug.current}`}
              className="text-sm text-pink border-b border-pink ">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
