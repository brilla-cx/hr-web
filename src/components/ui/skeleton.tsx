import React from "react";

import { cx } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx("animate-pulse rounded-md bg-slate-900", className)}
      {...props}
    />
  );
}

export { Skeleton };
