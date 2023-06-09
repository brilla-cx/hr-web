/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import FormProvider, { useFormData } from "@/components/providers/form-context";
import { GlowingButton, Input, Lead } from "@/components/ui";
import BackButton, { Checkbox, Radio } from "@/components/ui/forms";

import { getUserInfo, updateUser } from "./actions.js";

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
  "Other",
];

export default function Preferences() {
  const [formStep, setFormStep] = useState(1);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div>
      <FormProvider>
        <div className="mx-auto mb-48 mt-12 max-w-xl">
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
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (values) => {
    setLoading(true);
    const result = await getUserInfo(values.email);

    if (result.error) {
      console.log("Error fetching data");
    }

    const { email, dataFields } = result || {};

    const data = {
      email,
      firstName: dataFields.firstName,
      topic1: dataFields.topic1,
      topic2: dataFields.topic2,
      topic3: dataFields.topic3,
      topic4: dataFields.topic4,
    };
    setFormValues(data);
    nextFormStep();
    setLoading(false);
  };

  return (
    <div className={formStep === 1 ? "block" : "hidden"}>
      <div className="">
        <Lead className="text-center text-gray-200">
          Enter your email address
        </Lead>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only">Email Address</label>
          <Input
            className="w-full border-neutral-200/10 bg-slate-900 text-white placeholder:text-gray-600"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            aria-label="Enter your email address to subscribe"
            register={register}
            errors={errors}
            validations={{
              required: "Oops, we need your email address please.",
              maxLength: 80,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
          />

          <div className="mt-10 flex justify-center">
            <GlowingButton type="submit" autoWidth disabled={loading}>
              {loading ? "Just a sec..." : "Change my Preferences"}
            </GlowingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
// Enter Name
function StepTwo({ formStep, nextFormStep }) {
  const { setFormValues, data } = useFormData();
  console.log(data);
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm({ mode: "all" });

  useEffect(() => {
    setValue("firstName", data.firstName);
  }, [data, setValue]);

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 2 ? "block" : "hidden"}>
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
            name="firstName"
            type="text"
            required
            // defaultValue={data.firstName}
            placeholder="Enter your first name"
            aria-label="What's your first name?."
            // onChange={handleChange}
            register={register}
            errors={errors}
            validations={{
              required:
                "We gotta call you something firstName is kind of weird.",
              maxLength: 30,
            }}
          />

          <div className="mt-10 flex justify-center">
            <GlowingButton type="submit" autoWidth>
              Next
            </GlowingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
// Primary Topic
function StepThree({ formStep, nextFormStep }) {
  const { setFormValues, data } = useFormData();
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm({ mode: "all" });

  useEffect(() => {
    setValue("topic1", data.topic1);
  }, [data, setValue]);

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 3 ? "block" : "hidden"}>
      <p className="mb-10 text-center text-xs uppercase leading-6 tracking-wider text-gray-400">
        Change your Primary Topic
      </p>
      <div className="">
        <Lead className="text-center text-gray-200">
          Tell us your primay topic of inteest, we{"\u2018"}ll filter the rest.
        </Lead>
      </div>
      <div className="mt-5">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only">First Name</label>
          <div className="grid gap-6 sm:grid-cols-2">
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
                    required:
                      "Please choose a primary topic of interest, or Other.",
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
              Next
            </GlowingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
// Secondary Topics
function StepFour({ formStep, prevFormStep, nextFormStep }) {
  const { setFormValues, data } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    setValue,
  } = useForm({ mode: "all" });

  const topicsSelected = watch("topics");

  useEffect(() => {
    setValue("topics", [data.topic2, data.topic3, data.topic4]);
  }, [data, setValue]);

  const onSubmit = (values) => {
    if (Array.isArray(values.topics)) {
      const formattedValues = values.topics.reduce((result, topic, index) => {
        result[`topic${index + 2}`] = topic;
        return result;
      }, {});

      setFormValues(formattedValues);
    }

    nextFormStep();
  };

  const validateCheckboxGroup = (value) => {
    if (value && value.length > 3) {
      return "Please select up to 3 topics.";
    }
    return true;
  };

  const filteredTopics = TopicsArray.filter((topic) => topic !== data.topic1);

  return (
    <div className={formStep === 4 ? "block" : "hidden"}>
      <p className="mb-10 text-center text-xs uppercase leading-6 tracking-wider text-gray-400">
        Change secondary topics
      </p>
      <div className="">
        <Lead className="text-center text-gray-200">
          Awesome. Select three more topics you{"\u2018"}d like to keep tabs on.
        </Lead>
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
            <BackButton onClick={prevFormStep} />
            <GlowingButton type="submit" autoWidth>
              {topicsSelected ? "Next" : "Skip"}
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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitForm = async () => {
    setLoading(true);
    const { email, ...rest } = data;
    const result = await updateUser(email, rest);

    if (!result.success) {
      console.error("Error fetching data");
    }
    router.push("/signup/confirm");
  };

  return (
    <div className={formStep === 5 ? "block" : "hidden"}>
      <div className="">
        <Lead className="text-center text-gray-200">
          Ready to change your preferences,{" "}
          {data.firstName ? data.firstName : "w00t"}!
        </Lead>
        <p className="mt-3 text-center text-gray-400">
          Click submit, and we will update your preferences.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <GlowingButton
          type="submit"
          autoWidth
          onClick={submitForm}
          disabled={loading}>
          {(loading && "Just a sec...") || "Update my Preferences"}
        </GlowingButton>
      </div>
    </div>
  );
}
