import { cx } from "@/lib/utils";

export default function Prose({ children, className = "" }) {
  return (
    <div
      className={cx(
        "prose prose-headings:font-display prose-a:text-pink prose-li:marker:text-pink prose-th:text-pink",
        className
      )}
    >
      {children}
    </div>
  );
}
