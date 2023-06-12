import { cx } from "@/lib/utils";

export default function Prose({ children, className = "" }) {
  return (
    <div
      className={cx(
        "prose prose-headings:font-semibold prose-a:text-gray-700 prose-li:marker:text-pink prose-th:text-pink",
        className
      )}>
      {children}
    </div>
  );
}
