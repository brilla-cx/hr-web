"use client";
import { useState } from "react";

import PerferencesContextProvider from "@/context/ReaderPerferencesContext";

import EmailForm from "../PreferencesEmailForm/PreferencesEmailForm";
import FirstNameForm from "../PreferencesFirstNameForm/PreferencesFirstNameForm";
import PreferencesFormSubmit from "../PreferencesFormSubmit/PreferencesFormSubmit";
import { OtheTopicsForm, PrimaryTopicForm } from "../Topics/Topics";

const PreferencesForm = () => {
  const [step, setStep] = useState(1);

  function renderFormStep() {
    switch (step) {
      case 1:
        return <EmailForm nextStep={setStep} />;
      case 2:
        return <FirstNameForm nextStep={setStep} />;
      case 3:
        return <PrimaryTopicForm nextStep={setStep} />;
      case 4:
        return <OtheTopicsForm nextStep={setStep} />;
      case 5:
        return <PreferencesFormSubmit nextStep={setStep} />;
      default:
        break;
    }

    return null;
  }

  return (
    <PerferencesContextProvider>
      <div className="max-w-xl mx-auto mt-12 mb-48">{renderFormStep()}</div>
    </PerferencesContextProvider>
  );
};

export default PreferencesForm;
