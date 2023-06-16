/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import FormProvider, { useFormData } from "@/components/providers/form-context";
import ReactTurnstile from "@/components/turnstile";
import { GlowingButton, Input, Lead } from "@/components/ui";
import BackButton, { Checkbox, Radio } from "@/components/ui/forms";
import hoverStyles from "@/lib/hover";
import { addUserToList, updateUser } from "@/lib/server/actions";
import { cx } from "@/lib/utils";
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

export default function MultiStepForm() {
  const [formStep, setFormStep] = useState(1);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div className="">
      <FormProvider>
        <div className="max-w-xl mx-auto">
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

  const formRef = useRef(null);

  const onSubmit = async (values) => {
    try {
      const ref = await formRef.current;

      if (ref) {
        const formData = new FormData(formRef.current);
        const token = formData.get("cf-turnstile-response");
        const res = await fetch("/api/turnstile-verify", {
          method: "POST",
          body: JSON.stringify({ token }),
          headers: {
            "content-type": "application/json",
          },
        });
        const tokenResponse = await res.json();
        if (tokenResponse.data.success) {
          setLoading(true);
          setFormValues(values);
          const result = await addUserToList(values.email);
          if (result.error) {
            throw new Error("Fail to send to iterable");
          }
          nextFormStep();
        }
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className={formStep === 1 ? "block" : "hidden"}>
      <p className="mb-10 text-xs leading-6 tracking-wider text-center text-gray-400 uppercase">
        Step 1 of 4 | Required
      </p>
      <div className="">
        <Lead className="text-center text-gray-200">
          What{"\u2018"}s your email address?
        </Lead>
      </div>
      <div className="mt-5">
        <form ref={formRef} noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only">Email Address</label>
          <Input
            className="w-full text-white border-neutral-200/10 bg-slate-900 placeholder:text-gray-600"
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
          <ReactTurnstile />
          <div className="flex justify-center mt-10">
            <GlowingButton type="submit" autoWidth disabled={loading}>
              {loading ? "Hold on..." : "Next"}
            </GlowingButton>
          </div>
          <p className="mt-6 text-xs leading-6 text-center text-gray-400">
            We care about your{" "}
            <Link href="/privacy" className={cx("font-bold", hoverStyles)}>
              privacy
            </Link>
            .
          </p>
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
      <p className="mb-10 text-xs leading-6 tracking-wider text-center text-gray-400 uppercase">
        Step 2 of 4 | Required
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
            name="firstName"
            type="text"
            required
            placeholder="Enter your first name"
            aria-label="What's your first name?."
            register={register}
            errors={errors}
            validations={{
              required:
                "We gotta call you something firstName is kind of weird.",
              maxLength: 30,
            }}
          />

          <div className="flex justify-center mt-10">
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
      <p className="mb-10 text-xs leading-6 tracking-wider text-center text-gray-400 uppercase">
        Step 3 of 4 | Required
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

          <div className="flex justify-center mt-10">
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
  } = useForm({ mode: "all" });

  const topicsSelected = watch("topics");

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
      <p className="mb-10 text-xs leading-6 tracking-wider text-center text-gray-400 uppercase">
        Step 4 of 4 | Optional
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
          <div className="flex justify-center mt-10">
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
      throw new Error("Failed to submit the form");
    }
    router.push("/signup/confirm");
  };

  return (
    <div className={formStep === 5 ? "block" : "hidden"}>
      <div className="">
        <Lead className="text-center text-gray-200">
          19 seconds, a new record {data.firstName ? data.firstName : ", w00t"}!
        </Lead>
        <p className="mt-3 text-center text-gray-400">
          Click submit, then please check your inbox to verify your email
          address.
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <GlowingButton
          type="submit"
          autoWidth
          onClick={submitForm}
          disabled={loading}>
          {(loading && "Just a sec...") || "Submit"}
        </GlowingButton>
      </div>
    </div>
  );
}
