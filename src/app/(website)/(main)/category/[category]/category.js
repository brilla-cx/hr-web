// Import the necessary dependencies
import Head from "next/head";
import { notFound } from "next/navigation"; // Navigation control from Next.js

import Container from "@/components/container"; // Custom container component for page layout
import PageHeader from "@/components/sections/pageheader"; // Component for page header section

import PaginatedPosts from "./posts";
/**
 * Category Page Component
 * This component serves as the primary display for each individual category page.
 * Path: app/(website)/category/category.js
 *
 * Exported default function Category(props) uses props passed to it to display
 * category-specific content, including a unique list of posts within that category
 * and a custom subscription form tied to the category.
 */

// Define the Category component
// This component receives loading state, posts array, and category object as props
export default function Category(props) {
  // Destructure props into individual variables
  const { loading, searchParams, category } = props;

  // Extract the current category slug
  const slug = category?.slug?.current;

  // If page is not loading and there's no slug, return a 404 Not Found page
  if (!loading && !slug) {
    notFound();
  }

  // Return the main component JSX
  return (
    // Div with midnight background color
    <div className="bg-midnight text-gray-200">
      <Head>
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      </Head>
      <Container large className="border-l border-r border-neutral-200/10">
        <PageHeader
          title={`${category.name}`} // Dynamic title including category name
          leadText={`${category.name}? We’ve got the inside scoop. Join +338,000 pros in our community for insights on the daily. Sign up to our newsletter. We'll deliver fresh truths on ${category.name} right to your inbox, gratis.`}
          id={`${category.name}`} // Dynamic form ID including category name
          includeForm
        />
        <div className="mx-auto max-w-6xl px-4 text-gray-200">
          <PaginatedPosts searchParams={searchParams} slug={slug} />
        </div>
      </Container>
    </div>
  );
}
