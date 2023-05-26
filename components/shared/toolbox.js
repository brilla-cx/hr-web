import Image from "next/image";
import Link from "next/link";

import { H6 } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";
import { urlForImage } from "@/sanity/image";

export default function ToolBox({ tool }) {
  const imageProps = tool?.image ? urlForImage(tool.image) : null;

  const color = {
    cyan: "bg-cyan-200",
    sky: "bg-sky-200",
    blue: "bg-blue-200",
    indigo: "bg-indigo-200",
    violet: "bg-violet-200",
    purple: "bg-purple-200",
    fuchsia: "bg-fuchsia-200",
    pink: "bg-pink-200",
    gray: "bg-gray-200",
  };

  const categoryColor = color[tool?.category?.color] || "bg-white";

  return (
    <>
      <div className="group relative">
        <div
          className={cx(
            "aspect-video flex items-center justify-center p-5   rounded-md",
            categoryColor
          )}>
          <Image {...imageProps} alt={`${tool.name} Logo`} />
        </div>
        <Link href={`/built-with/${tool.slug.current}`}>
          <span className="absolute inset-0" />
          <H6 as="h2" className={cx("text-gray-200 mt-3 line-clamp-2 ")}>
            <span className={cx(hoverStyles)}>{tool.name}</span>
          </H6>
        </Link>

        {tool.shortDescription && (
          <p className="mt-1 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
            {tool.shortDescription}
          </p>
        )}
      </div>
    </>
  );
}
