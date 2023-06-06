import Image from "next/image";
import Marquee from "react-fast-marquee";

import { cx } from "@/lib/utils";

import { H6 } from "../ui";

interface BrandItemProps {
  imageUrl: string;
  alt: string;
  bgColor: string;
}

const brandsData: BrandItemProps[] = [
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/639407458bad1a668d048184/6396a6e276a0d26b80755ca8_rebekah-radice-client-adobe.svg",
    alt: "Black logomark of Rebekah Radice's client, Adobe",
    bgColor: "bg-pink-500",
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/639407458bad1a668d048184/6396a6e32721b333ec8c7014_rebekah-radice-client-animoto.svg",
    alt: "Black logomark of a brand Rebekah's worked with, Animoto",
    bgColor: "bg-yellow-500",
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/639407458bad1a668d048184/639828060754716283eb778e_benchmark-mortgage.svg",
    alt: "Black logomark of Rebekah Radice's client, Benchmark Mortgage",
    bgColor: "bg-green-500",
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/639407458bad1a668d048184/639828063f168b55a52b34fe_Better%20Homes%20and%20Gardens%20Real%20Estate.svg",
    alt: "Black logomark of Rebekah Radice's client, Better Homes & Garden",
    bgColor: "bg-blue-500",
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/639407458bad1a668d048184/642bb37d520380fd28279864_brand24-black.webp",
    alt: "brand 24 black logo",
    bgColor: "bg-pink-500",
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/639407458bad1a668d048184/6396a6e367bb250c18fea3e3_rebekah-radice-client-canva.svg",
    alt: "Black logomark of a brand Rebekah's worked with, Canva",
    bgColor: "bg-yellow-500",
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/639407458bad1a668d048184/6396a6e3f6b0c73551356968_rebekahradice-team-client-facebook.svg",
    alt: "Black logomark of a brand Rebekah's worked with, Facebook",
    bgColor: "bg-green-500",
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/639407458bad1a668d048184/6396a6e37fe0e54b409ddf52_rebekah-radice-client-getapp.svg",
    alt: "Black logomark of a brand Rebekah's worked with, GetApp",
    bgColor: "bg-blue-500",
  },
];

function BrandItem(props: BrandItemProps) {
  return (
    <div className={cx(props.bgColor, "rounded border border-gray-200/10 p-2")}>
      <Image
        className="object-contain w-full max-h-12"
        src={props.imageUrl}
        alt={props.alt}
        width={158}
        height={48}
      />
    </div>
  );
}

function BrandsMarquee() {
  return (
    <div className="py-4 mt-10 text-center md:py-20 lg:mt-32 lg:py-28">
      <H6 className="pb-6 text-gray-200">G.O.A.T. brands we've worked with</H6>
      <Marquee className="mt-10">
        <div className="flex mx-4 gap-x-8">
          {brandsData.map((brand, i) => {
            return (
              <BrandItem
                key={brand.alt}
                alt={brand.alt}
                imageUrl={brand.imageUrl}
                bgColor={brand.bgColor}
              />
            );
          })}
        </div>
      </Marquee>
    </div>
  );
}

export default BrandsMarquee;
