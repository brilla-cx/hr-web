// Import necessary libraries and components
import Link from "next/link";
import React from "react";

import { sizeClasses } from "@/components/ui/button";
import { cx } from "@/lib/utils";

// Component for creating the gradient background of the button
// As per Ambreen, we're using a vibrant gradient for an attractive button appearance. Sam thinks this is disco but, it looks ok.
const GradientBackground: React.FC = () => {
  // Dynamic class names for gradient background
  const gradientBackgroundClasses = cx(
    "absolute -inset-px rounded bg-gradient-to-r from-[#ff00fe] to-amber-600 opacity-70 blur-sm transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"
  );

  // Render a div with the gradient background
  return <div className={gradientBackgroundClasses} aria-hidden="true" />;
};

interface ButtonContentProps {
  size: "xs" | "sm" | "md" | "lg";
  children: React.ReactNode;
}
// Component for the content of the button
const ButtonContent: React.FC<ButtonContentProps> = ({ size, children }) => {
  // Dynamic class names for button content
  const buttonContentClasses = cx(
    `relative flex items-center justify-center font-display font-semibold uppercase leading-snug ${sizeClasses[size]} whitespace-nowrap rounded animate-shimmer bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-[length:400%_100%] text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2`
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

// Main component for the glowing button
interface GlowingButtonProps {
  variant?: "link" | "subscribe" | null;
  href?: string;
  form?: string;
  type?: string;
  size?: "xs" | "sm" | "md" | "lg";
  children: React.ReactNode;
  autoWidth?: boolean;
  id?: string;
}

// Main component for the glowing button
const GlowingButton: React.FC<GlowingButtonProps> = ({
  variant = null,
  href = "",
  size = "md",
  children,
  autoWidth,
  ...props
}) => {
  // Wrapper is a button or a link based on the variant prop
  const Wrapper: any = href ? Link : "button";
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

export default GlowingButton;
