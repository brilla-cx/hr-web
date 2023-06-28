/* eslint-disable react/jsx-no-bind */
import React, { Fragment, useState } from "react";
import Turnstile from "react-turnstile";

import { GlowingButton, Lead } from "@/components/ui";
import { useSignupContext } from "@/context/SignupContext";
import { CLOUDFLARE_SITE_KEY } from "@/lib/constants";
function ConfirmForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const { onSubmitAll, firstName } = useSignupContext();
  const [verified, setVerified] = useState<boolean>(false);

  async function onSubmit() {
    if (!verified) {
      // If verification is not completed yet, prevent form submission
      return;
    }
    setLoading(true);
    try {
      await onSubmitAll();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const renderFormContent = () => {
    if (!verified) {
      return (
        <Fragment>
          <div className="mb-4 text-center text-gray-400">
            <p>
              We are diligently collecting your data while our hamsters spin the
              verification wheel.
            </p>
            <p>Hang tight, we're almost there!</p>
          </div>
          <div className="flex justify-center">
            <div className="lds-dual-ring" />
          </div>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <div className="">
          <Lead className="text-center text-gray-200">
            19 seconds, a new record{" "}
            {firstName ? firstName.firstName : ", w00t"}!
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
  };

  return (
    <Fragment>
      {renderFormContent()}
      <Turnstile
        sitekey={CLOUDFLARE_SITE_KEY}
        onVerify={async (token) => {
          // Simulating verification process delay
          await new Promise((resolve) => setTimeout(resolve, 3000));
          if (token) {
            setVerified(true);
          }
        }}
        refreshExpired="auto"
      />
    </Fragment>
  );
}

export default ConfirmForm;
