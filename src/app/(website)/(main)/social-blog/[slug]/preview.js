/**
 * SocialBlogPreview Component
 *
 * This component is responsible for rendering a preview of a social blog post on the Hey Rebekah's Web App.
 * It is located at app/(website)/social-blog/[slug]/preview.js and is used to display a preview of a specific social blog post during the Sanity CMS preview mode.
 *
 * Description:
 * The SocialBlogPreview component uses the usePreview hook from "@/sanity/preview" to fetch a preview version of the social blog post based on the provided slug.
 * It then renders the SocialBlog component to display the preview content of the social blog post, including its title, author details, publication date, estimated reading time, and the actual blog content.
 * The component also requires an array of categories and passes it as a prop to the SocialBlog component.
 *
 * Components:
 * - SocialBlog: Renders the preview content of the social blog post.
 *
 * Props:
 * - categories: An array of categories associated with the social blog post. This prop is required for the SocialBlog component.
 * - slug: The slug of the social blog post for which the preview is being displayed. This prop is used to fetch the preview content using the usePreview hook.
 *
 * Usage:
 * To use the SocialBlogPreview component, import it and pass the required props when rendering it.
 * Example usage: <SocialBlogPreview categories={categoriesData} slug="sample-slug" />
 *
 * Note:
 * - This component assumes the existence of the necessary data and the use of the Sanity CMS preview mode.
 * - Make sure to provide the correct categories array and slug when using this component.
 * - Ensure that the singleSocialBlogQuery is defined in the "@/sanity/groq" module to fetch a single social blog document.
 */

"use client";

import { singlesocialblogquery } from "@/sanity/groq";
import { usePreview } from "@/sanity/preview";

import SocialBlog from "./socialblog";

export default function SocialBlogPreview({ slug }) {
  const socialBlog = usePreview(null, singlesocialblogquery, {
    slug: slug,
  });

  return <SocialBlog socialBlog={socialBlog} />;
}
