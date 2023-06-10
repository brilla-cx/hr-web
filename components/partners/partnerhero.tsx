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
    <div className="h-[90vh]">
      <div className="relative h-full overflow-hidden isolate">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            opacity: 0.1,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0 object-contain bg-black rounded"
        />
        <div className="items-center justify-center max-w-3xl px-4 py-32 mx-auto sm:py-48 lg:py-56">
          <div className="text-center">
            <H1 className="text-gray-200 animate-glow">{title}</H1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              {description}
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <GlowingButton
                variant="link"
                href="mailto:partners@heyrebekah.com?subject=I%20m20intersted%20in%20partnerschip%20with%20hey%20rebekah%20.%20please%20contact%20me.">
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
