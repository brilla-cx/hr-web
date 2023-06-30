"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

import { Lead } from "@/components/ui";
import PerferencesContextProvider from "@/context/ReaderPerferencesContext";
import { useSignupContext } from "@/context/SignupContext";
import { getUserInfo } from "@/lib/server/actions";
import { EmailInfo, EmailStepSchema } from "@/lib/validation/signupStepperForm";

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
      const result = await getUserInfo(data.email).catch(() => {
        throw new Error("Fail to send to iterable");
      });

      const userInfo = {
        email: result.email,
        firstName: result.firstName,
        ...result,
      };
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <form id="#emailformprefrences">
      <div className="">
        <Lead className="text-center text-gray-200">
          What{"\u2018"}s your email address?
          <sup className="text-pink">&nbsp;*</sup>
        </Lead>
      </div>
    </form>
  );
}

function FirstNameForm({
  nextStep,
}: {
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  return (
    <form id="#emailformprefrences">
      <div className="">
        <Lead className="text-center text-gray-200">
          What{"\u2018"}s your email address?
          <sup className="text-pink">&nbsp;*</sup>
        </Lead>
      </div>
    </form>
  );
}

function PrimaryTopicForm({
  nextStep,
}: {
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  return (
    <form id="#emailformprefrences">
      <div className="">
        <Lead className="text-center text-gray-200">
          What{"\u2018"}s your email address?
          <sup className="text-pink">&nbsp;*</sup>
        </Lead>
      </div>
    </form>
  );
}

function OtheTopicsForm({
  nextStep,
}: {
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  return (
    <form id="#emailformprefrences">
      <div className="">
        <Lead className="text-center text-gray-200">
          What{"\u2018"}s your email address?
          <sup className="text-pink">&nbsp;*</sup>
        </Lead>
      </div>
    </form>
  );
}

function FormSubmit({
  nextStep,
}: {
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  return (
    <form id="#emailformprefrences">
      <div className="">
        <Lead className="text-center text-gray-200">
          What{"\u2018"}s your email address?
          <sup className="text-pink">&nbsp;*</sup>
        </Lead>
      </div>
    </form>
  );
}

const PrefrencesForm2 = () => {
  const [step, setStep] = useState(1);

  function renderFormStep() {
    switch (step) {
      case 1:
        return <EmailForm nextStep={setStep} />;
      case 2:
        return <FirstNameForm nextStep={setStep} />;
      case 3:
        return <PrimaryTopicForm nextStep={setStep} />;
      case 4:
        return <OtheTopicsForm nextStep={setStep} />;
      case 5:
        return <FormSubmit nextStep={setStep} />;
      default:
        break;
    }

    return null;
  }

  return (
    <PerferencesContextProvider>
      <div className="mx-auto max-wxl">{renderFormStep()}</div>
    </PerferencesContextProvider>
  );
};

export default PrefrencesForm2;
