import SocialBlogs from "./socialblogs";

export function generateMetadata() {
  return {
    title: "Rebekah Radice's Blog",
    description:
      "Rebekah Radice is a social media speaker, consultant, and trainer in Los Angeles, CA. Rebekah helps growth-driven leaders build brand awareness and authority. Find the new home for her blog here.",
  };
}

export default function SocialBlogsPage() {
  return <SocialBlogs />;
}

export const revalidate = 86400;
