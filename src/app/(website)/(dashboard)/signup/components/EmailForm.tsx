import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

import { useSignupContext } from "@/context/SignupContext";
import { addUserToList } from "@/lib/server/actions";
import { EmailInfo, EmailStepSchema } from "@/lib/validation/validations";

import EmailFormSubmit from "../../components/EmailForm/EmailForm";

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
    <EmailFormSubmit
      emailForm={emailForm}
      leadText="What's your email address?"
      loadingText="hold on ...."
      buttonText="Next"
      loading={loading}
      setVerified={setVerified}
      verified={verified}
      onSubmit={onSubmit}
    />
  );
}
