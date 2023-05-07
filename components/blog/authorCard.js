import Image from "next/image";
import Link from "next/link";

import { PortableText } from "@/components/blog/portabletext";
import { H6 } from "@/components/ui";
import { urlForImage } from "@/sanity/image";

export default function AuthorCard({ author }) {
  const imageProps = author?.image ? urlForImage(author.image) : null;
  return (
    <div className="px-8 py-8 mt-3 text-gray-600 rounded-2xl bg-gray-100 max-w-2xl mx-auto">
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
            <H6 as="h3" className="text-lg font-medium text-gray-800">
              About {author.name}
            </H6>
          </div>
          <div className="line-clamp-3">
            {author.bio && <PortableText value={author.bio} />}
          </div>
          <div className="mt-3">
            <Link
              href={`/author/${author.slug.current}`}
              className="text-sm text-blue underline decoration-pink decoration-2 underline-offset-4 hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-blue hover:decoration-2 transition-all duration-200 ">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
