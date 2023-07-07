import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { GlowingButton, Input, Lead } from "@/components/ui";
import { usePreferenceContext } from "@/context/ReaderPerferencesContext";
import {
  FirstNameInfo,
  FirstNameStepSchema,
} from "@/lib/validation/validations";

export default function PreferencesFirstNameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FirstNameInfo>({
    resolver: zodResolver(FirstNameStepSchema),
  });
  const { setFormData, data, setStep } = usePreferenceContext();

  function onSubmit(firstName: FirstNameInfo) {
    setFormData((prev) => ({
      data: {
        ...prev.data,
        dataFields: {
          ...prev.data.dataFields,
          firstName,
        },
      },
    }));
    setStep((prev) => prev + 1);
  }

  useEffect(() => {
    setValue("firstName", data.dataFields.firstName.firstName);
  }, [data, setValue]);

  return (
    <div>
      <p className="mb-10 text-center text-xs uppercase leading-6 tracking-wider text-gray-400">
        Change name | Click next to skip
      </p>
      <div className="">
        <Lead className="text-center text-gray-200">
          👋🏾 What should we call you?
        </Lead>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only">First Name</label>
          <Input
            className="w-full border-neutral-200/10 bg-slate-900 text-white placeholder:text-gray-600"
            defaultValue={data.dataFields.firstName.firstName}
            placeholder="Enter your first name"
            aria-label="What's your first name?."
            register={register}
            {...register("firstName")}
            errors={errors}
          />
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
