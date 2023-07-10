import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

import { GlowingButton, Lead } from "@/components/ui";
import { useSignupContext } from "@/context/SignupContext";
import {
  FirstNameInfo,
  FirstNameStepSchema,
} from "@/lib/validation/validations";

function FirstNameForm({
  nextStep,
}: {
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstNameInfo>({
    resolver: zodResolver(FirstNameStepSchema),
  });

  const { setFirstName } = useSignupContext();

  const nextForm = (data: FirstNameInfo) => {
    setLoading(true);
    setFirstName(data);
    nextStep((prev) => prev + 1);
    setLoading(false);
  };

  return (
    <div>
      <div className="">
        <Lead className="text-center text-gray-200">
          👋🏾 What should we call you?<sup className="text-pink">&nbsp;*</sup>
        </Lead>
      </div>
      <div className="mt-5">
        <form
          id="#firstnamesignupform"
          noValidate
          onSubmit={handleSubmit(nextForm)}>
          <label className="sr-only">First Name</label>
          <input
            id="firstnamesignup"
            placeholder="Enter your first name"
            aria-label="What's your first name?."
            className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 px-2 py-2 text-white placeholder:text-gray-600 focus:border-pink focus:ring-pink"
            {...register("firstName")}
          />
          {errors.firstName && (
            <div className="mt-1 text-red-600">
              <small>{errors.firstName.message}</small>
            </div>
          )}
          <div className="mt-10 flex justify-center">
            <GlowingButton ariaLabel="Go to next step" type="submit" autoWidth>
              {loading ? "hold on ...." : "Next"}
            </GlowingButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FirstNameForm;
