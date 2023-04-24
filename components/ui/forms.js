import { cx } from "@/lib/utils";
import { FaChevronDown } from "react-icons/fa";

const commonClasses =
  "border-2 border-black rounded w-full px-3 py-3 placeholder:text-zinc-400 focus:border-pink focus:ring-pink";

export function Input({ placeholder, name, type = "text", ...rest }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={cx(commonClasses, "")}
      {...rest}
    />
  );
}

export function Select({ children, ...rest }) {
  return (
    <div className="relative">
      <FaChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      <select className={cx(commonClasses, "")} {...rest}>
        {children}
      </select>
    </div>
  );
}

export function Textarea({ placeholder }) {
  return (
    <textarea placeholder={placeholder} className={cx(commonClasses, "")} />
  );
}
