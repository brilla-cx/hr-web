import React from "react";

import { cx } from "@/lib/utils";

interface Props {
  // size?: "sm" | "md" | "lg";
  large?: boolean;
  alt?: boolean;
  className?: string;
  children?: React.ReactNode;
  noPadding?: boolean;
}

export default function Container(props: Props) {
  return (
    <div
      className={cx(
        "container mx-auto",
        props.noPadding ? "" : "px-4 lg:px-8 xl:px-5",
        props.large ? " max-w-screen-xl" : "max-w-screen-lg",
        !props.alt && "py-5 lg:py-8",
        props.className
      )}>
      {props.children}
    </div>
  );
}
