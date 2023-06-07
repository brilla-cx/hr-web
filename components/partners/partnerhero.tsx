import Image from "next/image";
import React from "react";

import { GlowingButton } from "../ui";
import { H1 } from "../ui";

interface PartnerHeroProps {
  title: string;
  description: string;
  alt: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
}

const PartnerHero: React.FC<PartnerHeroProps> = ({
  title,
  description,
  alt,
  imageUrl,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="pt-10 pb-24 mx-auto max-w-7xl sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="max-w-2xl mx-auto">
            <div className="max-w-lg">
              <H1 className="text-gray-200">{title}</H1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {description}
              </p>
              <div className="mt-10">
                <GlowingButton
                  variant="link"
                  href="mailto:partners@heyrebekah.com?subject=I%20m20intersted%20in%20partnerschip%20with%20hey%20rebekah%20.%20please%20contact%20me.">
                  Become a Partner
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 rounded-md sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0">
          <div className="hidden md:block lg:col-span-1">
            <Image
              className="h-full w-full !rounded object-cover"
              src={imageUrl}
              alt=""
              width={100}
              height={100}
              placeholder="blur"
              blurDataURL={imageUrl}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 -z-10 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
};

export default PartnerHero;
