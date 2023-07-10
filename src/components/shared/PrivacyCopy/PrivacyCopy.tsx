import Link from "next/link";
import React from "react";

import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

function PrivacyCopy({ className }: { className?: string }) {
  return (
    <p
      className={cx(
        "mt-4 text-left text-xs leading-6 text-gray-300",
        className
      )}>
      We care about your{" "}
      <Link href="/privacy" className={cx("font-bold text-white", hoverStyles)}>
        privacy
      </Link>
      .
    </p>
  );
}

export default PrivacyCopy;
