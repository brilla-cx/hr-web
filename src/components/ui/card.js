import { cx } from "@/lib/utils";

export default function Card({ children, className = "", ...rest }) {
  return (
    <div
      className={cx(
        className,
        "relative isolate overflow-hidden  rounded-lg border-2 border-black transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_rgb(255,207,51)] hover:after:absolute hover:after:-bottom-2 hover:after:-right-2 hover:after:left-0 hover:after:top-0 hover:after:-z-10"
      )}
      {...rest}>
      {children}
    </div>
  );
}
