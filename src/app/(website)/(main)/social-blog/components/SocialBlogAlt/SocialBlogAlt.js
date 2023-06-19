/*
 * SocialBlogAlt Component
 *
 * This component represents a social blog post card and is responsible for rendering
 * the post's title, description, and author details.
 *
 * File: components/socialblogalt.js
 *
 * Description:
 * The "SocialBlogAlt" component is a reusable component used to display a social blog
 * post in a card format. It renders the post's title, description, and author details.
 *
 * Components:
 * - "PostLink": Renders a link to a post.
 * - "AuthorDetails": Renders the details of the post's author.
 *
 * Helper Functions:
 * - "renderPostTitle": Renders the post title based on the provided fontSize prop.
 * - "renderPostDescription": Renders the post description if available.
 * - "renderAuthorDetails": Renders the author details section if the author exists.
 *
 * Usage:
 * The "SocialBlogAlt" component can be used wherever a social blog post card needs to
 * be displayed. It provides flexibility in customizing the card's appearance and content.
 * Simply pass the necessary data and desired configurations as props to the component
 * to render the card.
 */

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { H3, H6 } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";
import { urlForImage } from "@/sanity/image";

function PostLink({ slug, children }) {
  return <Link href={`/social-blog/${slug}`}>{children}</Link>;
}

function AuthorDetails({ author }) {
  const authorImageProps = author?.image ? urlForImage(author.image) : null;

  return (
    <Link href={`/author/${author?.slug?.current}`}>
      <div className="flex items-center gap-3">
        <div className="relative h-5 w-5 flex-shrink-0">
          {authorImageProps && (
            <Image
              src={authorImageProps.src}
              alt={author.name}
              className="rounded-full object-cover"
              fill
              sizes="20px"
            />
          )}
        </div>
        <span className="truncate text-sm">{author?.name}</span>
      </div>
    </Link>
  );
}

export default function SocialBlogAlt({ post, minimal, fontSize, noDate }) {
  const renderPostTitle = () => {
    const { name, slug } = post;

    const titleClasses = cx(
      "text-gray-200",
      fontSize === "large" && "mt-3 line-clamp-2",
      !fontSize && "mt-1 line-clamp-2",
      hoverStyles
    );

    return (
      <PostLink slug={slug.current}>
        {fontSize === "large" ? (
          <H3 as="h2" className={titleClasses}>
            <span className={`inline ${titleClasses}`}>{name}</span>
          </H3>
        ) : (
          <H6 as="h2" className={titleClasses}>
            <span className={`inline ${titleClasses}`}>{name}</span>
          </H6>
        )}
      </PostLink>
    );
  };

  const renderPostDescription = () => {
    const { yoastDescription, slug } = post;

    if (!yoastDescription) return null;

    return (
      <p className="mt-4 line-clamp-3  text-gray-400">
        <PostLink slug={slug.current}>{yoastDescription}</PostLink>
      </p>
    );
  };

  const renderAuthorDetails = () => {
    const { author } = post;

    if (!author) return null;

    return (
      <div className="mt-6 flex items-center justify-between text-gray-300">
        <AuthorDetails author={author} />
      </div>
    );
  };

  return (
    <div
      className={cx(
        "group cursor-pointer",
        minimal && "grid gap-10 md:grid-cols-2",
        "rounded border border-neutral-200/10 bg-slate-900 px-6 py-6 transition-all duration-300 hover:scale-105 hover:transform hover:bg-slate-800"
      )}>
      <div className={cx(minimal && "flex items-center")}>
        {renderPostTitle()}
        {renderPostDescription()}
        {renderAuthorDetails()}
      </div>
    </div>
  );
}
