import Script from "next/script";
import React, { ReactElement } from "react";

export function generateMetadata() {
  const title = "Juno AI";
  const description = "Juno loves Sam the most. She's the inspiration for our free embedded AI. These treats are made by hand, just for you. Dive in, save your money, get results.";

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: "/og.png",
    },
    twitter: {
      title,
      description,
      images: "/og.png",
    },
  };

  return metadata;
}


const Juno: React.FC = (): ReactElement => {
  return (
    <>
      <Script
        src="https://libraria-prod.s3.us-west-1.amazonaws.com/public/embed-inline-v0.0.02.js"
        defer
      />
      <div className="px-6 py-24 bg-midnight sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            Juno AI<sup className="text-xs align-top">BETA</sup>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Juno is the AI assistant for Hey Rebekah's tech stack. She was super
            hungry for knowledge, so she ingested everything there is to know
            about Next.js, Sanity.io, Tailwind CSS, TypeScript, Vercel, GitHub,
            PNPM, and more.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            She's not fully promptly trained yet Rebekah, so give her a break.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center min-h-screen mt-2 overflow-y-hidden bg-gray-100">
        <div
          id="libraria-widget"
          data-librariaslug="brilla"
          className="w-full max-w-4xl p-8 bg-white rounded-md shadow-md"
        />
      </div>
    </>
  );
};

export default Juno;
