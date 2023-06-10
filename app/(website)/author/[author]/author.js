import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { SiLinkedin, SiTwitter } from "react-icons/si";

import { PortableText } from "@/components/blog/portabletext";
import Container from "@/components/container";
import PostAlt from "@/components/postalt";
import { H2, H6, Lead } from "@/components/ui";
import Label from "@/components/ui/label";
import { urlForImage } from "@/sanity/image";

export default function Author(props) {
  const { loading, posts, author } = props;

  const slug = author?.slug?.current;

  if (!loading && !slug) {
    notFound();
  }

  const categories = [
    ...new Set([author?.category || [], ...(author?.beat || [])]),
  ];

  return (
    <div className="bg-midnight text-gray-200">
      <Container large className="border-l border-r border-neutral-200/10">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            {author?.image && (
              <Image
                src={urlForImage(author.image).src}
                alt={author?.imageAltText || author?.name || " "}
                fill
                sizes="(max-width: 320px) 100vw, 320px"
                className="object-cover"
              />
            )}
          </div>
          <H2 as="h1" className="mt-4 text-gray-200">
            {author.name}
          </H2>
          {author.expertise && (
            <Lead className="mx-auto mt-2 max-w-2xl text-center text-gray-300">
              {author.expertise}
            </Lead>
          )}

          <div className="mt-4 flex items-center gap-4 text-gray-300">
            {author?.linkedin && (
              <Link
                href={author.linkedin}
                target="_blank"
                className="transition duration-500 ease-in-out hover:text-pink hover:shadow-lg">
                <SiLinkedin /> <span className="sr-only">Linkedin</span>
              </Link>
            )}
            {author?.twitter && (
              <Link
                href={author.twitter}
                target="_blank"
                className="transition duration-500 ease-in-out hover:text-pink hover:shadow-lg">
                <SiTwitter /> <span className="sr-only">Twitter</span>
              </Link>
            )}
          </div>

          <div className="not-prose mx-auto mt-6 flex max-w-3xl flex-col px-5 text-center text-gray-400">
            {author.bio && <PortableText value={author.bio} />}
          </div>
        </div>
        <div className="mt-16 text-center text-gray-200">
          <H6>{author.firstName} writes about</H6>
        </div>
        <div className="mx-auto mt-2 flex max-w-2xl flex-wrap items-center justify-center gap-3">
          {categories.length &&
            categories.map((category) => (
              <Link
                href={`/category/${category?.slug?.current}`}
                key={category._id}>
                <Label color={category.color}>{category.name}</Label>
              </Link>
            ))}
        </div>
        <Suspense fallback={<p>Revving up the flux capacitor....</p>}>
          <div className="my-8 grid gap-10 px-4 sm:px-8 md:grid-cols-2 lg:gap-10 lg:px-16 xl:grid-cols-3 ">
            {posts.map((post) => (
              <PostAlt key={post._id} post={post} aspect="landscape" />
            ))}
          </div>
        </Suspense>
      </Container>
    </div>
  );
}
