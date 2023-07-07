"use client";
import { useRouter } from "next/navigation";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import Turnstile from "react-turnstile";

import { GlowingButton, Lead } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";
import PerferencesContextProvider, {
  usePreferenceContext,
} from "@/context/ReaderPerferencesContext";
import { CLOUDFLARE_SITE_KEY } from "@/lib/constants";
import { updateUser } from "@/lib/server/actions";

import EmailForm from "../EmailForm/EmailForm";
import FirstNameForm from "../FirstNameForm/FirstNameForm";
import { OtheTopicsForm, PrimaryTopicForm } from "../Topics/Topics";

function FormSubmit({
  nextStep,
}: {
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  const { data } = usePreferenceContext();
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState<boolean>(false);
  const router = useRouter();

  const submitForm = async () => {
    if (!verified) {
      return;
    }
    setLoading(true);
    const { email, ...rest } = data;
    await updateUser(email.email, {
      firstName: rest.dataFields.firstName.firstName,
      topic1: rest.dataFields.topic1.topic1 ?? "",
      topic2: rest.dataFields.topic2,
      topic3: rest.dataFields.topic3,
      topic4: rest.dataFields.topic4,
    }).then(() => setLoading(false));
    router.push("/signup/confirm");
  };

  const renderFormContent = () => {
    if (!verified) {
      return (
        <Fragment>
          <div className="mt-5 space-y-3 text-center text-gray-400">
            <div className="flex flex-col items-center gap-5">
              <Skeleton className="h-10 w-1/2" />
            </div>
          </div>
        </Fragment>
      );
    }

    return (
      <div className="mt-10 flex justify-center">
        <GlowingButton
          type="submit"
          autoWidth
          // @ts-ignore
          onClick={submitForm}
          disabled={loading}
          aria-label="Submit form">
          {(loading && "Just a sec...") || "Update my Preferences"}
        </GlowingButton>
      </div>
    );
  };

  return (
    <div>
      <div className="">
        <Lead className="text-center text-gray-200">
          Ready to change your preferences,{" "}
          {/* {data.firstName ? data.firstName : "w00t"}! */}
        </Lead>
        <p className="mt-3 text-center text-gray-400">
          Click submit, and we will update your preferences.
        </p>
      </div>

      {renderFormContent()}

      <Turnstile
        sitekey={CLOUDFLARE_SITE_KEY}
        onVerify={async (token) => {
          if (token) {
            await fetch("/api/turnstile-verify", {
              method: "POST",
              body: JSON.stringify({ token }),
              headers: {
                "content-type": "application/json",
              },
            });
            setVerified(true);
          }
        }}
        refreshExpired="auto"
      />
    </div>
  );
}

const PreferencesForm = () => {
  const [step, setStep] = useState(5);

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
        return <FormSubmit nextStep={setStep} />;
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
