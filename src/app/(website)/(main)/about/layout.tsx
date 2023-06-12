import React from "react";

export function generateMetadata() {
  return {
    title: "What is Hey Rebekah? | #1 Newsletter for Freelancing",
    description:
      "Wondering WTF is Hey Rebekah? LOL, no worries. It's a free daily newsletter produced by Rebekah Radice. It's like Morning Brew for freelancers. 💪🏽",
  };
}

function Layout({ children }) {
  return <div>{children}</div>;
}

export default Layout;
