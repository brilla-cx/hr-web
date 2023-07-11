/**
 * Social Blog Page
 *
 * This page component is responsible for rendering the social blog single post. It fetches
 * the social blog by slug and retrieves the top categories. If the page is in preview
 * mode, it renders the lazy-loaded SocialBlogPreview component; otherwise, it renders
 * the SocialBlog component.
 */
import { draftMode } from "next/headers";

import PreviewProvider from "@/components/shared/PreviewProvider/PreviewProvider";
import { SITE_URL } from "@/lib/constants";
import {
  getAllSocialBlogs,
  getAllSocialBlogSlugs,
  getSocialBlogBySlug,
} from "@/sanity/client";

import SocialBlogPreview from "./components/Preview/SocialBlogPreview";
import SocialBlog from "./components/SocialBlog/SocialBlog";

export async function generateStaticParams() {
  const slugs = await getAllSocialBlogSlugs();
  const socialBlogs = await getAllSocialBlogs();

  const featuredSlugs = socialBlogs
    .filter((item) => item.featured)
    .map((item) => ({ slug: item.slug.current }));

  const combinedSlugs = [...new Set(slugs.concat(featuredSlugs))];
  return combinedSlugs;
}

// Indicates that dynamic parameters are used for the route
export const dynamicParams = true;

/**
 * Generate metadata for the social blog page
 *
 * This async function takes the route parameters and fetches the social blog by slug.
 * It extracts the title and description from the social blog's SEO fields or Yoast fields,
 * if available. The generated metadata includes the title, description, and open graph properties.
 *
 * @param {Object} params - Route parameters
 * @returns {Object} Generated metadata
 */
export async function generateMetadata({ params }) {
  const post = await getSocialBlogBySlug(params.slug);
  const seoTitle = post?.yoastTitle;
  const seoMetaDescription = post?.yoastDescription;

  const postUrl = `${SITE_URL}/social-blog/${params.slug}`;

  return {
    title: post.seo?.title || seoTitle,
    description: post.seo?.description || seoMetaDescription,
    openGraph: {
      title: post.seo?.title || seoTitle,
      description: post.seo?.description || seoMetaDescription,
      url: postUrl,
    },
    twitter: {
      title: post.seo?.title || seoTitle,
      description: post.seo?.description || seoMetaDescription,
    },
  };
}

/**
 * Social Blog Page Component
 *
 * This async function takes the route parameters and fetches the social blog by slug.
 * It also retrieves the top categories. If the page is in preview mode, it renders
 * the lazy-loaded SocialBlogPreview component; otherwise, it renders the SocialBlog component.
 *
 * @param {Object} params - Route parameters
 * @returns {JSX.Element} Social Blog page component
 */
export default async function SocialBlogPage({ params }) {
  const socialBlog = await getSocialBlogBySlug(params.slug);

  const isInPreview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_WRITE_TOKEN }
    : undefined;

  if (isInPreview) {
    return (
      <PreviewProvider token={isInPreview.token}>
        <SocialBlogPreview data={socialBlog} slug={params.slug} />
      </PreviewProvider>
    );
  }

  return <SocialBlog socialBlog={socialBlog} />;
}
