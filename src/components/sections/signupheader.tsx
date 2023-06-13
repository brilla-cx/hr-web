import React from "react";

import { H1, Lead } from "@/components/ui/typography";
import RotatingText from "@/components/shared/rotatingtext";

interface PageHeaderProps {
  title: string;
  leadText: string;
}

const testimonialArray = [
  "  This is just the best thing I've ever read! ~ Nancy (Rebekah's mom)",
  "Hey Rebekah is hot as 🔥! ~ Cam (Rebekah's son)",
  "I have to read this newsletter everyday! ~ Chris (Rebekah's son)",
  "Hey Rebekah, mind grabbing me some chips while you're there? ~ Dean (Rebekah's husband)",
];

const SignupHeader: React.FC<PageHeaderProps> = ({ title, leadText }) => {
  return (
    <div className="py-3">
      <div className="mx-auto max-w-3xl text-center">
        <H1 className="text-gray-200">{title}</H1>
        {leadText && <Lead className="mt-6 text-gray-400">{leadText}</Lead>}

        <div className="mt-6">
          <RotatingText items={testimonialArray} />
        </div>
      </div>
    </div>
  );
};

export default SignupHeader;