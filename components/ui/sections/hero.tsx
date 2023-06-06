import { H1, Lead } from "../typography";
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
    <div className="grid items-center grid-cols-2">
      <div className="col-span-2 md:col-span-1">
        <H1 className="text-gray-200">{title}</H1>
        <Lead className="mt-6 text-gray-400">{subtitle}</Lead>
        <Lead className="mt-6 text-gray-400">{subtitle2}</Lead>
        {/* Conditionally render SubscribeForm component based on includeForm prop */}
        <SubscribeForm formId={""} />
      </div>
      <div className="hidden md:block lg:col-span-1">
        <img className="object-cover w-full h-full" src={image} alt="" />
      </div>
    </div>
  );
}
