import { cx } from "@/lib/utils";

const commonClasses = "antialiased font-display font-semibold tracking-tight";

export function H1({ children, className = "", as = "h1" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "text-6xl")}>{children}</Tag>
  );
}

export function H2({ children, className = "", as = "h2" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "text-5xl")}>{children}</Tag>
  );
}

export function H3({ children, className = "", as = "h3" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "text-4xl")}>{children}</Tag>
  );
}

export function H4({ children, className = "", as = "h4" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "text-3xl")}>{children}</Tag>
  );
}

export function H5({ children, className = "", as = "h5" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "text-2xl")}>{children}</Tag>
  );
}

export function H6({ children, className = "", as = "h6" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "text-2xl")}>{children}</Tag>
  );
}

export function Title({ children, className = "", as = "p" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "line-clamp-2 text-lg")}>
      {children}
    </Tag>
  );
}

export function Lead({ children, className = "" }) {
  return <p className={cx(className, "font-sans text-xl")}>{children}</p>;
}
