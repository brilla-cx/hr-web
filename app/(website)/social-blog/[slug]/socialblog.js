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
import Sidebar from "@/components/blog/sidebar";
import ViewAllPosts from "@/components/blog/viewallposts";
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
      <div className="relative isolate bg-gradient-to-r from-midnight via-indigo-950 to-pink-950 py-10">
        <Container
          large
          className="z-12 absolute inset-0 border-l border-r border-neutral-200 border-opacity-10"
        />
        <Container className="relative z-10 mt-6 flex flex-col items-center">
          <p className="inline-block text-xs font-semibold uppercase tracking-wider text-gray-400">
            Rebekah Radice's Blog
          </p>

          <H1
            as="h1"
            className="mt-4 text-center leading-tight text-gray-200 underline decoration-white/30 decoration-2 underline-offset-8 lg:text-7xl">
            {socialBlog.name}
          </H1>

          <div className="mt-4">
            <div className="flex items-start gap-3 text-center">
              <div>
                <p className="inline text-gray-400">
                  By{" "}
                  <Link
                    href={`/author/${socialBlog?.author?.slug?.current}`}
                    className={cx("text-gray-400", lightHoverStyles)}>
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
            subscribeText="Hey Rebekah will help you level up with AI. Join +320,000 professionals. Delivery is free."
            buttonText="LEVEL UP"
          />
        </aside>
      </div>
    </>
  );
}
