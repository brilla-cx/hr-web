"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import BrandsMarquee from "@/components/about/brands-marquee";
import CheckReplay from "@/components/about/check-replay";
import EmailCta from "@/components/about/email-cta";
import Container from "@/components/container";
import { H1, H2, H6, Lead } from "@/components/ui";
import { HeroWithImage } from "@/components/ui/sections/hero";
import SubscribeForm from "@/components/ui/sections/subscribeform";

const features = [
  {
    name: "Push to deploy",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
  },
  {
    name: "SSL certificates",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
  },
  {
    name: "Simple queues",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
  },
];

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function About() {
  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <HeroWithImage
          title="Knowledge should be free. Experience, priceless."
          subtitle="Freelancers need better access to knowledge, skills, and tools to build thriving careers. That's our focus."
          subtitle2="Hey Rebekah is a free daily newsletter for freelancers. Everything we create is available for free to our readers and always will be. Not on the list? 👇🏼"
          image="https://global-uploads.webflow.com/639407458bad1a668d048184/63d5df12ac199185dea4ec84_about-hero-p-1080.webp"
        />
        <div className="p-4 mt-10 text-center border rounded border-gray-200/10 bg-slate-900 md:p-20 lg:mt-0 lg:p-28">
          <H1 as="h3" className="pb-6 text-gray-200">
            Who TF is Rebekah Radice?
          </H1>
          <div className="px-2 space-y-6 text-lg text-gray-400 md:px-20 lg:px-28">
            <Lead className="gap-7">
              According to the interwebs, Rebekah Radice is one of the top
              digital marketing experts in the world. She's an OG influencer and
              a self-employed professional since 1998.
            </Lead>
            <Lead>
              In 2019, she started{" "}
              <Link href="https://bril.la/" className="text-gray-200">
                BRIL.LA
              </Link>
              , a woman-owned CX agency with her longtime colleague Ambreen
              Dar—who prefers protegé, not sidekick.
            </Lead>
            <Lead>
              Hey Rebekah came about after receiving thousands of questions from
              the community. We realized we could do a lot more to help
              self-employed professionals everywhere.
            </Lead>

            <Lead>
              We're starting with a free daily newsletter to do just that.
              Together, we're on a mission to help freelance professionals build
              thriving careers, so they can experience the joy of financial
              freedom and success.
            </Lead>
          </div>
        </div>
        {/* brands */}
        <BrandsMarquee />
        {/* check */}
        <div className="py-24 sm:py-32">
          <div className="max-w-2xl mx-auto lg:text-center">
            <H6 className="text-base font-bold text-gray-200">
              Wondering if we're any good at what we do?
            </H6>
            <Lead className="mt-2 text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
              Let's check the replay
            </Lead>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              The Hey Rebekah fam has been hustling together since 2013. Our
              combined experience is off the charts high, reaching almost
              rude-to-ask levels. But seriously, we're lucky to have worked with
              wicked smart people.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Realizing we still got a lot of game left, we're committed to
              passing on our Legos and open-sourcing our playbooks. Some
              milestones we've achieved:
            </p>
          </div>
          <CheckReplay />
        </div>
        {/* news letter */}
        <EmailCta />
        {/* faq */}
        <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="flex items-center ml-6 h-7">
                            {open ? (
                              <MinusSmallIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="pr-12 mt-2">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </div>
  );
}
