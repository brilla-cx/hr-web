import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PortableText } from "@/components/blog/portabletext";
import Container from "@/components/container";
import PostAlt from "@/components/postalt";
import { H4, H6 } from "@/components/ui";
import Label from "@/components/ui/label";
import { urlForImage } from "@/sanity/image";

export default function Author(props) {
  const { loading, posts, author } = props;

  const slug = author?.slug.current;

  if (!loading && !slug) {
    notFound();
  }

  const categories = [
    ...new Set([author?.category || [], ...(author?.beat || [])]),
  ];

  return (
    <div className="bg-dark-blue">
      <Container
        large
        className="border-l border-r border-light-grey border-opacity-10">
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
          <H4 as="h1" className="text-white">
            {author.name}
          </H4>
          {author.expertise && (
            <p className="text-white text-lg mt-2 text-center mx-auto max-w-2xl">
              {author.expertise}
            </p>
          )}

          <div className="flex gap-4 mt-3 items-center text-white/50">
            {author?.linkedin && (
              <Link href={author.linkedin} target="_blank">
                <LinkedinIcon /> <span className="sr-only">Linkedin</span>
              </Link>
            )}
            {author?.twitter && (
              <Link href={author.twitter} target="_blank">
                <TwitterIcon /> <span className="sr-only">Twitter</span>
              </Link>
            )}
            {author?.teamUrl && (
              <Link href={author.teamUrl} target="_blank">
                <GlobeAltIcon className="w-5 h-5 " />
                <span className="sr-only">Brilla</span>
              </Link>
            )}
          </div>

          <div className="mx-auto mt-6 flex max-w-3xl flex-col px-5 prose text-center text-gray-400">
            {author.bio && <PortableText value={author.bio} />}
          </div>
          {/* <div className="grid md:grid-cols-2">
            <div className="prose">
              Credentials
              {author.credentials && (
                <PortableText value={author.credentials} />
              )}
            </div>
            <div className="prose">
              Appearances
              {author.appearances && (
                <PortableText value={author.appearances} />
              )}
            </div>
          </div> */}
        </div>
        <div className="text-center mt-16 text-white">
          <H6>Posts by {author.name}</H6>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-2 gap-3 mx-auto max-w-2xl">
          {categories.length &&
            categories.map((category) => (
              <Link
                href={`/category/${category?.slug?.current}`}
                key={category._id}>
                <Label color={category.color}>{category.name}</Label>
              </Link>
            ))}
        </div>
        <div className="px-4 sm:px-8 lg:px-16 mt-6 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          {posts.map((post) => (
            <PostAlt key={post._id} post={post} aspect="landscape" />
          ))}
        </div>
      </Container>
    </div>
  );
}

const LinkedinIcon = () => {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
};

const TwitterIcon = () => {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Twitter</title>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
};
