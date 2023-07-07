import React, { Dispatch, Fragment, SetStateAction, useState } from "react";

import ReactTurnstile from "@/components/shared/reactTurnstile/ReactTurnstile";
import { GlowingButton, Lead } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";
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

function FormSubmitVerfication() {
  const { setVerified } = useSignupContext();
  return (
    <>
      <div className="mt-5 space-y-3 text-center text-gray-400">
        <div className="flex flex-col items-center gap-5">
          <Skeleton className="h-10 w-1/2" />
        </div>
      </div>
      <ReactTurnstile setVerified={setVerified} />
    </>
  );
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
  const { verified } = useSignupContext();
  return (
    <Fragment>
      {verified ? <ConfirmFormButton /> : <FormSubmitVerfication />}
    </Fragment>
  );
}

export default ConfirmForm;
