import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

import { GlowingButton, Lead } from "@/components/ui";
import { usePreferenceContext } from "@/context/ReaderPerferencesContext";
import {
  FirstNameInfo,
  FirstNameStepSchema,
} from "@/lib/validation/validations";
import { PreferenceContextState } from "@/types/types";

function submitForm(
  firstName: string,
  setFormData: Dispatch<SetStateAction<PreferenceContextState>>,
  setStep: Dispatch<SetStateAction<number>>,
) {
  setFormData((prev) => ({
    data: {
      email: prev.data.email,
      dataFields: {
        ...prev.data.dataFields,
        firstName: {
          firstName,
        },
      },
    },
  }));
  setStep((prev) => prev + 1);
}

interface NameInputFormProps {
  firsNameForm: UseFormReturn<
    {
      firstName: string;
    },
    any,
    undefined
  >;
  defaultValue: string;
  onSubmit(firstName: FirstNameInfo): void;
}

function NameInputForm({
  firsNameForm,
  defaultValue,
  onSubmit,
}: NameInputFormProps) {
  return (
    <div>
      <div className="">
        <Lead className="text-center text-gray-200">
          👋🏾 What should we call you?
        </Lead>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={firsNameForm.handleSubmit(onSubmit)}>
          <label className="sr-only">First Name</label>
          <div className="mx-auto max-w-md">
            <input
              className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 px-2 py-2 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:outline-none focus:ring-pink"
              defaultValue={defaultValue}
              placeholder="Enter your first name"
              aria-label="What's your first name?."
              {...firsNameForm.register("firstName")}
            />
            {firsNameForm.formState.errors.firstName && (
              <div className="mt-1 text-red-600">
                <small>{firsNameForm.formState.errors.firstName.message}</small>
              </div>
            )}
          </div>

          <div className="mt-10 flex justify-center">
            <GlowingButton ariaLabel="Go to next step" type="submit" autoWidth>
              Next
            </GlowingButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function PreferencesFirstNameForm({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const firsNameForm = useForm<FirstNameInfo>({
    resolver: zodResolver(FirstNameStepSchema),
  });
  const { setFormData, data } = usePreferenceContext();

  function onSubmit(firstName: FirstNameInfo) {
    submitForm(firstName.firstName, setFormData, setStep);
  }

  useEffect(() => {
    firsNameForm.setValue("firstName", data.dataFields.firstName.firstName);
  }, [data.dataFields.firstName.firstName, firsNameForm]);

  return (
    <div>
      <p className="mb-10 text-center text-xs uppercase leading-6 tracking-wider text-gray-400">
        Change name | Click next to skip
      </p>
      <NameInputForm
        defaultValue={data.dataFields.firstName.firstName}
        firsNameForm={firsNameForm}
        onSubmit={onSubmit}
      />
    </div>
  );
}
