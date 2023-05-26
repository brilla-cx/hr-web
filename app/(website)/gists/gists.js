// Import necessary modules and components
import { Suspense } from "react";

import Container from "@/components/container"; // Import Container component
import PageHeader from "@/components/ui/sections/pageheader"; // Import PageHeader component

import PaginatedPosts from "./posts"; // Import PaginatedPosts component

/**
 * Gists Page Component
 * This component is responsible for rendering the Gists page.
 * Path: app/(website)/gists/gists.js
 *
 * The Gists page serves as a blog-like page that displays a list of "gists" (short pieces of content).
 * These pieces of content are fetched and displayed using the PaginatedPosts component.
 *
 * The page is wrapped in a Suspense component from React to handle the loading state while fetching the gists.
 * If the data fetching is not complete, the Loading component is displayed as a fallback.
 *
 * The PageHeader component at the top of the page provides a title and introductory text for the page, as well as a subscription form.
 * The formId for the PageHeader component is set to "gist-subscribe".
 *
 * The layout and style of the page are controlled with a Container component and additional divs and Tailwind CSS classes.
 *
 * Data fetching behavior is controlled with the exported revalidate variable, set to 3600 seconds (1 hour).
 * This means the page data will be re-fetched at most once every hour.
 */
// Define the Gists page component
export default function Gists() {
  return (
    // Main div with midnight background color
    <div className="bg-midnight">
      {/* Container for the content, with border styles */}
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        {/* PageHeader component with title, lead text, includeForm, and formId */}
        <PageHeader
          title="Hey Rebekah gists"
          leadText="Our chronicles await. Who knew your brain could grow while popping
              a cold one? Settle in, pick a post and get better at what you do.
              Best yet, subscribe today and we'll throw in free delivery to your
              inbox."
          includeForm // Prop to include subscription form
          formId="gist-sub" // formId prop for PageHeader
        />
        {/* Div for centering content and setting max width */}
        <div className="mx-auto max-w-6xl px-4">
          {/* Suspense wrapper for loading state of paginated posts */}

          {/* PaginatedPosts component for displaying posts */}
          <PaginatedPosts />
        </div>
      </Container>
    </div>
  );
}

// Export revalidate for controlling data fetching behavior
export const revalidate = 3600;
