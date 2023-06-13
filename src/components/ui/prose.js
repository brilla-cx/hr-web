import { cx } from "@/lib/utils";

export default function Prose({ children, className = "" }) {
  return (
    <div
      className={cx(
        "prose prose-headings:font-bold prose-a:text-gray-700 hover:prose-a:text-gray-950 prose-li:marker:text-pink prose-th:text-pink",
        className
      )}>
      {children}
    </div>
  );
}
