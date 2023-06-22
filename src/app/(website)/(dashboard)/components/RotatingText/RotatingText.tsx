"use client";

import Textra from "react-textra";

interface Props {
  items: string[];
  ariaLive?: "polite" | "off" | "assertive";
  ariaRelevant?: "additions" | "removals" | "text" | "all" | "additions text" | "additions removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
}


const RotatingText = ({ items, ariaLive = "polite", ariaRelevant = "additions text" }: Props) => {
  return (
    <p className={`min-h-[4rem] text-xs text-center md:text-lg text-white/50`}
      aria-live={ariaLive}
      aria-relevant={ariaRelevant}>
      <Textra
        data={items}
        effect="simple"
        duration={1000}
        // @ts-ignore
        stopduration={6000}
      />
    </p>
  );
};

export default RotatingText;
