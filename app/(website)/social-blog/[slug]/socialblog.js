/**
 * SocialBlog Component
 *
 * This component represents an individual social blog post on the Hey Rebekah's Web App.
 * It is located at app/(website)/social-blog/[slug]/socialblog.js and is used to render the details of a specific social blog post.
 *
 * Description:
 * The SocialBlog component receives the socialBlog object as a prop and renders the content of the social blog post, including its title, author details, publication date, estimated reading time, and the actual blog content.
 * The component also includes a social sharing section for sharing the post on social media platforms.
 * The layout and style of the component are controlled using the Container, H1, Prose, and other components from "@/components" module, as well as Tailwind CSS classes.
 *
 * Components:
 * - Container: Provides a container for the entire social blog post content.
 * - H1: Renders the title of the social blog post.
 * - Prose: Renders the blog content in a responsive and readable format.
 * - DateTime: Displays the publication date of the social blog post.
 * - SocialShare: Allows users to share the social blog post on various social media platforms.
 * - AuthorCard: Displays details about the author of the social blog post.
 *
 * Props:
 * - socialBlog: The social blog object containing information about the post, including its title, content, author, publication date, and other metadata.
 *
 * Usage:
 * To use the SocialBlog component, import it and pass the socialBlog object as a prop when rendering it.
 * Example usage: <SocialBlog socialBlog={socialBlogData} />
 *
 * Note:
 * This component assumes the existence of the necessary data and does not handle error scenarios or loading states.
 * Make sure to provide the correct socialBlog object with all the required data when using this component.
 */

import Link from "next/link";
import { notFound } from "next/navigation";

import AuthorCard from "@/components/blog/authorCard";
import { PortableText } from "@/components/blog/portabletext";
import SocialShare from "@/components/blog/share";
import Container from "@/components/container";
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
      <div className="relative isolate py-10 bg-gradient-to-r from-midnight via-slate-950 to-indigo-950">
        <Container
          large
          className="absolute inset-0 border-l border-r border-neutral-200 border-opacity-10 z-12"
        />
        <Container className="relative z-10 flex flex-col items-center mt-6">
          <p className="inline-block text-xs tracking-wider uppercase font-semibold text-gray-400">
            Rebekah Radice's Blog
          </p>

          <H1
            as="h1"
            className="text-gray-200 leading-tight underline decoration-2 decoration-white/30 underline-offset-8 mt-4 text-center lg:text-7xl">
            {socialBlog.name}
          </H1>

          <div className="mt-4">
            <div className="flex items-start gap-3 text-center">
              <div>
                <p className="text-gray-400 inline">
                  By{" "}
                  <Link
                    href={`/author/${socialBlog?.author?.slug?.current}`}
                    className={cx("text-gray-400", lightHoverStyles)}>
                    {socialBlog?.author?.name}
                  </Link>
                </p>
                <div className="flex space-x-2 mt-4 text-sm md:flex-row md:items-center">
                  <DateTime
                    className="text-gray-200 text-xs"
                    date={socialBlog?.publishedAt || socialBlog._createdAt}
                  />
                  <span className="text-gray-200 text-xs">•</span>
                  <span className="text-gray-200 text-xs">
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

      <div className="mx-auto mt-14 mb-20 flex max-w-screen-xl flex-col gap-5 px-5 md:flex-row">
        <article className="flex-1 ">
          <Prose className="prose mx-auto max-w-prose">
            {socialBlog.content && <PortableText value={socialBlog.content} />}
          </Prose>
          <div className="mb-7 mt-8 flex justify-center">
            <Link
              href="/social-blog"
              className={cx(
                "rounded-lg px-5 py-2 uppercase text-med font-bold text-gray-600 hover:text-gray-950 hover:font-bold",
                lightHoverStyles
              )}
              aria-label="View all Posts">
              ← View all Postss
            </Link>
          </div>
          {socialBlog.author && <AuthorCard author={socialBlog.author} />}
        </article>
      </div>
    </>
  );
}
