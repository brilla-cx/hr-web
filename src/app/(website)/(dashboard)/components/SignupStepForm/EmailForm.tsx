/* eslint-disable react/jsx-no-bind */
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Turnstile from "react-turnstile";

import { GlowingButton, Lead } from "@/components/ui";
import { useSignupContext } from "@/context/SignupContext";
import hoverStyles from "@/lib/hover";
import { addUserToList } from "@/lib/server/actions";
import { cx } from "@/lib/utils";
import { EmailInfo, EmailStepSchema } from "@/lib/validation/signupStepperForm";

function EmailForm({
  step,
  nextStep,
}: {
  step: number;
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [verified, setVerified] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInfo>({
    resolver: zodResolver(EmailStepSchema),
  });

  const { setEmail } = useSignupContext();

  const onSubmit = useCallback(
    async (data: EmailInfo) => {
      setLoading(true);
      if (!verified) {
        return;
      }
      try {
        setLoading(false);
        setEmail(data);
        await addUserToList(data.email)
          .then(() => {
            nextStep((prev) => prev + 1);
          })
          .catch(() => {
            throw new Error("Fail to send to iterable");
          });
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [verified]
  );

  return (
    <>
      <form id="#emailformsignup" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <Lead className="text-center text-gray-200">
            What{"\u2018"}s your email address?
            <sup className="text-pink">&nbsp;*</sup>
          </Lead>
        </div>
        <div className="mt-5">
          {verified ? (
            <>
              <label htmlFor="email">Email</label>
              <input
                className="w-full px-2 py-2 text-white border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-gray-600 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
                placeholder="Enter your email"
                aria-label="Enter your email address to subscribe"
                {...register("email")}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}

              <div className="flex justify-center mt-10">
                <GlowingButton
                  ariaLabel="Go to next step"
                  type="submit"
                  autoWidth>
                  {loading ? "hold on ...." : "Next"}
                </GlowingButton>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-200">loading...</p>
          )}
          <p className="mt-6 text-xs leading-6 text-center text-gray-400">
            We care about your{" "}
            <Link href="/privacy" className={cx("font-bold", hoverStyles)}>
              privacy
            </Link>
            .
          </p>
          <Turnstile
            sitekey="0x4AAAAAAAGJ7_kuqkyXcbDb"
            onVerify={async (token) => {
              await fetch("/api/turnstile-verify", {
                method: "POST",
                body: JSON.stringify({ token }),
                headers: {
                  "content-type": "application/json",
                },
              });
              if (token) {
                setVerified(true);
              }
            }}
            refreshExpired="auto"
          />
        </div>
      </form>
    </>
  );
}

export default EmailForm;
