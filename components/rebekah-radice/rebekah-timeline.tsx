"use client";

import React, { Fragment, useEffect, useRef } from "react";

import { cx } from "@/lib/utils";

import TimelineObserver from "../TimelineObserver";
import { H5, Lead } from "../ui";

interface TimelineProps {
  setObserver: (target: Element, callbackFn?: () => void) => void;
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ setObserver, className }) => {
  const timelineRefs = useRef<(HTMLElement | null)[]>([]);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!window.IntersectionObserver) return;
    timelineRefs.current.forEach((timelineRef) => {
      if (timelineRef && setObserver) {
        setObserver(timelineRef);
      }
    });

    circleRefs.current.forEach((circleRef) => {
      if (circleRef && setObserver) {
        setObserver(circleRef);
      }
    });
  }, [setObserver, timelineRefs, circleRefs]);

  const timelineData = [
    {
      id: 1,
      description:
        "Growing up in sunny Los Angeles, my passion for business bloomed early. At 7, I started a lemonade stand, mastering the art of making customers smile.",
      title: "Early",
    },
    {
      id: 2,
      description:
        "At 10, I opened my fruit stand, selling avocados and oranges to anyone who happened by. My backyard was bursting and so were my entrepreneurial dreams.",
      title: "Early (ish)",
    },
    {
      id: 3,
      description:
        "When I wasn't working the fruit stand, I joined my dad at his radio station. I learned the power of listening as he took calls, chatted with fans, and played top tunes.",
      title: "Still Early",
    },
    {
      id: 4,
      description:
        "My days in the studio made an impact. I dove head first into a radio career, chasing work-life balance as a single mom. Spoiler alert: balance is a f***ing myth.",
      title: "1994",
    },
    {
      id: 5,
      description:
        "I climbed the radio charts, making it to the top 4 years in a row. Itching for a new challenge, mortgage called. Before I knew it, I'd traded radio for business owner.",
      title: "1998",
    },
    {
      id: 6,
      description:
        "RebekahRadice.com was only a glimmer in my eye, and yet, became my passport to the world. I traveled far and wide, spreading digital smarts like confetti.",
      title: "2004",
    },
    {
      id: 7,
      description:
        "10 years in and the housing crash left me wiped out. That's when I realized important vs. urgent and found a way to prioritize. Family and fun came first.",
      title: "2008",
    },
    {
      id: 8,
      description:
        "Shifted into brand mode and greener Better Homes and Gardens pastures. Building a legacy brand from scratch on social is a wild ride and I was 100% up for it.",
      title: "2012",
    },
    {
      id: 9,
      description:
        "Met my BRIL.LA co-founder Ambreen, and Sam, her now grumpy hubby. Our dynamic trio weathered many SaaS storms but always came back fighting.",
      title: "2014",
    },
    {
      id: 10,
      description:
        "Breathed life into BRIL.LA, giving UX design a cause-based focus. Pouring our hearts into higher-ed, our tech-enabled approach spread its wings.",
      title: "2019",
    },
    {
      id: 11,
      description:
        "Infusing digital superpowers into Hey Rebekah, we soft launched to family and friends. Now we're in Beta. Come get better at what you do in 6 minutes or less.",
      title: "2023",
    },
  ];

  return (
    <div>
      <div
        className={`mx-auto flex flex-col items-center justify-center text-white ${className}`}>
        {timelineData.map(({ id, description, title }, index) => {
          const isEven = index % 2;
          return (
            <Fragment key={id}>
              <div
                id={`timeline${index + 1}`}
                // eslint-disable-next-line react/jsx-no-bind
                ref={(ref) => (timelineRefs.current[index] = ref)}
                className="h-[300px] w-[5px] bg-slate-900"
              />
              <div className="relative content">
                <div
                  id={`circle${index + 1}`}
                  // eslint-disable-next-line react/jsx-no-bind
                  ref={(ref) => (circleRefs.current[index] = ref)}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900"
                />
                <div
                  className={cx(
                    isEven
                      ? "absolute right-[50%] top-[20%] -mt-5 mr-10 min-w-[400px] text-right"
                      : "absolute left-[50%] top-[20%] -mt-5 ml-10 min-w-[400px] text-left"
                  )}>
                  <H5 className="text-2xl text-gray-200">{title}</H5>
                  <Lead className="text-gray-400">{description}</Lead>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

function RebekahTimeline() {
  return (
    <Fragment>
      <TimelineObserver
        initialColor="rgb(71 85 105 / var(--tw-bg-opacity))"
        fillColor="#fff"
        // eslint-disable-next-line react/jsx-no-bind
        handleObserve={(setObserver) => (
          <Timeline className="timeline" setObserver={setObserver} />
        )}
        hasReverse
      />
    </Fragment>
  );
}

export default RebekahTimeline;
