import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import ReactTurnstile from "@/components/shared/reactTurnstile/ReactTurnstile";
import { GlowingButton, Lead } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";
import { usePreferenceContext } from "@/context/ReaderPerferencesContext";
import { getUserInfo } from "@/lib/server/actions";
import { EmailInfo, EmailStepSchema } from "@/lib/validation/validations";
import { PreferenceContextState } from "@/types/types";

async function submitForm(
  data: EmailInfo,
  setPreferencesData: (newFormData: PreferenceContextState) => void,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setStep: Dispatch<SetStateAction<number>>
) {
  try {
    await getUserInfo(data.email).then((res) => {
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
      setStep((prev) => prev + 1);
    });
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
}

interface EmailFormProps {
  register: any;
  errors: any;
  loading: boolean;
}

function EmailForm({ register, errors, loading }: EmailFormProps) {
  return (
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
        className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
      />
      {errors.email && (
        <div className="mt-1 text-red-600">
          <small>{errors.email.message}</small>
        </div>
      )}
      <div className="mt-10 flex justify-center">
        <GlowingButton
          type="submit"
          autoWidth
          // @ts-ignore
          disabled={loading}
          ariaLabel={loading ? "Please wait..." : "Change my Preferences"}>
          {loading ? "Just a sec..." : "Change my Preferences"}
        </GlowingButton>
      </div>
    </>
  );
}

function EmailVerificationForm() {
  const { setVerified } = usePreferenceContext();
  return (
    <div className="space-y-3 text-center text-gray-400">
      <div className="flex flex-col items-center gap-5">
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-1/2" />
      </div>
      <ReactTurnstile setVerified={setVerified} />
    </div>
  );
}

export default function PreferencesEmailForm({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInfo>({
    resolver: zodResolver(EmailStepSchema),
  });
  const { setPreferencesData, loading, setLoading, verified } =
    usePreferenceContext();

  async function onSubmit(data: EmailInfo) {
    setLoading(true);
    await submitForm(data, setPreferencesData, setLoading, setStep);
  }

  return (
    <div>
      <form id="email" onSubmit={handleSubmit(onSubmit)}>
        {verified ? (
          <EmailForm register={register} errors={errors} loading={loading} />
        ) : (
          <EmailVerificationForm />
        )}
      </form>
    </div>
  );
}