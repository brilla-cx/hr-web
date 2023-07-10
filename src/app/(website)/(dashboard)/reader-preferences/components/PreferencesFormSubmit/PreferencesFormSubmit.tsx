import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";
import { Dispatch, Fragment, SetStateAction, useEffect } from "react";

import { FormSubmitVerfication } from "@/components/shared/reactTurnstile/ReactTurnstile";
import { GlowingButton, Lead } from "@/components/ui";
import { usePreferenceContext } from "@/context/ReaderPerferencesContext";
import { updateUser } from "@/lib/server/actions";
import { PreferenceContextState } from "@/types/types";

async function submitForm(
  data: Pick<PreferenceContextState, "data">,
  setLoading: Dispatch<SetStateAction<boolean>>,
  router: AppRouterInstance
) {
  setLoading(true);
  const {
    data: { email, dataFields },
  } = data;
  try {
    await updateUser(email.email, {
      firstName: dataFields.firstName.firstName,
      topic1: dataFields.topic1.topic1 ?? "",
      topic2: dataFields.topic2,
      topic3: dataFields.topic3,
      topic4: dataFields.topic4,
    });
    setLoading(false);
    router.push("/signup/confirm");
  } catch (error) {
    setLoading(false);
    console.error("Error updating preferences:", error);
  }
}

function SubmitFormButton() {
  const router = useRouter();
  const { loading, setLoading, data } = usePreferenceContext();
  async function handleSubmit() {
    await submitForm(
      {
        data: data,
      },
      setLoading,
      router
    );
  }

  return (
    <div className="mt-10 flex justify-center">
      <GlowingButton
        type="submit"
        autoWidth
        // @ts-ignore
        onClick={handleSubmit}
        disabled={loading}
        aria-label="Submit form">
        {loading ? "Just a sec..." : "Update my Preferences"}
      </GlowingButton>
    </div>
  );
}

export default function PreferencesFormSubmit() {
  const { verified, setVerified } = usePreferenceContext();

  // set verfied false so we can run verfrication again in the form context
  useEffect(() => {
    setVerified(false);
  }, [setVerified]);

  return (
    <Fragment>
      <Lead className="text-center text-gray-200">
        Ready to change your preferences,{" "}
      </Lead>
      <p className="mt-3 text-center text-gray-400">
        Click submit, and we will update your preferences.
      </p>
      {verified ? (
        <SubmitFormButton />
      ) : (
        <FormSubmitVerfication setVerified={setVerified} />
      )}
    </Fragment>
  );
}
