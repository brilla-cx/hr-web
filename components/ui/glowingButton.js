// Import necessary libraries and components
import cx from "classnames";
import { sizeClasses } from "components/ui/button";
import Link from "next/link";
import PropTypes from "prop-types";

// Component for creating the gradient background of the button
// As per Ambreen, we're using a vibrant gradient for an attractive button appearance. Sam thinks this is disco but, it looks ok.
const GradientBackground = () => {
  // Dynamic class names for gradient background
  const gradientBackgroundClasses = cx(
    "absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#ff00fe] to-purple-800 blur-sm rounded group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
  );

  // Render a div with the gradient background
  return <div className={gradientBackgroundClasses} aria-hidden="true" />;
};

// Component for the content of the button
const ButtonContent = ({ size, children }) => {
  // Dynamic class names for button content
  const buttonContentClasses = cx(
    `relative flex items-center justify-center leading-snug uppercase font-display font-semibold ${sizeClasses[size]} text-gray-200 transition-all duration-200 bg-slate-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 whitespace-nowrap`
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
const GlowingButton = ({ variant, href, size = "md", children }) => {
  // Wrapper is a button or a link based on the variant prop
  const Wrapper = variant === "subscribe" ? "button" : Link;
  // Props for the Wrapper component
  const wrapperProps = variant === "subscribe" ? { type: "submit" } : { href };

  // Render the button. The w-full in the Wrapper is what makes the button full width here, which may be counterintuitive but it works.
  return (
    <div className="bg-black flex justify-center items-center">
      <div className="relative inline-flex w-full group">
        <GradientBackground />
        <Wrapper className="w-full" {...wrapperProps}>
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
