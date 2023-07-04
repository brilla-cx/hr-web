"use client";
import { useState } from "react";

import SignupContextProvider from "@/context/SignupContext";

import ConfirmForm from "./ConfirmForm";
import EmailForm from "./EmailForm";
import FirstNameForm from "./FirstNameForm";

const SignupStepperForm = () => {
  const [step, setStep] = useState(1);

  function renderFormSteps() {
    switch (step) {
      case 1:
        return <EmailForm nextStep={setStep} />;
      case 2:
        return <FirstNameForm nextStep={setStep} />;
      case 3:
        return <ConfirmForm />;
      default:
        break;
    }
    return null;
  }

  return (
    <SignupContextProvider>
      <div className="max-w-xl mx-auto">{renderFormSteps()}</div>
    </SignupContextProvider>
  );
};

export default SignupStepperForm;
