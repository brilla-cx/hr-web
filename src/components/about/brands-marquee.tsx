import Image from "next/image";
import Marquee from "react-fast-marquee";

import { cx } from "@/lib/utils";

interface BrandItemProps {
  imageUrl: string;
  alt: string;
  bgColor: string;
}
// T-11885 Brands Marquee Component - Add all light logos and change styles
const brandsData: BrandItemProps[] = [
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/4d8ad4df40c2f374f779b2234cb732770be139e1-150x60.svg",
    alt: "Black logomark of Rebekah Radice's client, Adobe",
    bgColor: "bg-pink-500",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/46289b475fbb10aab0ee06b51f0e2963d34398f1-150x40.svg",
    alt: "Black logomark of a brand Rebekah's worked with, Animoto",
    bgColor: "bg-yellow-500",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/8e92870a7896b0e6186df29dd367c47d4caf597a-1648x381.svg",
    alt: "Black logomark of Rebekah Radice's client, Benchmark Mortgage",
    bgColor: "bg-green-500",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/22fb00e4436e18fca8ab34c0c3adc78ecb677b9a-517x217.svg",
    alt: "Black logomark of Rebekah Radice's client, Better Homes & Garden",
    bgColor: "bg-blue-500",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/499c85bd76d138b42e1c4c082c9636ef316b406d-600x160.webp",
    alt: "brand 24 black logo",
    bgColor: "bg-pink-500",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/4c8125a99c1143aebb523da610acbb53a34cba76-150x56.svg",
    alt: "Black logomark of a brand Rebekah's worked with, Canva",
    bgColor: "bg-yellow-500",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/494896a0baf8da42951ab5361fa2399c19ecf373-328x78.svg",
    alt: "Black logomark of a brand Rebekah's worked with, Facebook",
    bgColor: "bg-green-500",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/4e77e3b11f86b47b63c10b1595a6d76ad64f8df9-150x48.svg",
    alt: "Black logomark of a brand Rebekah's worked with, GetApp",
    bgColor: "bg-blue-500",
  },
];

function BrandItem(props: BrandItemProps) {
  return (
    <div className={cx(props.bgColor, "w-56 rounded  p-4")}>
      <Image
        className="max-h-12 w-full object-contain"
        src={props.imageUrl}
        alt={props.alt}
        width={100}
        height={100}
        placeholder="blur"
        blurDataURL={props.imageUrl}
        priority
        unoptimized
      />
    </div>
  );
}

interface Props {
  title: string;
}

function BrandsMarquee(props: Props) {
  const { title } = props;
  return (
    <div className="lg:py-26 py-20 text-center">
      <div className="pb-6 text-2xl text-gray-200">{title}</div>
      <Marquee className="mt-10">
        <div className="mx-4 flex gap-x-8">
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
