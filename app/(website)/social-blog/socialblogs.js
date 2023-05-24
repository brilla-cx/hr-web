/**
 * Social Blog Page Component
 *
 * This component is responsible for rendering the Social Blog page, located at app/(website)/social-blog/socialblogs.js.
 *
 * Description:
 * The Social Blog page serves as a blog-like page that displays a list of "Social Blogs" (short pieces of content).
 * The content is fetched and displayed using the PaginatedPosts component.
 *
 * The page is wrapped in a Suspense component from React to handle the loading state while fetching the Social Blogs.
 * If the data fetching is not complete, the Loading component is displayed as a fallback.
 *
 * The layout and style of the page are controlled with a Container component and additional divs and Tailwind CSS classes.
 *
 * The PageHeader component at the top of the page provides a title and introductory text for the page, as well as a subscription form.
 * The formId for the PageHeader component is set to "socialblog-subscribe".
 *
 * Data fetching behavior is controlled with the exported revalidate variable, set to 3600 seconds (1 hour).
 * This means the page data will be re-fetched at most once every hour.
 *
 * Components:
 * - Loading: A fallback component displayed while fetching the data.
 * - Container: Controls the width and adds borders to the page.
 * - PageHeader: Renders the title, introductory text, and subscription form at the top of the page.
 * - Suspense: Wraps the PaginatedPosts component to handle the loading state.
 * - PaginatedPosts: Fetches and displays the list of social blog posts.
 *
 * Usage:
 * The SocialBlogs component is used to render the Social Blog page. Place it at the desired route
 * within the app/(website)/social-blog folder. Customize the PageHeader, styling, and data fetching
 * behavior as needed by modifying the component and the exported revalidate variable.
 *
 * Export:
 * - revalidate: Controls the data fetching behavior. Set the revalidation time in seconds.
 *   The page data will be re-fetched at most once every specified duration.
 */
"use client";

import { Suspense } from "react";

import Loading from "@/components/blog/loading";
import Container from "@/components/container";
import PageHeader from "@/components/ui/sections/pageheader";

import PaginatedPosts from "./posts";

export default function SocialBlogs() {
  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <PageHeader
          title="Social Media Blog"
          leadText="Since launching in 2004, over 24 million unique visitors have read my posts, and no, it's not just my mom on a refresh marathon."
          includeForm
          formId="socialblog-subscribe"
        />
        <div className="mx-auto px-4 max-w-6xl">
          <Suspense fallback={<Loading />}>
            <PaginatedPosts />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

// Export revalidate for controlling data fetching behavior
export const revalidate = 3600;
