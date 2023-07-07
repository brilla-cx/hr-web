"use client";
import { useState } from "react";

import PerferencesContextProvider from "@/context/ReaderPerferencesContext";

import EmailForm from "../PreferencesEmailForm/PreferencesEmailForm";
import FirstNameForm from "../PreferencesFirstNameForm/PreferencesFirstNameForm";
import PreferencesFormSubmit from "../PreferencesFormSubmit/PreferencesFormSubmit";
import OtheTopicsForm from "../Topics/OtherTopics";
import PrimaryTopicForm from "../Topics/PrimaryTopic";

const PreferencesForm = () => {
  const [step, setStep] = useState(1);

  function renderFormStep() {
    switch (step) {
      case 1:
        return <EmailForm setStep={setStep} />;
      case 2:
        return <FirstNameForm setStep={setStep} />;
      case 3:
        return <PrimaryTopicForm setStep={setStep} />;
      case 4:
        return <OtheTopicsForm setStep={setStep} />;
      case 5:
        return <PreferencesFormSubmit setStep={setStep} />;
      default:
        break;
    }

    return null;
  }

  return (
    <PerferencesContextProvider>
      <div className="mx-auto mb-48 mt-12 max-w-xl">{renderFormStep()}</div>
    </PerferencesContextProvider>
  );
};

export default PreferencesForm;
