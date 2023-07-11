import { FieldErrors, UseFormRegister } from "react-hook-form";

import { GlowingButton, Input } from "@/components/ui";

interface EmailFormProps {
  register: UseFormRegister<{
    email: string;
  }>;
  errors: FieldErrors<{
    email: string;
  }>;
  loading: boolean;
  loadingText: string;
  buttonText: string;
}

export default function EmailInputForm({
  register,
  loadingText,
  buttonText,
  errors,
  loading,
}: EmailFormProps) {
  return (
    <>
      <label htmlFor="email">Email</label>
      <Input
        id="emailSignup"
        className="w-full border-neutral-200/10 bg-slate-900 text-white placeholder:text-gray-600"
        placeholder="Enter your email"
        aria-label="Enter your email address to subscribe"
        {...register("email")}
      />
      {errors.email && (
        <div className="mt-1 text-red-600">
          <small>{errors.email.message}</small>
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <GlowingButton ariaLabel="Go to next step" type="submit" autoWidth>
          {loading ? loadingText : buttonText}
        </GlowingButton>
      </div>
    </>
  );
}
