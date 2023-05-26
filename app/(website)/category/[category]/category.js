// Import the necessary dependencies
import { notFound } from "next/navigation"; // Navigation control from Next.js
import { Suspense } from "react";

import Container from "@/components/container"; // Custom container component for page layout
import PostAlt from "@/components/postalt"; // Component to display individual posts
import PageHeader from "@/components/ui/sections/pageheader"; // Component for page header section

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
  const { loading, posts, category } = props;

  // Extract the current category slug
  const slug = category?.slug?.current;

  // If page is not loading and there's no slug, return a 404 Not Found page
  if (!loading && !slug) {
    notFound();
  }

  // Return the main component JSX
  return (
    // Div with midnight background color
    <div className="bg-midnight">
      {/* Container component for holding the content */}
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        {/* PageHeader component with title, lead text, includeForm, and formId */}
        <PageHeader
          title={`${category.name}`} // Dynamic title including category name
          leadText={`${category.name.trim()}? We’ve got the inside scoop. Join +320,000 pros in our community for insights on the daily. Sign up to our newsletter. We'll deliver fresh truths on ${category.name.trim()} right to your inbox, gratis.`}
          includeForm // Prop to include subscription form
          formId={`${category.name}-subscribe`} // Dynamic form ID including category name
        />
        {/* Grid layout div for holding PostAlt components */}
        <Suspense fallback={<p>Loading feed...</p>}>
          <div className="mb-8 mt-16 grid gap-10 px-4 sm:px-8 md:grid-cols-3 lg:gap-10 lg:px-16 xl:grid-cols-4 ">
            {/* Map through posts array, and for each post, render a PostAlt component */}
            {posts.map((post) => (
              <PostAlt
                key={post._id} // Unique key prop for React list rendering
                post={post} // Pass entire post object as a prop
                aspect="landscape" // Aspect ratio prop
                hideCategory // Prop to hide category
              />
            ))}
          </div>
        </Suspense>
      </Container>
    </div>
  );
}
