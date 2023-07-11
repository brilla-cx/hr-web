import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

import PrivacyCopy from "@/components/shared/PrivacyCopy/PrivacyCopy";
import { EmailVerificationForm } from "@/components/shared/reactTurnstile/ReactTurnstile";
import { GlowingButton, Lead } from "@/components/ui";
import { EmailInfo } from "@/lib/validation/validations";

interface EmailFormType {
  id?: string;
  emailForm: UseFormReturn<
    {
      email: string;
    },
    any,
    undefined
  >;
  leadText: string;
  loading: boolean;
  loadingText: string;
  buttonText: string;
  setVerified: Dispatch<SetStateAction<boolean>>;
  verified: boolean;
  onSubmit(data: EmailInfo): Promise<void>;
}

function EmailFormSubmit({
  leadText,
  emailForm,
  loadingText,
  buttonText,
  setVerified,
  loading,
  verified,
  onSubmit,
  id,
}: EmailFormType) {
  return (
    <form id={id} onSubmit={emailForm.handleSubmit(onSubmit)}>
      <Lead className="text-center text-gray-200">
        {leadText}
        <sup className="text-pink">&nbsp;*</sup>
      </Lead>
      <div className="mt-5">
        {verified ? (
          <>
            <input
              id="emailSignup"
              className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
              placeholder="Enter your email"
              {...emailForm.register("email")}
            />
            {emailForm.formState.errors.email && (
              <div className="mt-1 text-red-600">
                <small>{emailForm.formState.errors.email.message}</small>
              </div>
            )}
            <div className="mt-10 flex justify-center">
              <GlowingButton
                ariaLabel="Go to next step"
                type="submit"
                autoWidth>
                {loading ? loadingText : buttonText}
              </GlowingButton>
            </div>
          </>
        ) : (
          <EmailVerificationForm setVerified={setVerified} />
        )}
        <PrivacyCopy className="mt-8 !text-center" />
      </div>
    </form>
  );
}

export default EmailFormSubmit;
