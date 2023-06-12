import { cx } from "@/lib/utils";

const commonClasses = "font-semibold tracking-tight";

export function H1({ children, className = "", as = "h1" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "text-4xl lg:text-6xl")}>
      {children}
    </Tag>
  );
}

export function HeroH1({ children, className = "", as = "h1" }) {
  const Tag = as;
  return (
    <Tag
      className={cx(
        commonClasses,
        className,
        "text-3xl md:text-5xl lg:text-7xl"
      )}>
      {children}
    </Tag>
  );
}

export function H2({ children, className = "", as = "h2" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "text-3xl lg:text-6xl")}>
      {children}
    </Tag>
  );
}

export function H3({ children, className = "", as = "h3" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "text-3xl lg:text-5xl")}>
      {children}
    </Tag>
  );
}

export function H4({ children, className = "", as = "h4" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "text-4xl")}>{children}</Tag>
  );
}

export function H5({ children, className = "", as = "h5" }) {
  const Tag = as;
  return (
    <Tag className={cx(commonClasses, className, "text-3xl")}>{children}</Tag>
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
  return <p className={cx(className, "text-lg")}>{children}</p>;
}
