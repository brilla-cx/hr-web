import Image from "next/image";
import Marquee from "react-fast-marquee";

import { cx } from "@/lib/utils";

interface BrandItemProps {
  imageUrl: string;
  alt: string;
}

const brandsData: BrandItemProps[] = [
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/b644632dda06ef1ed7c1e0059ccbab8d22594456-139x62.svg",
    alt: "Black logomark of Rebekah Radice's client, Adobe",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/1d989c4c98ae67d22c0de061f1d0142beb90869d-300x100.svg",
    alt: "Logomark of a brand Rebekah's worked with, agorapulse",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/feb91666e3f65e909cc6399253eee2a26f5c2434-150x40.svg",
    alt: "Logomark of Rebekah Radice's client, Animoto",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/a7aa784a17b879588274662ed407a8b9e726689e-1648x381.svg",
    alt: "Logomark of Rebekah Radice's client, Benchmark Mortgage",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/fab5295e8bf78d39ec835e94d747c3fe0faeb494-517x217.svg",
    alt: "Logomark of Rebekah Radice's client, Better Homes & Garden",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/5c752ab1ece0356a5df46e4ac7fe041df9a104b0-150x42.svg",
    alt: "Logomark of Rebekah Radice's client, Brand24",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/d135906cd773408c3a73169818135dbdf176802a-150x56.svg",
    alt: "Logomark of a brand Rebekah's worked with, Canva",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/38d6c40b91bc4c531bca400be064fd26db7a62ed-150x48.svg",
    alt: "Logomark of a brand Rebekah's worked with, GetApp",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/b7f7ef31b10b9613a0b7c501287430a8195e8b90-150x38.svg",
    alt: "Logomark of a brand Rebekah's worked with, Hootsuite",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/b81f347ae77afc5ed76052b53c2b443f9f627293-120x46.svg",
    alt: "Logomark of a brand Rebekah's worked with, Inc. Magazine",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/11906e344fa5c7e7180949e8426ab2a2fa9dc463-2100x531.svg",
    alt: "Logomark of a brand Rebekah's worked with, Motorola",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/d8ab79a64a2aeaff4e782ebb275d6cdf3b018091-150x37.svg",
    alt: "Logomark of a brand Rebekah's worked with, Onalytica",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/af03f12f5c40309d3aa73146b6c30748c66b703d-150x33.svg",
    alt: "Logomark of a brand Rebekah's worked with, Intuit Quickbooks",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/0ff601f2a70d840771117421672f1deea7d889e8-150x38.svg",
    alt: "Logomark of a brand Rebekah's worked with, Sprout Social",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/a360ca23ac86881381ae416e91346012553aac91-616x142.svg",
    alt: "Logomark of a brand Rebekah's worked with, Tailwind",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/smx99abf/production/bc62fb4114280cb5aba5a3338ca2f04451a2ee39-150x35.svg",
    alt: "Logomark of a brand Rebekah's worked with, Wishpond",
  },
];

function BrandItem(props: BrandItemProps) {
  return (
    <div className={cx("bg-slate-900", "w-56 rounded p-6 border border-neutral-200/10")}>
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
          {brandsData.map((brand, i) => (
            <BrandItem
              key={brand.alt}
              alt={brand.alt}
              imageUrl={brand.imageUrl}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default BrandsMarquee;
