import { cx } from "@/lib/utils";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container px-4 lg:px-8 mx-auto xl:px-5",
        props.large ? " max-w-screen-xl" : "max-w-screen-lg",
        !props.alt && "py-5 lg:py-8",
        props.className
      )}>
      {props.children}
    </div>
  );
}
