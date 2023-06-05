import Link from "next/link";
import React from "react";

import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

import { H6 } from "../ui";

interface Props {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link?: {
    title: string;
    href: URL;
  };
  address?: string;
}

function ContactCard(props: Props) {
  const { icon, title, desc, link, address } = props;

  return (
    <div className="flex gap-x-6">
      <div className="flex items-center justify-center w-10 h-10 text-gray-200 rounded-lg shrink-0 bg-pink">
        {icon}
      </div>
      <div>
        <H6 as="h3" className="text-gray-200 line-clamp-2">
          {title}
        </H6>
        <p className="mt-1 text-gray-400 line-clamp-3 dark:text-gray-400">
          {desc}
        </p>
        {link && (
          <p className="mt-4">
            <Link
              href={link.href}
              className={cx(
                "text-sm font-bold leading-6 text-gray-200",
                hoverStyles
              )}>
              {link?.title} <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        )}
        {address && (
          <p
            className="mt-4 text-sm font-bold leading-6 text-gray-200"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: address }}
          />
        )}
      </div>
    </div>
  );
}

export default ContactCard;
