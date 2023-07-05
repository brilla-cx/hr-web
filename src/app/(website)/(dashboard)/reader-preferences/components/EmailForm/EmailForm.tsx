import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import Turnstile from "react-turnstile";

import { GlowingButton, Lead } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";
import { usePreferenceContext } from "@/context/ReaderPerferencesContext";
import { CLOUDFLARE_SITE_KEY } from "@/lib/constants";
import { getUserInfo } from "@/lib/server/actions";
import { EmailInfo, EmailStepSchema } from "@/lib/validation/validations";
import { PreferenceContextState } from "@/types/types";

export default function EmailForm({
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

  const { setPreferencesData } = usePreferenceContext();

  async function onSubmit(data: EmailInfo) {
    setLoading(true);
    if (!verified) {
      return;
    }
    try {
      await getUserInfo(data.email)
        .catch(() => {
          throw new Error("Fail to send to iterable");
        })
        .then((res) => {
          const { email, dataFields } = res || {};

          const userInfo: PreferenceContextState = {
            data: {
              email: { email },
              dataFields: {
                firstName: { firstName: dataFields.firstName },
                topic1: { topic1: dataFields.topic1 },
                topic2: dataFields.topic2,
                topic3: dataFields.topic3,
                topic4: dataFields.topic4,
              },
            },
          };
          setPreferencesData(userInfo);
          setLoading(false);
          nextStep((prev) => prev + 1);
        });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
     
      <div >
        <form id="email" onSubmit={handleSubmit(onSubmit)}>
          {verified ? (
            <>
             <div className="mb-5">
        <Lead className="text-center text-gray-200">
          Enter your email address
        </Lead>
          </div>
              <label className="sr-only">Email Address</label>
              <input
                type="text"
                placeholder="Email"
                {...register("email")}
                className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
              <div className="flex justify-center mt-10">
                <GlowingButton
                  type="submit"
                  autoWidth
                  // @ts-ignore
                  disabled={loading}
                  ariaLabel={
                    loading ? "Please wait..." : "Change my Preferences"
                  }>
                  {loading ? "Just a sec..." : "Change my Preferences"}
                </GlowingButton>
              </div>
            </>
          ) : (
            <div className="space-y-3 text-center text-gray-400">
              <div className="flex flex-col items-center gap-5">
                <Skeleton className="w-1/2 h-5" />
                <Skeleton className="w-full h-10" />
                <Skeleton className="w-1/2 h-10" />
              </div>
            </div>
          )}
          <Turnstile
            sitekey={CLOUDFLARE_SITE_KEY}
            // eslint-disable-next-line react/jsx-no-bind
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
        </form>
      </div>
  );
}
