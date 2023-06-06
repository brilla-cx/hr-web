/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
"use client";

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
  } = useForm({ mode: "all" });

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
            className="w-full border-neutral-200/10 bg-slate-900 text-gray-200"
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
            className="w-full border-neutral-200/10 bg-slate-900 text-gray-200"
            name="firstName"
            type="text"
            required
            placeholder="Johnas"
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
    console.log("values", values);
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 3 ? "block" : "hidden"}>
      <div className="">
        <h2 className="font-heading text-center text-lg font-bold text-white">
          What should we call you?
        </h2>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only">First Name</label>

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
          ))}

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
  } = useForm({ mode: "all" });

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
          What should we call you?
        </h2>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only">First Name</label>

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
                  required: "We need your name, Captain!",
                  validate: validateCheckboxGroup,
                }}
              />
            </div>
          ))}

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

function FormSubmit({ formStep, nextFormStep, prevFormStep }) {
  const { data } = useFormData();

  const submitForm = () => {
    console.log(data);
    // alert("Form Submitted Successfully! ");
    nextFormStep();
  };

  return (
    <div className={formStep === 5 ? "block" : "hidden"}>
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
