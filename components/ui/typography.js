import { cx } from "@/lib/utils";

const commonClasses = "font-bold font-display tracking-tight";

export function H1({ children }) {
  return (
    <h1 className={cx(commonClasses, "text-5xl lg:text-7xl")}>{children}</h1>
  );
}

export function H2({ children }) {
  return (
    <h2 className={cx(commonClasses, "text-4xl lg:text-6xl")}>{children}</h2>
  );
}

export function H3({ children }) {
  return (
    <h3 className={cx(commonClasses, "text-3xl lg:text-5xl")}>{children}</h3>
  );
}

export function H4({ children }) {
  return (
    <h4 className={cx(commonClasses, "text-2xl lg:text-4xl")}>{children}</h4>
  );
}

export function H5({ children }) {
  return (
    <h5 className={cx(commonClasses, "text-xl lg:text-3xl")}>{children}</h5>
  );
}

export function H6({ children }) {
  return (
    <h6 className={cx(commonClasses, "text-lg lg:text-2xl")}>{children}</h6>
  );
}

export function Lead({ children, className = "" }) {
  return <p className={cx(className, "text-lg lg:text-xl")}>{children}</p>;
}
