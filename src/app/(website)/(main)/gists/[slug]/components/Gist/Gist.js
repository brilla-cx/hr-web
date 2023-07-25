import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useNextSanityImage } from "next-sanity-image";

import Container from "@/components/layout/Container/Container";
import AuthorCard from "@/components/shared/post/AuthorCard/AuthorCard";
import { PortableText } from "@/components/shared/post/PortableText/PortableText";
import Sidebar from "@/components/shared/post/Sidebar/Sidebar";
import SocialShare from "@/components/shared/post/SocialShare/SocialShare";
import ViewAllPosts from "@/components/shared/post/ViewAllPosts/ViewAllPosts";
import { H1, Prose } from "@/components/ui";
import Label from "@/components/ui/label";
import DateTime from "@/components/ui/time";
import lightHoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";
import { client } from "@/sanity/client";

export default function Gist(props) {
  const { post } = props;

  if (!post?.slug) {
    notFound();
  }

  return (
    <>
      <div className="relative isolate bg-midnight py-10">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundColor: post?.image?.ImageColor || "#f34dc3",
          }}
        />
        <Container
          large
          className="z-12 absolute inset-0 border-l border-r border-neutral-200/10"
        />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:gap-10">
            <div className="order-2 w-full md:order-none">
              {post.image && <MainImage image={post.image} />}
            </div>
            <div className="order-1 self-center px-5 md:order-none">
              <div>
                {post.category && (
                  <Link
                    href={`/category/${post.category?.[0]?.slug.current}`}
                    className="transition hover:opacity-75">
                    <Label color="gray">{post.category?.[0]?.name}</Label>
                  </Link>
                )}

                <H1
                  as="h1"
                  className="mt-2 text-gray-100 underline decoration-white/30 decoration-2 underline-offset-8 ">
                  {post.name}
                </H1>
                {post.tldr && (
                  <div className="not-prose prose-xl mt-2 leading-snug text-gray-300">
                    <PortableText value={post.tldr} />
                  </div>
                )}

                <div className="mt-4">
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="inline text-xs font-semibold text-gray-200">
                        By{" "}
                        <Link
                          href={`/author/${post?.author?.slug?.current}`}
                          className={cx(
                            "text-xs font-semibold text-gray-200",
                            lightHoverStyles,
                          )}>
                          {post?.author?.name}
                        </Link>
                      </p>
                      <div className="mt-2 flex space-x-2 text-sm md:flex-row md:items-center">
                        <DateTime
                          className="text-xs text-gray-200"
                          date={post?.publishedAt || post._createdAt}
                        />
                        <span className="text-xs text-gray-200">•</span>
                        <span className="text-xs text-gray-200">
                          {post.estReadingTime || "5"} min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <SocialShare
                    title={post?.name}
                    url={`https://heyrebekah.com/gists/${post?.slug?.current}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="mx-auto mb-20 mt-14 flex max-w-screen-xl flex-col gap-5 px-5 md:flex-row">
        <article className="flex-1 ">
          <Prose className="prose mx-auto max-w-prose">
            {post.content && <PortableText value={post.content} />}
          </Prose>
          <ViewAllPosts
            href="/gists"
            buttonText="View all posts"
            direction="left"
            variant="light"
          />

          {post.author && <AuthorCard author={post.author} />}
        </article>
        <aside className="sticky top-24 mr-5 w-full self-start md:w-64">
          <Sidebar
            subscribeTitle="You belong here"
            subscribeText="Join +338,000 professionals in our community. Subscribe to our free daily newsletter and upskill your work. Delivery and delight are on us."
            buttonText="LEVEL UP"
            related={post.related.filter(
              (item) => item.slug.current !== post.slug.current,
            )}
          />
        </aside>
      </div>
    </>
  );
}

const MainImage = ({ image }) => {
  const imageProps = useNextSanityImage(client, image);
  if (!image) return null;

  return (
    <div
      className="relative overflow-hidden rounded"
      style={{ paddingBottom: "100%" }}>
      {imageProps && (
        <Image
          src={imageProps.src}
          {...(image.blurDataURL && {
            placeholder: "blur",
            blurDataURL: image.blurDataURL,
          })}
          width={100}
          height={100}
          alt={
            image?.alt ||
            "Default thumbnail for blog post because it's missing. We're sorry about that."
          }
          aria-describedby={image.caption ? "figcaptionID" : undefined}
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      )}
      {image.caption && (
        <figcaption id="figcaptionID" className="mt-2 text-center">
          <p className="text-xs italic leading-tight text-white/60">
            {image.caption}
          </p>
        </figcaption>
      )}
    </div>
  );
};
