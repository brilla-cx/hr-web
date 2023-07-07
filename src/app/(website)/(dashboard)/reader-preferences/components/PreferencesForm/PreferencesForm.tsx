"use client";
import PerferencesContextProvider, {
  usePreferenceContext,
} from "@/context/ReaderPerferencesContext";

import EmailForm from "../PreferencesEmailForm/PreferencesEmailForm";
import FirstNameForm from "../PreferencesFirstNameForm/PreferencesFirstNameForm";
import PreferencesFormSubmit from "../PreferencesFormSubmit/PreferencesFormSubmit";
import OtheTopicsForm from "../Topics/OtherTopics";
import PrimaryTopicForm from "../Topics/PrimaryTopic";

const PreferencesForm = () => {
  const { step } = usePreferenceContext();

  function renderFormStep() {
    switch (step) {
      case 1:
        return <EmailForm />;
      case 2:
        return <FirstNameForm />;
      case 3:
        return <PrimaryTopicForm />;
      case 4:
        return <OtheTopicsForm />;
      case 5:
        return <PreferencesFormSubmit />;
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
