import { cx } from "@/lib/utils";
import { FaChevronDown } from "react-icons/fa";

const commonClasses =
  "border-2 border-black rounded w-full placeholder:text-zinc-400 focus:border-pink focus:ring-pink";

const sizeClasses = {
  sm: "px-2 py-2",
  md: "px-3 py-3",
};

export function Input({
  placeholder,
  name,
  type = "text",
  size = "md",
  className = "",
  ...rest
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={cx(className, sizeClasses[size], commonClasses, "")}
      {...rest}
    />
  );
}

export function Select({ children, size = "md", ...rest }) {
  return (
    <div className="relative">
      <FaChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      <select className={cx(commonClasses, sizeClasses[size], "")} {...rest}>
        {children}
      </select>
    </div>
  );
}

export function Textarea({ placeholder, size = "md" }) {
  return (
    <textarea
      placeholder={placeholder}
      className={cx(commonClasses, sizeClasses[size], "")}
    />
  );
}
