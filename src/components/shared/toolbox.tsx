import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { H6 } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";
import { urlForImage } from "@/sanity/image";

interface ToolBoxProps {
  tool: {
    image?: {
      asset: {
        url: string;
      };
    };
    category?: {
      color?: string;
    };
    slug: {
      current: string;
    };
    name: string;
    shortDescription?: string;
  };
}

const ToolBox: FC<ToolBoxProps> = ({ tool }) => {
  const imageProps = tool?.image
    ? urlForImage(tool.image)
    : {
        src: "/hey-rebekah-logo.svg",
        alt: `${tool.name ? tool.name : "Hey Rebekah Built With Tool"} Logo`,
        fill: true,
        className: "object-contain",
      };

  const color = {
    cyan: "bg-cyan-100",
    sky: "bg-sky-100",
    blue: "bg-blue-100",
    indigo: "bg-indigo-100",
    violet: "bg-violet-100",
    purple: "bg-purple-100",
    fuchsia: "bg-fuchsia-100",
    pink: "bg-pink-100",
    gray: "bg-gray-100",
  };

  const categoryColor =
    color[tool?.category?.color as keyof typeof color] || "bg-white";

  return (
    <>
      <div className="group relative">
        <div
          className={cx(
            "flex aspect-video items-center justify-center rounded",
            categoryColor
          )}>
          {imageProps && (
            <Image
              {...imageProps}
              alt={`${
                tool.name ? tool.name : "Hey Rebekah Built With Tool"
              } Logo`}
              className="object-contain p-2"
            />
          )}
        </div>
        <Link href={`/built-with/${tool.slug.current}`}>
          <span className="absolute inset-0" />
          <H6 as="h2" className={cx("mt-3 line-clamp-2 text-gray-100 ")}>
            <span className={cx(hoverStyles)}>{tool.name}</span>
          </H6>
        </Link>

        {tool.shortDescription && (
          <p className="mt-1 line-clamp-3 text-sm text-gray-400 dark:text-gray-400">
            {tool.shortDescription}
          </p>
        )}
      </div>
    </>
  );
};

export default ToolBox;
