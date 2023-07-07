/* eslint-disable react/jsx-no-bind */
import React, { Fragment, useState } from "react";
import Turnstile from "react-turnstile";

import { GlowingButton, Lead } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";
import { useSignupContext } from "@/context/SignupContext";
import { CLOUDFLARE_SITE_KEY } from "@/lib/constants";

function ConfirmForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const { onSubmitAll, firstName } = useSignupContext();
  const [verified, setVerified] = useState<boolean>(false);

  async function onSubmit() {
    if (!verified) {
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
          <div className="space-y-3 text-center text-gray-400">
            <div className="flex flex-col items-center gap-5">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-10 w-1/2" />
            </div>
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
    </Fragment>
  );
}

export default ConfirmForm;
