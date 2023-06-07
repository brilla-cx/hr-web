import Image from "next/image";

import { H1, Lead } from "@/components/ui";

import SubscribeForm from "./subscribeform";

interface Props {
  title: string;
  subtitle: string;
  subtitle2: string;
  image: string;
}

export function HeroWithImage(props: Props) {
  const { image, subtitle, subtitle2, title } = props;
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="col-span-2 md:col-span-1">
        <H1 className="text-gray-200">{title}</H1>
        <Lead className="mt-6 text-gray-400">{subtitle}</Lead>
        <Lead className="mt-6 text-gray-400 ">{subtitle2}</Lead>
        {/* Conditionally render SubscribeForm component based on includeForm prop */}
        <SubscribeForm formId={""} classNames="!max-w-full" />
      </div>
      <div className="hidden md:block lg:col-span-1">
        <Image
          className="h-full w-full object-cover"
          src={image}
          alt=""
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL={image}
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
