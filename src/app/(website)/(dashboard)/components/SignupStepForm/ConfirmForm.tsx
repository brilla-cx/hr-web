import React, { Fragment } from "react";

import { GlowingButton, Lead } from "@/components/ui";
import { useSignupContext } from "@/context/SignupContext";

function ConfirmForm() {
  const { onSubmitAll } = useSignupContext();

  return (
    <Fragment>
      <div className="">
        <Lead className="text-center text-gray-200">
          {/* 19 seconds, a new record {data.firstName ? data.firstName : ", w00t"}! */}
        </Lead>
        <p className="mt-3 text-center text-gray-400">
          Click submit, then please check your inbox to verify your email
          address.
        </p>
      </div>

      <div className="flex justify-center mt-10" onClick={onSubmitAll}>
        <GlowingButton autoWidth ariaLabel="Submit Form">
          Submit
        </GlowingButton>
      </div>
    </Fragment>
  );
}

export default ConfirmForm;
