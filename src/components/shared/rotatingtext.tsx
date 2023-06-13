"use client";

import Textra from "react-textra";

interface Props {
  items: string[];
}

const RotatingText = ({ items }: Props) => {
  return (
    <p className={`min-h-[4rem] text-center text-lg text-white/50`}>
      <Textra
        data={items}
        effect="simple"
        duration={1000}
        // @ts-ignore
        stopDuration={4000}
      />
    </p>
  );
};

export default RotatingText;
