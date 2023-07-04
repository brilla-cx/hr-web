import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";

import { GlowingButton, Input, Lead } from "@/components/ui";
import { usePreferenceContext } from "@/context/ReaderPerferencesContext";
import {
  FirstNameInfo,
  FirstNameStepSchema,
} from "@/lib/validation/validations";

export default function FirstNameForm({
  nextStep,
}: {
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FirstNameInfo>({
    resolver: zodResolver(FirstNameStepSchema),
  });

  const { setFormData, data } = usePreferenceContext();

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
    nextStep((prev) => prev + 1);
  }

  useEffect(() => {
    setValue("firstName", data.dataFields.firstName.firstName);
  }, [data, setValue]);

  return (
    <div>
      <p className="mb-10 text-xs leading-6 tracking-wider text-center text-gray-400 uppercase">
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
            className="w-full text-white border-neutral-200/10 bg-slate-900 placeholder:text-gray-600"
            defaultValue={data.dataFields.firstName.firstName}
            placeholder="Enter your first name"
            aria-label="What's your first name?."
            register={register}
            {...register("firstName")}
            errors={errors}
          />
          <div className="flex justify-center mt-10">
            <GlowingButton ariaLabel="Go to next step" type="submit" autoWidth>
              Next
            </GlowingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
