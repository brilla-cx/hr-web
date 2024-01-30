import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container/Container";
import AuthorCard from "@/components/shared/post/AuthorCard/AuthorCard";
import { PortableText } from "@/components/shared/post/PortableText/PortableText";
import Sidebar from "@/components/shared/post/Sidebar/Sidebar";
import SocialShare from "@/components/shared/post/SocialShare/SocialShare";
import ViewAllPosts from "@/components/shared/post/ViewAllPosts/ViewAllPosts";
import { H1, Prose } from "@/components/ui";
import DateTime from "@/components/ui/time";
import lightHoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

export default function SocialBlog(props) {
  const { socialBlog } = props;

  if (!socialBlog?.slug) {
    notFound();
  }

  return (
    <>
      <div className="relative isolate bg-gradient-to-r from-midnight via-indigo-950 to-pink-950 py-10">
        <Container
          large
          className="z-12 absolute inset-0 border-l border-r border-neutral-200/10"
        />
        <Container className="relative z-10 mt-6 flex flex-col items-center">
          <p className="inline-block text-xs font-semibold uppercase tracking-wider text-gray-300">
            Rebekah Radice&apos;s Blog
          </p>

          <H1
            as="h1"
            className="mt-4 text-center leading-tight text-gray-200 underline decoration-white/30 decoration-2 underline-offset-8 lg:text-7xl">
            {socialBlog.name}
          </H1>

          <div className="mt-4">
            <div className="flex items-start gap-3 text-center">
              <div>
                <p className="inline font-semibold text-gray-300">
                  By{" "}
                  <Link
                    href={`/author/${socialBlog?.author?.slug?.current}`}
                    className={cx(
                      "font-semibold text-gray-300",
                      lightHoverStyles,
                    )}>
                    {socialBlog?.author?.name}
                  </Link>
                </p>
                <div className="mt-4 flex space-x-2 text-sm md:flex-row md:items-center">
                  <DateTime
                    className="text-xs text-gray-200"
                    date={socialBlog?.publishedAt || socialBlog._createdAt}
                  />
                  <span className="text-xs text-gray-200">•</span>
                  <span className="text-xs text-gray-200">
                    {socialBlog.estReadingTime || "5"} min read
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <SocialShare
              title={socialBlog?.name}
              url={`https://heyrebekah.com/social-blog/${socialBlog?.slug?.current}`}
            />
          </div>
        </Container>
      </div>

      <div className="mx-auto mb-20 mt-14 flex max-w-screen-xl flex-col gap-5 px-5 md:flex-row">
        <article className="flex-1 ">
          <Prose className="prose mx-auto max-w-prose">
            {socialBlog.content && <PortableText value={socialBlog.content} />}
          </Prose>
          <ViewAllPosts
            href="/social-blog"
            buttonText="View all posts"
            direction="left"
            variant="light"
          />
          {socialBlog.author && <AuthorCard author={socialBlog.author} />}
        </article>
        <aside className="sticky top-24 mr-5 w-full self-start md:w-64">
          <Sidebar
            subscribeTitle="Worried about AI?"
            subscribeText="Hey Rebekah will help you level up with AI. Join +338,000 professionals. Delivery is free."
            buttonText="LEVEL UP"
          />
        </aside>
      </div>
    </>
  );
}
