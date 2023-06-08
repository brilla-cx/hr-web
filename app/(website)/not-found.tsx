import cx from "classnames";
import Link from "next/link";
import React from 'react';

import { H1 } from "@/components/ui";
import hoverStyles from "@/lib/hover";

const NotFound: React.FC = () => {
  return (
    <main className="grid min-h-[75vh] place-items-center bg-midnight px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-pink">404</p>
        <H1 className="mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl">
          Page not found
        </H1>
        <p className="mt-6 text-base leading-7 text-gray-400">
          Sorry, we couldn’t find the page you’re looking for. Our technical
          crew are clearly slacking off again.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="rounded border border-gray-200/10 px-3.5 py-2.5 text-sm font-semibold text-gray-200 transition-all duration-200 ease-in-out hover:bg-slate-800 hover:text-white">
            Go to Home page
          </Link>
          <Link href="/contact" className={cx(
            "text-sm font-semibold text-gray-400",
            hoverStyles
          )}>
            Contact us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
