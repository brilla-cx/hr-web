import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import { GlowingButton, Lead } from "@/components/ui";
import { useSignupContext } from "@/context/SignupContext";
import {
  FirstNameInfo,
  FirstNameStepSchema,
} from "@/lib/validation/signupStepperForm";

function FirstNameForm({
  step,
  nextStep,
}: {
  step: number;
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstNameInfo>({
    resolver: zodResolver(FirstNameStepSchema),
  });

  const { setFirstName } = useSignupContext();

  const nextForm = (data: FirstNameInfo) => {
    setFirstName(data);
    nextStep((prev) => prev + 1);
  };

  return (
    <div>
      <div className="">
        <Lead className="text-center text-gray-200">
          👋🏾 What should we call you?<sup className="text-pink">&nbsp;*</sup>
        </Lead>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(nextForm)}>
          <label className="sr-only">First Name</label>
          <input
            placeholder="Enter your first name"
            aria-label="What's your first name?."
            className="w-full px-2 py-2 text-white border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-gray-600 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            {...register("firstName")}
          />
          {errors.firstName && (
            <div className="mt-1 text-red-600">
              <small>{errors.firstName.message}</small>
            </div>
          )}
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

export default FirstNameForm;
