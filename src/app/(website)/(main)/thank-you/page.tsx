import Image from "next/image";

import { H1, Lead } from "@/components/ui";

export function generateMetadata() {
  const title = "Thank You";
  const description =
    "Wow, look at you! You're on your way to becoming an AI superstar. We're thrilled you've subscribed to Hey Rebekah. We're here for you. Happy generating!";

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: "/og.png",
    },
    twitter: {
      title,
      description,
      images: "/og.png",
    },
  };

  return metadata;
}

export default function ThankYou() {
  return (
    <div className="py-14 sm:py-52">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-center max-w-2xl grid-cols-1 mx-auto d gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative px-6 pt-64 overflow-hidden bg-gray-900 rounded shadow-2xl pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                src="https://cdn.sanity.io/images/smx99abf/production/98a2502e7f2adb9661c2742e269b9ae9011dc220-1600x1600.webp"
                alt=""
                className="absolute inset-0 object-cover w-full h-full"
                fill
                sizes="(max-width: 768px) 30vw, 33vw"
              />
            </div>
          </div>
          <div className="p-4 border rounded border-gray-200/10 bg-slate-900">
            <H1 className="text-gray-200">Thank you!</H1>
            <Lead className="flex flex-col mt-6 gap-y-2">
              <span className="mb-2 font-bold text-gray-200">
                🥂 Ahhhh-maaazzzing, we're excited you're here. <br />
              </span>
              <span className="font-bold text-gray-400">
                A welcome email is on the way to you.
              </span>
              <span className="font-bold text-gray-400">
                If you reply to it, you'll help us avoid the dreaded promotions
                tab of your inbox.
              </span>
              <span className="font-bold text-gray-400">
                BTW, we reply to every message.
              </span>
            </Lead>
          </div>
        </div>
      </div>
    </div>
  );
}
