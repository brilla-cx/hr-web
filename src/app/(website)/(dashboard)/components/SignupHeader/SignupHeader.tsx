import React from "react";

import { H1, Lead } from "@/components/ui/typography";

import RotatingText from "../RotatingText/RotatingText";

interface PageHeaderProps {
  title: string;
  leadText: string;
}

const testimonialArray = [
  "  This is the best thing ever! ~ Nancy (Rebekah's mom)",
  "Hey Rebekah is smart AF! ~ Cam (Rebekah's son)",
  "I have to read it everyday! ~ Chris (Rebekah's son)",
  "Grab me some chips? ~ Dean (Rebekah's husband)",
];

const SignupHeader: React.FC<PageHeaderProps> = ({ title, leadText }) => {
  return (
    <div className="py-3">
      <div className="max-w-3xl mx-auto text-center">
        <H1 className="text-gray-200">{title}</H1>
        {leadText && <Lead className="mt-6 text-gray-400">{leadText}</Lead>}

        <div className="mt-4">
          <RotatingText items={testimonialArray} />
        </div>
      </div>
    </div>
  );
};

export default SignupHeader;
