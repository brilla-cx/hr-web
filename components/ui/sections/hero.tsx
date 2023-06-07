import Image from "next/image";
import { ReactNode } from "react";

import { H1, Lead } from "../typography";
import SubscribeForm from "./subscribeform";

interface Props {
  title: string;
  subtitle: string;
  subtitle2?: string;
  image: string;
  subForm?: boolean;
  button?: JSX.Element;
}

export function HeroWithImage(props: Props) {
  const { image, subtitle, subtitle2, title } = props;
  return (
    <div className="grid items-center grid-cols-2 gap-4">
      <div className="col-span-2 md:col-span-1">
        <H1 className="text-gray-200">{title}</H1>
        <Lead className="mt-6 text-gray-400">{subtitle}</Lead>
        <Lead className="mt-6 text-gray-400 ">{subtitle2}</Lead>
        {props.subForm && (
          <SubscribeForm formId={""} classNames="!max-w-full" />
        )}
        <div className="pt-6">{props.button && props.button}</div>
      </div>
      <div className="hidden md:block lg:col-span-1">
        <Image
          className="object-cover w-full h-full"
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
