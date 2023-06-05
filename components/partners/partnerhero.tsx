import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { H1 } from '../ui';

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
        <div className="bg-midnight h-screen">
            <div className="relative h-full isolate overflow-hidden pt-14">
                <Image
                    src={imageUrl}
                    alt={alt}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                    width={imageWidth}
                    height={imageHeight}
                />
                <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 items-center justify-center">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                            Announcing our next round of funding.{" "}
                            <Link href="#" className="font-semibold text-white">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <H1 className=" text-white">
                            {title}
                        </H1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            {description}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="#"
                                className="rounded bg-pink px-3.5 py-2.5 uppercase font-semibold text-midnight shadow-sm hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200/10"
                            >
                                Become a Partner
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerHero;
