import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiLinkedin, SiTwitter } from "react-icons/si";

import { PortableText } from "@/components/blog/portabletext";
import Container from "@/components/container";
import PostList from "@/components/postlist";
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
    <>
      <Container>
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
          <H4
            as="h1"
            className="text-brand-primary mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-3xl lg:leading-tight">
            {author.name}
          </H4>
          {author.expertise && (
            <p className="text-lg mt-2">{author.expertise}</p>
          )}

          <div className="flex gap-4 mt-3 items-center">
            {author?.linkedin && (
              <Link href={author.linkedin} target="_blank">
                <SiLinkedin /> <span className="sr-only">Linkedin</span>
              </Link>
            )}
            {author?.twitter && (
              <Link href={author.twitter} target="_blank">
                <SiTwitter /> <span className="sr-only">Twitter</span>
              </Link>
            )}
            {author?.teamUrl && (
              <Link href={author.teamUrl} target="_blank">
                <GlobeAltIcon className="w-5 h-5" />
                <span className="sr-only">Brilla</span>
              </Link>
            )}
          </div>

          <div className="mx-auto mt-6 flex max-w-3xl flex-col px-5 text-center text-gray-500">
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
        <div className="text-center mt-16">
          <H6>Posts by {author.name}</H6>
        </div>
        <div className="flex  justify-center items-center mt-2 gap-3">
          {categories.length &&
            categories.map((category) => (
              <Link
                href={`/category/${category.slug.current}`}
                key={category._id}>
                <Label color={category.color}>{category.name}</Label>
              </Link>
            ))}
        </div>
        <div className="mt-6 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          {posts.map((post) => (
            <PostList key={post._id} post={post} aspect="landscape" />
          ))}
        </div>
      </Container>
    </>
  );
}
