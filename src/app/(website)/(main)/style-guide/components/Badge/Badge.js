import { cx } from "@/lib/utils";

export default function Badge({ variant = "primary", size = "md", children }) {
  const sizeClass = {
    sm: "text-xs py-1 px-2",
    md: "text-sm py-1 px-3",
    lg: "text-base py-1.5 px-3",
  };

  const variantClass = {
    primary: "bg-pink text-white",
    secondary: "bg-pink/20 text-black",
    inverted: "bg-fuchsia-900 text-white rounded-full",
  };

  return (
    <span
      className={cx(
        variantClass[variant],
        sizeClass[size],
        "inline-flex font-bold "
      )}>
      {children}
    </span>
  );
}
