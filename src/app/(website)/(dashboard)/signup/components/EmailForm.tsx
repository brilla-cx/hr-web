import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";

import { EmailVerificationForm } from "@/components/shared/reactTurnstile/ReactTurnstile";
import { GlowingButton, Input, Lead } from "@/components/ui";
import { useSignupContext } from "@/context/SignupContext";
import hoverStyles from "@/lib/hover";
import { addUserToList } from "@/lib/server/actions";
import { cx } from "@/lib/utils";
import { EmailInfo, EmailStepSchema } from "@/lib/validation/validations";

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

interface EmailFormProps {
  register: UseFormRegister<{
    email: string;
  }>;
  errors: FieldErrors<{
    email: string;
  }>;
  loading: boolean;
}

function EmailInputForm({ register, errors, loading }: EmailFormProps) {
  return (
    <>
      <label htmlFor="email">Email</label>
      <Input
        id="emailSignup"
        className="w-full border-neutral-200/10 bg-slate-900 text-white placeholder:text-gray-600"
        placeholder="Enter your email"
        aria-label="Enter your email address to subscribe"
        {...register("email")}
      />
      {errors.email && (
        <div className="mt-1 text-red-600">
          <small>{errors.email.message}</small>
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <GlowingButton ariaLabel="Go to next step" type="submit" autoWidth>
          {loading ? "hold on ...." : "Next"}
        </GlowingButton>
      </div>
    </>
  );
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
            />
          ) : (
            <EmailVerificationForm setVerified={setVerified} />
          )}
          <p className="mt-6 text-center text-xs leading-6 text-gray-400">
            We care about your{" "}
            <Link href="/privacy" className={cx("font-bold", hoverStyles)}>
              privacy
            </Link>
            .
          </p>
        </div>
      </form>
    </>
  );
}
