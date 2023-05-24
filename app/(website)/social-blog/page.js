/**
 * SocialBlogsPage Component
 *
 * This component represents the Social Blogs page of the Hey Rebekah's Web App.
 * The component is located at app/(website)/social-blog/page.js.
 *
 * Description:
 * The SocialBlogsPage component serves as the entry point for rendering the Social Blogs page.
 * It simply renders the SocialBlogs component, which is responsible for displaying the list of social blogs.
 *
 * Components:
 * - SocialBlogs: Renders the list of social blogs on the page.
 *
 * Usage:
 * The SocialBlogsPage component is used in the routing configuration or parent component to render the Social Blogs page.
 * Simply include the <SocialBlogsPage /> component wherever the Social Blogs page should be displayed.
 * Adjust the component and its associated styles as needed.
 */

import SocialBlogs from "./socialblogs";

export default function SocialBlogsPage() {
  return <SocialBlogs />;
}

// export const revalidate = 60;
