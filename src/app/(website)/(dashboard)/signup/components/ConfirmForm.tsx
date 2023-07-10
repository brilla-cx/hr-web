import React, { Dispatch, Fragment, SetStateAction, useState } from "react";

import { FormSubmitVerfication } from "@/components/shared/reactTurnstile/ReactTurnstile";
import { GlowingButton, Lead } from "@/components/ui";
import { useSignupContext } from "@/context/SignupContext";

async function submitFormSignUp(
  setLoading: Dispatch<SetStateAction<boolean>>,
  onSubmitAll: () => Promise<void>
) {
  setLoading(true);
  try {
    await onSubmitAll();
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

function ConfirmFormButton() {
  const [loading, setLoading] = useState<boolean>(false);
  const { onSubmitAll, firstName } = useSignupContext();
  async function onSubmit() {
    await submitFormSignUp(setLoading, onSubmitAll);
  }
  return (
    <Fragment>
      <div className="">
        <Lead className="text-center text-gray-200">
          19 seconds, a new record {firstName ? firstName.firstName : ", w00t"}!
        </Lead>
        <p className="mt-3 text-center text-gray-400">
          Click submit, then please check your inbox to verify your email
          address.
        </p>
      </div>
      <div className="mt-10 flex justify-center" onClick={onSubmit}>
        <GlowingButton autoWidth ariaLabel="Submit Form">
          {loading ? "Hold on ...." : "Submit"}
        </GlowingButton>
      </div>
    </Fragment>
  );
}

function ConfirmForm() {
  const { verified, setVerified } = useSignupContext();
  return (
    <Fragment>
      {verified ? (
        <ConfirmFormButton />
      ) : (
        <FormSubmitVerfication setVerified={setVerified} />
      )}
    </Fragment>
  );
}

export default ConfirmForm;
