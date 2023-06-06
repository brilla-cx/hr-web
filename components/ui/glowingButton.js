// Import necessary libraries and components
import { sizeClasses } from "components/ui/button";
import Link from "next/link";
import PropTypes from "prop-types";

import { cx } from "@/lib/utils";

// Component for creating the gradient background of the button
// As per Ambreen, we're using a vibrant gradient for an attractive button appearance. Sam thinks this is disco but, it looks ok.
const GradientBackground = () => {
  // Dynamic class names for gradient background
  const gradientBackgroundClasses = cx(
    "absolute -inset-px rounded bg-gradient-to-r from-[#ff00fe] to-amber-600 opacity-70 blur-sm transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"
  );

  // Render a div with the gradient background
  return <div className={gradientBackgroundClasses} aria-hidden="true" />;
};

// Component for the content of the button
const ButtonContent = ({ size, children }) => {
  // Dynamic class names for button content
  const buttonContentClasses = cx(
    `relative flex items-center justify-center font-display font-semibold uppercase leading-snug ${sizeClasses[size]} whitespace-nowrap rounded bg-slate-900 text-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2`
  );

  // Render the button content wrapped in a div
  return (
    <div className="w-full">
      <div className={buttonContentClasses} role="button">
        <span className="inline-block text-center">{children}</span>
      </div>
    </div>
  );
};

// PropTypes for ButtonContent
ButtonContent.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  children: PropTypes.node.isRequired,
};

// Main component for the glowing button
const GlowingButton = ({
  variant = null,
  href = "",
  size = "md",
  children,
  autoWidth,
  ...props
}) => {
  // Wrapper is a button or a link based on the variant prop
  const Wrapper = href ? Link : "button";
  // Props for the Wrapper component
  const wrapperProps = href ? { href } : { type: "submit" };

  // Render the button. The w-full in the Wrapper is what makes the button full width here, which may be counterintuitive but it works.
  return (
    <div className="flex items-center justify-center bg-black">
      <div className={cx("group relative inline-flex", !autoWidth && "w-full")}>
        <GradientBackground />
        <Wrapper
          className={cx(!autoWidth && "w-full")}
          {...wrapperProps}
          {...props}>
          <ButtonContent size={size}>{children}</ButtonContent>
        </Wrapper>
      </div>
    </div>
  );
};

// PropTypes for GlowingButton
GlowingButton.propTypes = {
  variant: PropTypes.oneOf(["link", "subscribe"]),
  href: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  children: PropTypes.node.isRequired,
};

export default GlowingButton;
