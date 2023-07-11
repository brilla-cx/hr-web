import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

import PrivacyCopy from "@/components/shared/PrivacyCopy/PrivacyCopy";
import { EmailVerificationForm } from "@/components/shared/reactTurnstile/ReactTurnstile";
import { Lead } from "@/components/ui";
import { useSignupContext } from "@/context/SignupContext";
import { addUserToList } from "@/lib/server/actions";
import { EmailInfo, EmailStepSchema } from "@/lib/validation/validations";

import EmailInputForm from "../../components/EmailForm/EmailForm";

async function submitForm(
  data: EmailInfo,
  setLoading: Dispatch<SetStateAction<boolean>>,
  nextStep: (value: SetStateAction<number>) => void,
  setEmail: Dispatch<
    SetStateAction<{
      email: string;
    }>
  >
) {
  try {
    setLoading(true);
    setEmail(data);
    await addUserToList(data.email).then(() => {
      nextStep((prev) => prev + 1);
    });
    setLoading(false);
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
}

export default function EmailForm({
  nextStep,
}: {
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const emailForm = useForm<EmailInfo>({
    resolver: zodResolver(EmailStepSchema),
  });

  const { setEmail, verified, setVerified } = useSignupContext();

  async function onSubmit(data: EmailInfo) {
    await submitForm(data, setLoading, nextStep, setEmail);
  }

  return (
    <>
      <form id="#emailformsignup" onSubmit={emailForm.handleSubmit(onSubmit)}>
        <div className="">
          <Lead className="text-center text-gray-200">
            What{"\u2018"}s your email address?
            <sup className="text-pink">&nbsp;*</sup>
          </Lead>
        </div>
        <div className="mt-5">
          {verified ? (
            <EmailInputForm
              register={emailForm.register}
              errors={emailForm.formState.errors}
              loading={loading}
              loadingText="hold on ...."
              buttonText="Next"
            />
          ) : (
            <EmailVerificationForm setVerified={setVerified} />
          )}
          <PrivacyCopy className="mt-8 !text-center" />
        </div>
      </form>
    </>
  );
}
