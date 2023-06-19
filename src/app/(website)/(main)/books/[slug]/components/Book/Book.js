import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container/Container";
import { PortableText } from "@/components/shared/post/PortableText/PortableText";
import Sidebar from "@/components/shared/post/Sidebar/Sidebar";
import SocialShare from "@/components/shared/post/SocialShare/SocialShare";
import ViewAllPosts from "@/components/shared/post/ViewAllPosts/ViewAllPosts";
import { GlowingButton, H1, Prose } from "@/components/ui";
import Label from "@/components/ui/label";
import { urlForImage } from "@/sanity/image";

export default function Book({ post }) {
  if (!post?.slug) {
    notFound();
  }

  return (
    <>
      <div className="relative isolate bg-midnight py-10">
        <div
          className="absolute inset-0 opacity-10"
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
                    href={`/category/${post.category?.slug?.current}`}
                    className="transition hover:opacity-75">
                    <Label color="gray">{post.category?.name}</Label>
                  </Link>
                )}

                <H1
                  as="h1"
                  className="mt-2 text-gray-100 underline decoration-white/30 decoration-2 underline-offset-8 ">
                  {post.name}
                </H1>
                {post.summary && (
                  <p className="not-prose prose-2xl mt-2 leading-snug text-gray-300">
                    {post.summary}
                  </p>
                )}

                <div className="mt-4">
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="inline text-base font-semibold text-gray-200">
                        By {post?.bookAuthor}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <SocialShare
                    title={post?.name}
                    url={`https://heyrebekah.com/books/${post?.slug?.current}`}
                  />
                </div>

                <div className="mt-6">
                  <GlowingButton
                    href={post.bookUrl || "#"}
                    target="_blank"
                    aria-label="Go to sign-up form">
                    Get the Book
                  </GlowingButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="mx-auto mb-20 mt-14 flex max-w-screen-xl flex-col gap-5 px-5 md:flex-row">
        <article className="flex-1 ">
          <Prose className="prose mx-auto max-w-prose">
            {post?.theGist && <PortableText value={post.theGist} />}
          </Prose>
          <ViewAllPosts
            href="/books"
            buttonText="View all books"
            direction="left"
            variant="light"
          />
        </article>
        <aside className="sticky top-24 mr-5 w-full self-start md:w-64">
          <Sidebar
            subscribeTitle="You belong here"
            subscribeText="Join +338,000 professionals in our community. Subscribe to our free daily newsletter and upskill your work. Delivery and delight are on us."
            buttonText="LEVEL UP"
          />
        </aside>
      </div>
    </>
  );
}

const MainImage = ({ image }) => {
  if (!image) return null;

  return (
    <div
      className="relative overflow-hidden rounded"
      style={{ paddingBottom: "100%" }}>
      <Image
        {...urlForImage(image)}
        {...(image.blurDataURL && {
          placeholder: "blur",
          blurDataURL: image.blurDataURL,
        })}
        alt={
          image?.alt ||
          "Default thumbnail for blog post because it's missing. We're sorry about that."
        }
        aria-describedby={image.caption ? "figcaptionID" : undefined}
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
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
