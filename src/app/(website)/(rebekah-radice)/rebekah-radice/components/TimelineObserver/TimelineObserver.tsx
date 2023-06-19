import React, { useCallback, useEffect, useRef } from "react";

interface TimelineObserverProps {
  handleObserve?: (
    observer: (target: Element, callbackFn?: () => void) => void
  ) => JSX.Element;

  initialColor?: string;
  fillColor?: string;
  hasReverse?: boolean;
}

let halfScreenHeight: number;
if (typeof window !== "undefined") {
  halfScreenHeight = window?.innerHeight / 2;
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

interface ObservablesProps {
  observable: IntersectionObserverEntry;
  isPassed: boolean;
  callbackFn?: () => void;
}

function setObservable({ obs, observableList, callbacks }) {
  const obsId = obs?.target?.id;

  if (!observableList.has(obsId)) {
    observableList.set(obsId, {
      observable: obs,
      isPassed: false,
      callbackFn: callbacks[obsId] || null,
    });
  }
}

function removeObservable({ obs, observableList }) {
  const obsName = obs?.target?.id;

  if (observableList.has(obsName)) {
    observableList.set(obsName, {
      ...observableList.get(obsName),
      isPassed: true,
    });
  }
}

function colorize({ observableList, initialColor, fillColor, hasReverse }) {
  observableList.forEach((observable) => {
    if (!observable.isPassed) {
      const rect = observable.observable.target.getBoundingClientRect();
      const entry = observable?.observable;

      if (rect.bottom > halfScreenHeight && rect.top < halfScreenHeight) {
        if (initialColor && fillColor) {
          const depthPx = rect.bottom - halfScreenHeight;
          const depthPercent = (depthPx * 100) / rect.height;
          entry.target.style.background = `linear-gradient(to top, ${initialColor} ${depthPercent}%, ${fillColor} ${depthPercent}% 100%)`;
          entry.target.style.transform = "translateZ(0)";
        }
      }

      if (rect.bottom < halfScreenHeight) {
        if (initialColor && fillColor) {
          entry.target.style.background = fillColor;
          entry.target.style.transform = "unset";
        }

        if (observable?.callbackFn) {
          if (!observable?.callbackFired) {
            observable?.callbackFn();

            observable.callbackFired = true;
          }
        }

        if (!hasReverse) {
          removeObservable({
            obs: entry,
            observableList,
          });
        }
      }

      if (rect.top > halfScreenHeight && hasReverse) {
        entry.target.style.background = initialColor;
      }
    }
  });
}

const TimelineObserver = ({
  handleObserve,
  initialColor,
  fillColor,
  hasReverse,
}: TimelineObserverProps) => {
  const observablesStore = useRef(new Map<string, ObservablesProps>());
  const callbacks = useRef<{ [key: string]: () => void }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries?.forEach((entry) => {
      if (entry.isIntersecting) {
        setObservable({
          obs: entry,
          observableList: observablesStore.current,
          callbacks: callbacks.current,
        });
      }
    });
  }, []);

  const animation = useCallback(() => {
    window.requestAnimationFrame(() => {
      colorize({
        observableList: observablesStore.current,
        initialColor,
        fillColor,
        hasReverse,
      });
    });
  }, [fillColor, hasReverse, initialColor]);

  const setObserver = useCallback(
    (target: Element, callbackFn?: () => void) => {
      const elemId = target?.id;

      if (initialColor) {
        (target as HTMLElement).style.background = initialColor;
      }

      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver(callback, options);
      }

      if (observerRef.current) {
        observerRef.current.observe(target);
      }

      if (elemId && callbackFn) {
        callbacks.current[elemId] = callbackFn;
      }
    },
    [initialColor, callback]
  );

  useEffect(() => {
    document.addEventListener("scroll", animation);

    return () => {
      document.removeEventListener("scroll", animation);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [animation]);

  return (
    <div className="mb-40">
      {handleObserve ? handleObserve(setObserver) : null}
    </div>
  );
};

export default TimelineObserver;
