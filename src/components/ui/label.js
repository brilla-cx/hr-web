import { cx } from "@/lib/utils";

export default function Label(props) {
  const color = {
    cyan: "text-cyan-300",
    sky: "text-sky-300",
    blue: "text-blue-300",
    indigo: "text-indigo-300",
    violet: "text-violet-300",
    purple: "text-purple-300",
    fuchsia: "text-fuchsia-300",
    pink: "text-pink-300",
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
        "inline-block text-xs font-semibold uppercase tracking-wider",
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
