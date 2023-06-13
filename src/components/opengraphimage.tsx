/* eslint-disable react/no-unknown-property */
import React from "react";

import { SITE_URL } from "@/lib/constants";

interface Props {
  title: string;
  description: string;
}

function OpenGraphImage(props: Props) {
  const { title, description } = props;
  const absoluteURL =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : SITE_URL;

  console.log(`${absoluteURL}/main-og-image.png`);
  return (
    <div
      // eslint-disable-next-line react/no-unknown-property
      tw="flex w-full h-full"
      style={{
        fontFamily: "Lexend Deca",
        backgroundColor: "hsl(224, 71%, 4%)",
      }}>
      <div tw="flex flex-col items-start justify-around px-10 w-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${absoluteURL}/hey-rebekah-logo-web.png`}
          alt="Hey Rebekah Logo"
          width={150}
          height={40}
        />
        <div tw="flex flex-col">
          <div
            tw="flex mt-2 font-semibold tracking-tight leading-tight text-4xl text-gray-200"
            style={{
              fontFamily: "Lexend Deca",
              maxHeight: "230px",
              overflow: "hidden",
            }}>
            {title}
          </div>
          <p tw="text-gray-400 text-md font-medium">{description}</p>
        </div>
        <div tw="flex w-1/2 relative items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${absoluteURL}/main-og-image.png`}
            alt="Cover"
            tw="w-full h-full"
            style={{ objectFit: "cover" }}
            width={150}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}

export default OpenGraphImage;
