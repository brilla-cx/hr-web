import { FaChevronDown } from "react-icons/fa";

import { cx } from "@/lib/utils";

const commonClasses =
  "border-2 border-black rounded w-full placeholder:text-zinc-400 focus:border-pink focus:ring-pink";

const sizeClasses = {
  sm: "px-2 py-2",
  md: "px-3 py-3",
};

export function Input({
  placeholder,
  name,
  errors = {},
  validations,
  register,
  type = "text",
  size = "md",
  className = "",
  ...rest
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        {...(register && register(name, validations))}
        className={cx(className, sizeClasses[size], commonClasses, "")}
        {...rest}
      />
      {errors[name] && (
        <div className="mt-1 text-red-600">
          <small>{errors[name].message}</small>
        </div>
      )}
    </div>
  );
}

export function Select({ children, size = "md", ...rest }) {
  return (
    <div className="relative">
      <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
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

export function Checkbox({
  name,
  errors = {},
  validations,
  register,
  size = "md",
  className = "",
  label,
  ...rest
}) {
  return (
    <label className="inline-flex w-full items-center gap-2 rounded border border-gray-600 px-2 py-1 hover:bg-gray-800">
      <input
        type="checkbox"
        name={name}
        {...(register && register(name, validations))}
        className={cx(
          "h-4 w-4 text-pink focus:border-pink focus:ring-pink",
          className
        )}
        {...rest}
      />
      <span className="text-white"> {label}</span>
    </label>
  );
}

export function Radio({
  name,
  errors = {},
  validations,
  register,
  size = "md",
  className = "",
  label,
  ...rest
}) {
  return (
    <label className="inline-flex w-full items-center gap-2 rounded border border-gray-600 px-2 py-1 hover:bg-gray-800">
      <input
        type="radio"
        name={name}
        {...(register && register(name, validations))}
        className={cx(
          "h-4 w-4 text-pink focus:border-pink focus:ring-pink",
          className
        )}
        {...rest}
      />
      <span className="text-white"> {label}</span>
    </label>
  );
}
