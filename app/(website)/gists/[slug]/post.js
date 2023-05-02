import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/image";
import { PortableText } from "@/components/blog/portabletext";
import AuthorCard from "@/components/blog/authorCard";
import Sidebar from "@/components/blog/sidebar";
import Container from "@/components/container";
import DateTime from "@/components/ui/time";
import { Button, H2, Prose } from "@/components/ui";
import Label from "@/components/ui/label";

export default function Post(props) {
  const { loading, post, categories } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  return (
    <>
      <div className="relative isolate py-10 bg-black">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundColor: post?.image?.ImageColor || "#f34dc3",
          }}></div>
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-5 md:gap-10 place-items-center">
            {post.image && <MainImage image={post.image} />}

            <div className="self-center px-5">
              <div>
                {post.category && (
                  <Label color="white">{post.category[0]?.name}</Label>
                )}

                <H2 as="h1" className="text-white mt-2">
                  {post.name}
                </H2>
                {post.tldr && (
                  <div className="prose mt-4 prose-xl prose-p:leading-snug prose-invert prose-p:text-white/80">
                    <PortableText value={post.tldr} />
                  </div>
                )}

                <div className="mt-4">
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-white/90 font-medium">
                        By{" "}
                        <Link
                          href="/"
                          className="border-b border-pink text-white">
                          {post?.author?.name}
                        </Link>
                      </p>
                      <div className="flex space-x-2 mt-2 text-sm md:flex-row md:items-center">
                        <DateTime
                          className="text-white/50"
                          date={post?.publishedAt || post._createdAt}
                        />
                        <span className="text-white/30">•</span>
                        <span className="text-white/50">
                          {post.estReadingTime || "5"} min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="mx-auto mt-14 mb-20 flex max-w-screen-xl flex-col gap-5 px-5 md:flex-row">
        <article className="flex-1">
          <Prose className="mx-auto">
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
        <aside className="sticky top-5 w-full self-start md:w-96">
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
