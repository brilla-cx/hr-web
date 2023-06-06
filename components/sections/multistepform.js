/* eslint-disable react/jsx-no-bind */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import FormProvider, { useFormData } from "@/components/providers/form-context";
import { Input } from "@/components/ui";

export default function MultiStepForm() {
  const [formStep, setFormStep] = useState(1);

  const nextFormStep = () => setFormStep((formStep) => formStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div>
      <FormProvider>
        <StepOne
          formStep={formStep}
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
        />
        <StepTwo
          formStep={formStep}
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
        />

        <FormSubmit
          formStep={formStep}
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
        />

        <FormSuccess formStep={formStep} />
      </FormProvider>
    </div>
  );
}

function StepOne({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  //   console.log(formStep);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 1 ? "block" : "hidden"}>
      <div className="border-b border-gray-200 pb-5 ">
        <h2 className="font-heading text-lg font-bold">Personal Information</h2>
        <p className="text-sm text-gray-600">
          Please add your Personal Information
        </p>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            <label>Email Address</label>
            <Input
              type="email"
              name="email"
              register={register}
              errors={errors}
              validations={{
                required: "Email Address is required",
                maxLength: 80,
              }}
            />
          </div>
          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="bg-primary rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300">
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function StepTwo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  //   console.log(formStep);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 2 ? "block" : "hidden"}>
      <div className="border-b border-gray-200 pb-5 ">
        <h2 className="font-heading text-lg font-bold">Personal Information</h2>
        <p className="text-sm text-gray-600">
          Please add your Personal Information
        </p>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            <Input
              label="First Name"
              name="first_name"
              register={register}
              errors={errors}
              validations={{
                required: "First name is required",
                maxLength: 80,
              }}
            />
          </div>
          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="bg-primary rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300">
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormSuccess({ formStep }) {
  return (
    <div className={formStep === 4 ? "block" : "hidden"}>
      <div className=" flex flex-col items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-16 w-16 text-emerald-500">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h2 className="font-heading mt-2 text-xl">
          {" "}
          Success. Your form has been submitted!
        </h2>
        <p className="mx-auto  max-w-lg text-center text-gray-600">
          Thank you for submitting this form. Your information will be reviewed
          and processed with in few days.
        </p>
      </div>
    </div>
  );
}

function FormSubmit({ formStep, nextFormStep, prevFormStep }) {
  const { data } = useFormData();
  // console.log(formStep);

  const submitForm = () => {
    console.log(data);
    // alert("Form Submitted Successfully! ");
    nextFormStep();
  };

  return (
    <div className={formStep === 3 ? "block" : "hidden"}>
      <h2 className="font-heading text-start text-xl">
        Please confirm the details below!
      </h2>
      <p className="text-sm text-gray-600">
        Before submitting, please confirm the data. If you need any changes,
        click on the "Go Back" button.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
        {Object.entries(data).map(([key, value]) => (
          <div className="flex flex-col gap-1 capitalize" key={key}>
            <span className="text-sm text-gray-500">{key}</span>
            <p className="">{value || "-"}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between">
        <button
          type="button"
          className="rounded-lg bg-gray-200 px-5  py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100"
          onClick={prevFormStep}>
          Go Back
        </button>
        <button
          type="submit"
          onClick={submitForm}
          className="bg-primary rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300">
          Confirm & Submit
        </button>
      </div>
    </div>
  );
}
