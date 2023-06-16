import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CLOUDFLARE_SITE_KEY } from "@/lib/constants";

import GlowingButton from "./glowingButton";
import { H3, Lead } from "./typography";

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
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().nonempty("Phone number is required"),
  jobTitle: z.string().nonempty("Job title is required"),
  message: z.string().nonempty("Message is required"),
});

function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadData>({
    resolver: zodResolver(leadSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (data: LeadData) => {
    try {
      const ref = formRef.current;
      if (ref) {
        const formData = new FormData(formRef.current!);
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
          setIsLoading(true);
          await axios.post(`/api/close-com`, data);
          setIsSuccess(true);
        }
      }
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
    return null;
  };
  return (
    <div className="px-4 py-12 lg:py-26 sm:px-8 sm:py-20">
      <form ref={formRef} id="#partner-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid max-w-3xl grid-cols-2 gap-10 mx-auto md:grid-cols-4">
          <div className="col-span-4 text-center">
            <H3 as="h2" className="!text-center text-gray-200">
              Together with Hey Rebekah
            </H3>
            <Lead className="max-w-lg pt-5 mx-auto text-center text-gray-400">
              We're excited you're considering a partnership with us! Fill out
              the form below, and we'll get back to you pronto - faster than a
              chicken lays an egg.
            </Lead>
          </div>
          <div className="col-span-4 md:col-span-2">
            <input
              type="text"
              placeholder="rebekah"
              {...(register && register("firstName"))}
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
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
              placeholder="Radice"
              {...register("lastName")}
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
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
              placeholder="email"
              {...register("email")}
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
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
              placeholder="phoneNumber"
              {...register("phoneNumber")}
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
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
              placeholder="jobTitle"
              {...register("jobTitle")}
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
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
              placeholder="company"
              {...register("company")}
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
          </div>
          <div className="col-span-4">
            <input
              type="text"
              placeholder="companyUrl"
              {...register("companyUrl")}
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
          </div>
          <div className="col-span-4">
            <textarea
              {...register("message")}
              placeholder="Message"
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
            {errors.message && (
              <div className="mt-1 text-red-600">
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>
          <Turnstile
            siteKey={CLOUDFLARE_SITE_KEY}
            options={{
              action: "submit-form",
              size: "invisible",
            }}
            scriptOptions={{
              appendTo: "body",
            }}
          />
          <div className="col-span-4 pt-6 mx-auto">
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
