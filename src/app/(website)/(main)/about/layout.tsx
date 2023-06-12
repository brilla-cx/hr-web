import React from "react";

export function generateMetadata() {
  return {
    title: "About | Knowledge should be free. Experience, priceless.",
    description:
      "Freelancers need better access to knowledge, skills, and tools to build thriving careers. That's our focus.",
    twitter: {
      card: "summary_large_image", // type of card you want to use. It could be "summary", "summary_large_image", "app", or "player"
      site: "rebekahradice", // your Twitter handle
      title: "Hey Rebekah | Like Morning Brew for freelancers", // the title of the content
      description: "Hey Rebekah is a free daily newsletter for freelancers...", // a description of the content
      creator: "rebekahradice",
      image: "public/og.png",
    },
  };
}

function Layout({ children }) {
  return <div>{children}</div>;
}

export default Layout;
