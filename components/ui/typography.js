import { cx } from "@/lib/utils";

const commonClasses = "font-display tracking-tight leading-tight";

export function H1({ children, className = "", as = "h1" }) {
  const Tag = as;
  return (
    <Tag
      className={cx(
        commonClasses,
        className,
        "font-semibold text-6xl lg:text-8xl"
      )}>
      {children}
    </Tag>
  );
}

export function H2({ children, className = "", as = "h2" }) {
  const Tag = as;
  return (
    <Tag
      className={cx(
        commonClasses,
        className,
        "font-bold text-4xl lg:text-6xl"
      )}>
      {children}
    </Tag>
  );
}

export function H3({ children, className = "", as = "h3" }) {
  const Tag = as;
  return (
    <Tag
      className={cx(
        commonClasses,
        className,
        "font-bold text-3xl lg:text-5xl"
      )}>
      {children}
    </Tag>
  );
}

export function H4({ children, className = "", as = "h4" }) {
  const Tag = as;
  return (
    <Tag
      className={cx(
        commonClasses,
        className,
        "font-bold text-2xl lg:text-4xl"
      )}>
      {children}
    </Tag>
  );
}

export function H5({ children, className = "", as = "h5" }) {
  const Tag = as;
  return (
    <Tag
      className={cx(commonClasses, className, "font-bold text-xl lg:text-3xl")}>
      {children}
    </Tag>
  );
}

export function H6({ children, className = "", as = "h6" }) {
  const Tag = as;
  return (
    <Tag
      className={cx(commonClasses, className, "font-bold text-lg lg:text-2xl")}>
      {children}
    </Tag>
  );
}

export function Title({ children, className = "", as = "p" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "text-med lg:text-xl")}>
      {children}
    </Tag>
  );
}

export function Lead({ children, className = "" }) {
  return <p className={cx(className, "text-med lg:text-xl")}>{children}</p>;
}
