"use client";

import NextImage from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import React from "react";

import { client } from "@/sanity/client";

type SanityImageProps = {
  image: any;
  alt: string;
};

const SanityImage: React.FC<
  SanityImageProps & React.HTMLProps<HTMLImageElement>
> = ({ image, alt, ...props }: SanityImageProps) => {
  const imageProps = useNextSanityImage(client, image) as any;
  const blurData = image?.asset?.metadata?.lqip;

  return (
    <NextImage
      {...imageProps}
      className="object-cover transition-all"
      // fill
      style={{ width: "100%", height: "auto" }} // layout="responsive" prior to Next 13.0.0
      sizes="(max-width: 768px) 30vw, 33vw"
      placeholder={blurData ? "blur" : null}
      blurDataURL={blurData}
      alt={alt}
      {...props}
    />
  );
};

export default SanityImage;
