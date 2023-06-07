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
    <div className="h-[90vh] bg-midnight">
      <div className="relative h-full overflow-hidden isolate">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            opacity: 0.2,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0 bg-black"
        />
        <div className="items-center justify-center max-w-3xl py-32 mx-auto sm:py-48 lg:py-56">
          <div className="text-center">
            <H1 className="text-gray-200 animate-glow">{title}</H1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              {description}
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <GlowingButton variant="link" href={"#"} target="_blank">
                Become a Partner
              </GlowingButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerHero;
