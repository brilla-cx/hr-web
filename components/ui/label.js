import { cx } from "@/lib/utils";

export default function Label(props) {
  const color = {
    cyan: "text-cyan-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    indigo: "text-indigo-600",
    violet: "text-violet-600",
    gray: "text-gray-300",
  };
  const bgcolor = {
    cyan: "bg-cyan-50",
    sky: "bg-sky-50",
    blue: "bg-blue-50",
    indigo: "bg-indigo-50",
    violet: "bg-violet-50",
  };

  return (
    <span
      className={cx(
        "inline-block text-xs tracking-wider uppercase font-semibold",
        color[props.color] || color.violet,
        props.pill ? bgcolor[props.color] || bgcolor.violet : "",
        props.pill && "rounded-full",
        !props.nomargin && "px-1 py-1",
        props.className
      )}>
      {props.children}
    </span>
  );
}
