"use client";

import { useState } from "react";

import PerferencesContextProvider from "@/context/ReaderPerferencesContext";

const PrefrencesForm = () => {
  const [step, setStep] = useState(1);

  function renderFormStep() {
    switch (step) {
      case 1:
        return <>email form</>;
      case 2:
        return <>first name form</>;
      case 3:
        return <>primary topic</>;
      case 4:
        return <>other topics</>;
      default:
        break;
    }

    return null;
  }

  return (
    <PerferencesContextProvider>
      <div className="mx-auto max-wxl">{renderFormStep()}</div>
    </PerferencesContextProvider>
  );
};

export default PrefrencesForm;
