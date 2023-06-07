import React from "react";
import { FaChevronDown } from "react-icons/fa";

import { cx } from "@/lib/utils";

interface InputProps {
  placeholder: string;
  name: string;
  errors?: Record<string, any>;
  validations?: any;
  register?: any;
  type?: string;
  size?: "sm" | "md";
  className?: string;
  [key: string]: any;
}

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
}: InputProps) {
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

interface SelectProps {
  children: React.ReactNode;
  size?: "sm" | "md";
  [key: string]: any;
}

export function Select({ children, size = "md", ...rest }: SelectProps) {
  return (
    <div className="relative">
      <FaChevronDown className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2" />
      <select className={cx(commonClasses, sizeClasses[size], "")} {...rest}>
        {children}
      </select>
    </div>
  );
}

interface TextareaProps {
  placeholder: string;
  size?: "sm" | "md";
  className?: string;
  required?: boolean;
  name?: string;
}

export function Textarea({
  placeholder,
  size = "md",
  className,
  required,
  name,
}: TextareaProps) {
  return (
    <textarea
      name={name ?? ""}
      required
      placeholder={placeholder}
      className={cx(commonClasses, sizeClasses[size], "", className)}
    />
  );
}
interface CheckboxProps {
  name: string;
  errors?: Record<string, any>;
  validations?: any;
  register?: any;
  size?: "sm" | "md";
  className?: string;
  label: string;
  [key: string]: any;
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
}: CheckboxProps) {
  return (
    <label className="inline-flex items-center w-full gap-2 px-2 py-1 border border-gray-600 rounded hover:bg-gray-800">
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

interface RadioProps {
  name: string;
  errors?: Record<string, any>;
  validations?: any;
  register?: any;
  size?: "sm" | "md";
  className?: string;
  label: string;
  [key: string]: any;
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
}: RadioProps) {
  return (
    <label className="inline-flex items-center w-full gap-2 px-2 py-1 border border-gray-600 rounded hover:bg-gray-800">
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
