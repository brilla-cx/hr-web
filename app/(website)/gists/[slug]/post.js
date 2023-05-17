import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import AuthorCard from "@/components/blog/authorCard";
import { PortableText } from "@/components/blog/portabletext";
import SocialShare from "@/components/blog/share";
import Sidebar from "@/components/blog/sidebar";
import Container from "@/components/container";
import { H1, Prose } from "@/components/ui";
import Label from "@/components/ui/label";
import DateTime from "@/components/ui/time";
import { urlForImage } from "@/sanity/image";

export default function Post(props) {
  const { loading, post, categories } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  return (
    <>
      <div className="relative isolate py-10 bg-slate-950">
        <div
          className="absolute inset-0 opacity-50 "
          style={{
            backgroundColor: post?.image?.ImageColor || "#f34dc3",
          }}
        />
        <Container
          large
          className="absolute inset-0 border-l border-r border-neutral-200 border-opacity-10 z-12"
        />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 place-items-center ">
            <div className="order-2 md:order-none">
              {post.image && <MainImage image={post.image} />}
            </div>
            <div className="order-1 md:order-none self-center px-5">
              <div>
                {post.category && (
                  <Label color="white">{post.category[0]?.name}</Label>
                )}

                <H1
                  as="h1"
                  className="text-white underline decoration-2 decoration-white/30 underline-offset-8 mt-2">
                  {post.name}
                </H1>
                {post.tldr && (
                  <div className="prose mt-2 prose-2xl prose-p:leading-snug prose-invert prose-p:text-white/90">
                    <PortableText value={post.tldr} />
                  </div>
                )}

                <div className="mt-4">
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-white/90 font-semibold text-xs">
                        By{" "}
                        <Link
                          href="/"
                          className=" text-white font-semibold text-xs hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
                          {post?.author?.name}
                        </Link>
                      </p>
                      <div className="flex space-x-2 mt-2 text-sm md:flex-row md:items-center">
                        <DateTime
                          className="text-white/80 text-xs"
                          date={post?.publishedAt || post._createdAt}
                        />
                        <span className="text-white/80 text-xs">•</span>
                        <span className="text-white/80 text-xs">
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

      <div className="mx-auto mt-14 mb-20 flex max-w-screen-xl flex-col gap-5 px-5 md:flex-row">
        <article className="flex-1 ">
          <Prose className="prose-post-body mx-auto max-w-[55ch]">
            {post.content && <PortableText value={post.content} />}
          </Prose>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
              ← View all posts
            </Link>
          </div>
          {post.author && <AuthorCard author={post.author} />}
        </article>
        <aside className="sticky top-24 w-full self-start md:w-80 mr-5">
          <Sidebar
            categories={categories}
            related={post.related.filter((item) => item.slug.current !== slug)}
          />
        </aside>
      </div>
    </>
  );
}

const MainImage = ({ image }) => {
  if (!image) return null;

  return (
    <div>
      <Image
        {...urlForImage(image)}
        {...(image.blurDataURL && {
          placeholder: "blur",
          blurDataURL: image.blurDataURL,
        })}
        alt={image?.alt || "Thumbnail"}
        priority
        className="rounded"
        sizes="100vw"
      />
      {image.caption && (
        <figcaption className="text-center mt-2">
          <p className="text-xs italic text-white/60 leading-tight">
            {image.caption}
          </p>
        </figcaption>
      )}
    </div>
  );
};
