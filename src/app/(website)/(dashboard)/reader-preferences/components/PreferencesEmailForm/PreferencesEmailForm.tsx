import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import { EmailVerificationForm } from "@/components/shared/reactTurnstile/ReactTurnstile";
import { Lead } from "@/components/ui";
import { usePreferenceContext } from "@/context/ReaderPerferencesContext";
import { getUserInfo } from "@/lib/server/actions";
import { EmailInfo, EmailStepSchema } from "@/lib/validation/validations";
import { PreferenceContextState } from "@/types/types";

import EmailInputForm from "../../../components/EmailForm/EmailForm";

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

export default function PreferencesEmailForm({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const prefEmailForm = useForm<EmailInfo>({
    resolver: zodResolver(EmailStepSchema),
  });
  const { setPreferencesData, loading, setLoading, verified, setVerified } =
    usePreferenceContext();

  async function onSubmit(data: EmailInfo) {
    setLoading(true);
    await submitForm(data, setPreferencesData, setLoading, setStep);
  }

  return (
    <div>
      <form id="email" onSubmit={prefEmailForm.handleSubmit(onSubmit)}>
        <div className="mb-5">
          <Lead className="text-center text-gray-200">
            Enter your email address
          </Lead>
        </div>
        {verified ? (
          <EmailInputForm
            register={prefEmailForm.register}
            errors={prefEmailForm.formState.errors}
            loading={loading}
            loadingText="Just a sec.."
            buttonText="Change my Preferences"
          />
        ) : (
          <EmailVerificationForm setVerified={setVerified} />
        )}
      </form>
    </div>
  );
}
