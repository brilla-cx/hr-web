import { cx } from "@/lib/utils";

export default function Pill({ color = "pink", active, count, ...props }) {
  const colors = {
    cyan: "text-cyan-600 border-cyan-600",
    sky: "text-sky-600 border-sky-600",
    blue: "text-blue-600 border-blue-600",
    indigo: "text-indigo-600 border-indigo-600",
    violet: "text-violet-600 border-violet-600",
    purple: "text-purple-600 border-purple-600",
    fuchsia: "text-fuchsia-600 border-fuchsia-600",
    pink: "text-pink border-pink",
    gray: "text-gray-600 border-gray-600",
  };
  const bgcolor = {
    cyan: "bg-cyan-50",
    sky: "bg-sky-50",
    blue: "bg-blue-50",
    indigo: "bg-indigo-50",
    violet: "bg-violet-50",
    purple: "bg-purple-50",
    fuchsia: "bg-fuchsia-600",
    pink: "bg-pink-50",
    gray: "bg-gray-50",
  };

  return (
    <button
      type="button"
      {...props}
      className={cx(
        "inline-flex gap-1 items-center border px-3 py-1 rounded",
        colors[color],
        active && bgcolor[color]
      )}>
      <span className="text-xs uppercase font-medium">{props.children}</span>
      {count && <span>{props.count}</span>}
    </button>
  );
}
