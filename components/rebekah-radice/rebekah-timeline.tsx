"use client";

import React, { Fragment, useEffect, useRef } from "react";
import TimelineObserver from "react-timeline-animation";

import { cx } from "@/lib/utils";

import { H5, Lead } from "../ui";

interface TimelineProps {
  setObserver: (target: Element, callbackFn?: () => void) => void;
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ setObserver, className }) => {
  const timelineRefs = useRef<(HTMLElement | null)[]>([]);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    timelineRefs.current.forEach((timelineRef) => {
      if (timelineRef) {
        setObserver(timelineRef);
      }
    });

    circleRefs.current.forEach((circleRef) => {
      if (circleRef) {
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
      id: 3,
      description: "",
      title: "",
    },
    {
      id: 3,
      description: "",
      title: "",
    },
    {
      id: 3,
      description: "",
      title: "",
    },
    {
      id: 3,
      description: "",
      title: "",
    },
    {
      id: 3,
      description: "",
      title: "",
    },
    {
      id: 3,
      description: "",
      title: "",
    },
    {
      id: 3,
      description: "",
      title: "",
    },
    {
      id: 3,
      description: "",
      title: "",
    },
    {
      id: 3,
      description: "",
      title: "",
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
    <TimelineObserver
      initialColor="rgb(71 85 105 / var(--tw-bg-opacity))"
      fillColor="#fff"
      // eslint-disable-next-line react/jsx-no-bind
      handleObserve={(setObserver) => (
        <Timeline className="timeline" setObserver={setObserver} />
      )}
      hasReverse
    />
  );
}

export default RebekahTimeline;
