import { cx } from "@/lib/utils";

export default function Label(props) {
  const color = {
    green: "text-emerald-700",
    blue: "text-blue-600",
    orange: "text-orange-700",
    purple: "text-purple-600",
    pink: "text-pink",
    white: "text-white",
  };
  const bgcolor = {
    green: "bg-emerald-50",
    blue: "bg-blue-50",
    orange: "bg-orange-50",
    purple: "bg-purple-50",
    pink: "bg-pink-50",
  };

  return (
    <span
      className={cx(
        "inline-block text-xs tracking-wider uppercase px-2 py-1 font-bold",
        color[props.color] || color["pink"],
        props.pill ? bgcolor[props.color] || bgcolor["pink"] : "",
        props.pill && "rounded-full",
        props.className
      )}>
      {props.children}
    </span>
  );
}
