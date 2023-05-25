import cx from "classnames";
import Link from "next/link";
import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

// ViewAllPosts component
// Props:
//   - href: the URL for the link
//   - buttonText: the text to display in the button
//   - direction: 'left' or 'right' to indicate the direction of the caret; if not provided, no caret will be displayed
//   - variant: 'light' or 'dark' to apply different styles; if not provided, defaults to 'light'
const ViewAllPosts = ({ href, buttonText, direction, variant = "light" }) => {
  // Define the styles for light and dark variants
  const lightStyles =
    "uppercase text-med font-display font-semibold text-gray-600 hover:text-gray-950 hover:bg-gray-100";
  const darkStyles =
    "uppercase text-med font-display font-semibold text-gray-400 hover:text-gray-200 hover:font-bold hover:bg-slate-900";
  const caretStyles =
    variant === "dark"
      ? "text-gray-400 hover:text-gray-200"
      : "text-gray-600 hover:text-gray-950";

  return (
    <div className="mb-7 mt-8 flex justify-center">
      <Link
        href={href}
        className={cx(
          "rounded-lg px-5 py-2 uppercase text-med font-bold",
          variant === "dark" ? darkStyles : lightStyles,
          "flex items-center justify-center"
        )}
        aria-label={`View ${buttonText}`}>
        {direction === "left" && (
          <FaCaretLeft className={`mr-2 ${caretStyles}`} />
        )}
        {buttonText}
        {direction === "right" && (
          <FaCaretRight className={`ml-2 ${caretStyles}`} />
        )}
      </Link>
    </div>
  );
};

export default ViewAllPosts;
