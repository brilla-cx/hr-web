"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import GlowingButton from "@/components/ui/glowingButton";
import { H3, Lead } from "@/components/ui/typography";

import ReactTurnstile from "../../reactTurnstile/ReactTurnstile";

export interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  company: string;
  message: string;
  companyUrl: string;
}

const leadSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  jobTitle: z.string().min(3, "Job title is required"),
  message: z.string().min(10, "Message is required"),
});

interface Props {
  formId: string;
}

function EmailForm(props: Props) {
  const emailFormHook = useForm<LeadData>({
    resolver: zodResolver(leadSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [verified, setVerified] = useState(false);

  const onSubmit = async (data: LeadData) => {
    try {
      if (verified) {
        setIsLoading(true);
        await axios.post(`/api/close-com`, data);
        setIsSuccess(true);
      }
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
    return null;
  };

  const errors = emailFormHook.formState.errors;
  const register = emailFormHook.register;

  return (
    <div className="lg:py-26 px-4 py-12 sm:px-8 sm:py-20">
      <form id={props.formId} onSubmit={emailFormHook.handleSubmit(onSubmit)}>
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-4 text-center">
            <H3 as="h2" className="!text-center text-gray-200">
              Together with Hey Rebekah
            </H3>
            <Lead className="mx-auto max-w-lg pt-5 text-center text-gray-400">
              We&apos;re excited you&apos;re considering a partnership with us!
              Fill out the form below, and we&apos;ll get back to you pronto -
              faster than a chicken lays an egg.
            </Lead>
          </div>
          <div className="col-span-4 md:col-span-2">
            <input
              type="text"
              placeholder="First name"
              {...(register && register("firstName"))}
              className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
            {errors.firstName && (
              <div className="mt-1 text-red-600">
                <small>{errors.firstName.message}</small>
              </div>
            )}
          </div>
          <div className="col-span-4 md:col-span-2">
            <input
              type="text"
              placeholder="Last name"
              {...register("lastName")}
              className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
            {errors.lastName && (
              <div className="mt-1 text-red-600">
                <small>{errors.lastName.message}</small>
              </div>
            )}
          </div>
          <div className="col-span-4 md:col-span-2">
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
            {errors.email && (
              <div className="mt-1 text-red-600">
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>
          <div className="col-span-4 md:col-span-2">
            <input
              type="text"
              placeholder="Phone number"
              {...register("phoneNumber")}
              className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
            {errors.phoneNumber && (
              <div className="mt-1 text-red-600">
                <small>{errors.phoneNumber.message}</small>
              </div>
            )}
          </div>
          <div className="col-span-4 md:col-span-2">
            <input
              type="text"
              placeholder="Job title"
              {...register("jobTitle")}
              className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
            {errors.jobTitle && (
              <div className="mt-1 text-red-600">
                <small>{errors.jobTitle.message}</small>
              </div>
            )}
          </div>
          <div className="col-span-4 md:col-span-2">
            <input
              type="text"
              placeholder="Company name"
              {...register("company")}
              className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
          </div>
          <div className="col-span-4">
            <input
              type="text"
              placeholder="Website"
              {...register("companyUrl")}
              className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
          </div>
          <div className="col-span-4">
            <textarea
              {...register("message")}
              placeholder="Your message"
              className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
            {errors.message && (
              <div className="mt-1 text-red-600">
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>
          <ReactTurnstile setVerified={setVerified} />
          <div className="col-span-4 mx-auto pt-6">
            <GlowingButton type="submit" autoWidth>
              {isLoading ? "Loading..." : "Let's make it happen"}
            </GlowingButton>
            {isSuccess && (
              <p className="mt-2 text-green-500">
                Form submitted successfully!
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
