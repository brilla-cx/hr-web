import Link from "next/link";

import { cx } from "@/lib/utils";

export const sizeClasses = {
  xs: "px-6 py-1 text-s",
  sm: "px-8 py-2 text-medium",
  md: "px-10 py-2 text-lg",
  lg: "px-12 py-4 text-xl",
};

export default function Button({
  children,
  className = "",
  size = "md",
  variant = "primary",
  href = "",
  ...rest
}) {
  const variantClasses = {
    primary: "bg-pink border-transparent text-gray-950 rounded",
    secondary: "bg-white border-black text-gray-950 rounded",
    alternate:
      "bg-pink border-transparent text-gray-950 rounded hover:shadow-amber-400",
  };

  const Tag = href ? Link : "button";
  return (
    <Tag
      {...(href && { href: href })}
      className={cx(
        "relative isolate z-10 inline-flex items-center justify-center  gap-1 whitespace-nowrap border-2 text-lg font-semibold uppercase leading-snug transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_rgb(41,37,36)] hover:after:absolute hover:after:-bottom-2 hover:after:-right-2 hover:after:left-0 hover:after:top-0 hover:after:-z-10",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...rest}>
      {children}
    </Tag>
  );
}
