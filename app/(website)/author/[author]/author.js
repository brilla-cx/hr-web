import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiLinkedin, SiTwitter } from "react-icons/si";

import { PortableText } from "@/components/blog/portabletext";
import Container from "@/components/container";
import PostAlt from "@/components/postalt";
import { H2, H6, Lead } from "@/components/ui";
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
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
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
            <Lead className="text-gray-400 mt-2 text-center mx-auto max-w-2xl">
              {author.expertise}
            </Lead>
          )}

          <div className="flex gap-4 mt-4 items-center text-gray-300">
            {author?.linkedin && (
              <Link
                href={author.linkedin}
                target="_blank"
                className="transition duration-500 ease-in-out hover:shadow-lg hover:text-pink">
                <SiLinkedin /> <span className="sr-only">Linkedin</span>
              </Link>
            )}
            {author?.twitter && (
              <Link
                href={author.twitter}
                target="_blank"
                className="transition duration-500 ease-in-out hover:shadow-lg hover:text-pink">
                <SiTwitter /> <span className="sr-only">Twitter</span>
              </Link>
            )}
            {/*{author?.teamUrl && (
              <Link
                href={author.teamUrl}
                target="_blank"
                className="transition duration-500 ease-in-out hover:shadow-lg hover:text-pink">
                <GlobeAltIcon className="w-5 h-5 " />
                <span className="sr-only">Brilla</span>
              </Link>
            )}*/}
          </div>

          <div className="mx-auto mt-6 flex max-w-3xl flex-col px-5 not-prose text-center text-gray-400">
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
        <div className="text-center mt-16 text-gray-200">
          <H6>{author.name} writes about</H6>
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
        <div className="px-4 sm:px-8 lg:px-16 my-8 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-4 ">
          {posts.map((post) => (
            <PostAlt key={post._id} post={post} aspect="landscape" />
          ))}
        </div>
      </Container>
    </div>
  );
}
