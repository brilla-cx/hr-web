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
    href: string;
  };
  address?: string;
}

function ContactCard(props: Props) {
  const { icon, title, desc, link, address } = props;

  return (
    <div className="flex gap-x-6 rounded border border-gray-200/10 bg-slate-900 px-4 py-4 transition-all duration-300 hover:scale-105 hover:transform hover:bg-gray-800">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink text-midnight">
        {icon}
      </div>
      <div>
        <H6 as="h3" className="-mt-1 line-clamp-2 text-gray-200">
          {title}
        </H6>
        <p className="mt-1 line-clamp-3 text-gray-400 dark:text-gray-400">
          {desc}
        </p>
        {link && (
          <p className="mt-4">
            <Link
              href={link.href}
              aria-label="link for email"
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
            aria-label="company address"
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
