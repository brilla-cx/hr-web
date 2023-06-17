import Image from "next/image";

import { GlowingButton, H1, Lead } from "@/components/ui";


interface Props {
  title: string;
  subtitle: string;
  subtitle2?: string;
  image: string;
  button?: JSX.Element;
}

export function HeroWithImage(props: Props) {
  const { image, subtitle, subtitle2, title } = props;
  return (
    <div className="grid items-center grid-cols-2 gap-6 px-2 py-16 sm:py-24 lg:px-16 lg:py-26">
      <div className="hidden md:block lg:col-span-1">
        <Image
          className="object-cover w-[85%] border border-gray-200/10"
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
      <div className="col-span-2 md:col-span-1">
        <H1 className="text-gray-200">{title}</H1>
        <Lead className="mt-6 text-gray-400">{subtitle}</Lead>
        <Lead className="mt-6 text-gray-400 ">{subtitle2}</Lead>

        <div className="mt-8 md:max-w-xs">{props.button && props.button}
          <GlowingButton
            variant="link"
            href="/signup"
            size="md"
            id="about-hero"
            aria-label="Go to signup form"
          >
            Join the Curious
          </GlowingButton>
        </div>

      </div>
    </div>
  );
}