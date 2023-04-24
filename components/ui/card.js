import { cx } from "@/lib/utils";

export default function Card({ children, className = "", ...rest }) {
  return (
    <div
      className={cx(
        className,
        "isolate rounded-lg overflow-hidden  border-2 border-black relative transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_rgb(41,37,36)] hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:-bottom-2 hover:after:-right-2 hover:after:-z-10"
      )}
      {...rest}>
      {children}
    </div>
  );
}
