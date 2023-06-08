import React from "react";

import { cx } from "@/lib/utils";

interface PillProps {
  color?: string;
  active?: boolean;
  count?: number;
}

export default function Pill({ color = "pink", active, count, children, ...props }: React.PropsWithChildren<PillProps>) {
  const colors = {
    cyan: "text-cyan-300 border-cyan-300",
    sky: "text-sky-300 border-sky-300",
    blue: "text-blue-300 border-blue-300",
    indigo: "text-indigo-300 border-indigo-300",
    violet: "text-violet-300 border-violet-300",
    purple: "text-purple-300 border-purple-300",
    fuchsia: "text-fuchsia-300 border-fuchsia-300",
    pink: "text-pink-300 border-pink-300",
    gray: "text-gray-300 border-gray-300",
  };
  const bgcolor = {
    cyan: "text-cyan-950 bg-cyan-100",
    sky: "text-sky-950 bg-sky-100",
    blue: "text-blue-950 bg-blue-100",
    indigo: "text-indigo-950 bg-indigo-100",
    violet: "text-violet-950 bg-violet-100",
    purple: "text-purple-950 bg-purple-100",
    fuchsia: "text-fuchsia-950 bg-fuchsia-100",
    pink: "text-pink-950 bg-pink-100",
    gray: "text-gray-950 bg-gray-100",
  };

  return (
    <button
      type="button"
      {...props}
      className={cx(
        "inline-flex items-center gap-1 rounded border px-3 py-1",
        colors[color],
        active && bgcolor[color]
      )}
    >
      <span className="text-xs font-medium uppercase">{children}</span>
      {count && <span>{count}</span>}
    </button>
  );
}
