import Link from "next/link";

import { cx } from "@/lib/utils";

// interface ButtonProps {
//   children: any;
//   className?: string;
//   size?: "sm" | "md" | "lg";
//   variant?: "primary" | "secondary" | "outline";
// }

export default function Button({
  children,
  className = "",
  size = "md",
  variant = "primary",
  href = "",
  ...rest
}) {
  const sizeClasses = {
    xs: "px-6 py-1 text-xs",
    sm: "px-8 py-2 text-sm",
    md: "px-10 py-2 text-base",
    lg: "px-12 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-pink border-transparent text-black rounded",
    secondary: "bg-white border-black text-black rounded",
    alternate:
      "bg-pink border-transparent text-black rounded hover:shadow-yellow",
  };

  const Tag = href ? Link : "button";
  return (
    <Tag
      {...(href && { href: href })}
      className={cx(
        "isolate inline-flex gap-1 items-center justify-center leading-snug  border-2 relative text-lg font-semibold transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_rgb(41,37,36)] hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:-bottom-2 hover:after:-right-2 hover:after:-z-10 z-10 uppercase whitespace-nowrap",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...rest}>
      {children}
    </Tag>
  );
}
