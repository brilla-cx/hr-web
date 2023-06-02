import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PortableText } from "@/components/blog/portabletext";
import SocialShare from "@/components/blog/share";
import Sidebar from "@/components/blog/sidebar";
import ViewAllPosts from "@/components/blog/viewallposts";
import Container from "@/components/container";
import { GlowingButton, H1, Prose } from "@/components/ui";
import Label from "@/components/ui/label";
import DateTime from "@/components/ui/time";
import { urlForImage } from "@/sanity/image";

export default function Post({ post }) {
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
          className="z-12 absolute inset-0 border-l border-r border-neutral-200 border-opacity-10"
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
                      <p className="inline text-xs font-semibold text-gray-200">
                        By {post?.bookAuthor}
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

                <div className="mt-6">
                  <GlowingButton href={post.bookUrl || "#"} target="_blank">
                    Purchase this Book
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
            subscribeText="Join +320,000 professionals in our community. Delivery is free."
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
