/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import FormProvider, { useFormData } from "@/components/providers/form-context";
import { GlowingButton, Input } from "@/components/ui";
import { Checkbox, Radio } from "@/components/ui/forms";

const TopicsArray = [
  "Accounting/Finance",
  "Artificial Intelligence",
  "Business Consulting",
  "Copywriting",
  "Creative",
  "Design",
  "Customer Service",
  "Digital Marketing",
  "Project Management",
  "Running Your Business",
  "SEO",
  "Social Media Management",
  "Web/Mobile/Software",
];

export default function MultiStepForm() {
  const [formStep, setFormStep] = useState(1);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div>
      <FormProvider>
        <div className="mx-auto mb-16 max-w-xl">
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
          <StepThree
            formStep={formStep}
            prevFormStep={prevFormStep}
            nextFormStep={nextFormStep}
          />
          <StepFour
            formStep={formStep}
            prevFormStep={prevFormStep}
            nextFormStep={nextFormStep}
          />
          <FormSubmit
            formStep={formStep}
            prevFormStep={prevFormStep}
            nextFormStep={nextFormStep}
          />
        </div>
      </FormProvider>
    </div>
  );
}
// Enter Email
function StepOne({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  //   console.log(formStep);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "onTouched" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 1 ? "block" : "hidden"}>
      <div className="">
        <h2 className="font-heading text-center text-lg font-bold text-white">
          What’s your email address?
        </h2>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only">Email Address</label>
          <Input
            className="w-full border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-gray-600"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            aria-label="Enter your email address to subscribe"
            register={register}
            errors={errors}
            validations={{
              required: "Email Address is required",
              maxLength: 80,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
          />

          <div className="mt-10 flex justify-center">
            <GlowingButton type="submit" autoWidth>
              Continue
            </GlowingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
// Enter Name
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
      <div className="">
        <h2 className="font-heading text-center text-lg font-bold text-white">
          What should we call you?
        </h2>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only">First Name</label>
          <Input
            className="w-full border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-gray-600"
            name="firstName"
            type="text"
            required
            placeholder="eg: Rebekah"
            aria-label="Enter your name friends call you."
            register={register}
            errors={errors}
            validations={{
              required: "We need your name, Captain!",
              maxLength: 80,
            }}
          />

          <div className="mt-10 flex justify-center">
            <GlowingButton type="submit" autoWidth>
              Continue
            </GlowingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
// Primary Topic
function StepThree({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
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
    <div className={formStep === 3 ? "block" : "hidden"}>
      <div className="">
        <h2 className="font-heading text-center text-lg font-bold text-white">
          Choose a Primary Topic
        </h2>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only">First Name</label>
          <div className="grid gap-4 sm:grid-cols-2">
            {TopicsArray.map((item, index) => (
              <div key={index}>
                <Radio
                  required
                  label={item}
                  value={item}
                  name="topic1"
                  register={register}
                  errors={errors}
                  validations={{
                    required: "Please choose your Primary Topic",
                  }}
                />
              </div>
            ))}{" "}
          </div>

          {errors.topic1 && (
            <div className="mt-3 text-center text-red-600">
              <small>{errors.topic1.message}</small>
            </div>
          )}

          <div className="mt-10 flex justify-center">
            <GlowingButton type="submit" autoWidth>
              Continue
            </GlowingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
// Secondary Topics
function StepFour({ formStep, nextFormStep }) {
  const { setFormValues, data } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm({ mode: "all" });

  const topicsSelected = watch("topics");

  const onSubmit = (values) => {
    const formattedValues = values.topics.reduce((result, topic, index) => {
      result[`topic${index + 2}`] = topic;
      return result;
    }, {});

    setFormValues(formattedValues);
    nextFormStep();
  };

  const validateCheckboxGroup = (value) => {
    if (value && value.length > 3) {
      return "Please select maximum of three topics";
    }
    return true;
  };

  const filteredTopics = TopicsArray.filter((topic) => topic !== data.topic1);

  return (
    <div className={formStep === 4 ? "block" : "hidden"}>
      <div className="">
        <h2 className="font-heading text-center text-lg font-bold text-white">
          Awesome. Select three more topics you love (optional).
        </h2>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only">First Name</label>

          <div className="grid gap-4 sm:grid-cols-2">
            {filteredTopics.map((item, index) => (
              <div key={index}>
                <Checkbox
                  required
                  label={item}
                  value={item}
                  name="topics"
                  register={register}
                  errors={errors}
                  validations={{
                    validate: validateCheckboxGroup,
                  }}
                />
              </div>
            ))}
          </div>

          {errors.topics && (
            <div className="mt-3 text-center text-red-600">
              <small>{errors.topics.message}</small>
            </div>
          )}

          <div className="mt-10 flex justify-center">
            <GlowingButton type="submit" autoWidth>
              {topicsSelected ? "Continue" : "Skip"}
            </GlowingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
// Submit (iterable)
function FormSubmit({ formStep, nextFormStep, prevFormStep }) {
  const { data } = useFormData();

  const router = useRouter();

  const submitForm = async () => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }
      const result = await response.json();
      if (result.success) {
        router.push("/signup/confirm");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={formStep === 5 ? "block" : "hidden"}>
      <div className="">
        <h2 className="font-heading text-center text-lg font-bold text-white">
          This is your moment of Truth,{" "}
          {data.firstName ? data.firstName : "Captain!"}
        </h2>
        <p className="mt-3 text-center text-gray-500">
          We are ready to cheer for you!
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <GlowingButton type="submit" autoWidth onClick={submitForm}>
          Confirm & Signup
        </GlowingButton>
      </div>
    </div>
  );
}
