/* eslint-disable react/jsx-no-bind */
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import Turnstile from "react-turnstile";

import { GlowingButton, Lead } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";
import { useSignupContext } from "@/context/SignupContext";
import { CLOUDFLARE_SITE_KEY } from "@/lib/constants";
import hoverStyles from "@/lib/hover";
import { addUserToList } from "@/lib/server/actions";
import { cx } from "@/lib/utils";
import { EmailInfo, EmailStepSchema } from "@/lib/validation/validations";

function EmailForm({
  nextStep,
}: {
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

  async function onSubmit(data: EmailInfo) {
    setLoading(true);
    if (!verified) {
      return;
    }
    try {
      setEmail(data);
      await addUserToList(data.email)
        .then(() => {
          nextStep((prev) => prev + 1);
        })
        .catch(() => {
          throw new Error("Fail to send to iterable");
        });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

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
                className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 px-2 py-2 text-white placeholder:text-gray-600 focus:border-pink focus:ring-pink"
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
                <GlowingButton
                  ariaLabel="Go to next step"
                  type="submit"
                  autoWidth>
                  {loading ? "hold on ...." : "Next"}
                </GlowingButton>
              </div>
            </>
          ) : (
            <div className="space-y-3 text-center text-gray-400">
              <div className="flex flex-col items-center gap-5">
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-1/2" />
              </div>
            </div>
          )}
          <p className="mt-6 text-center text-xs leading-6 text-gray-400">
            We care about your{" "}
            <Link href="/privacy" className={cx("font-bold", hoverStyles)}>
              privacy
            </Link>
            .
          </p>
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
        </div>
      </form>
    </>
  );
}

export default EmailForm;
