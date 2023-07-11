"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ReactTurnstile from "@/components/shared/reactTurnstile/ReactTurnstile";
import { GlowingButton, H3, Lead } from "@/components/ui";

interface Message {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const schema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().nonempty("Message is required"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Message>({
    resolver: zodResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [verified, setVerified] = useState(false);

  async function onSubmit(data: Message) {
    try {
      if (verified) {
        setIsLoading(true);
        await axios.post("/api/contact-slack", {
          fullName: `${data.firstName} ${data.lastName}`,
          email: data.email,
          message: data.message,
        });
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.error(error);
      reset();
    } finally {
      setIsLoading(false);
      reset();
    }
    return null;
  }
  return (
    <div className="lg:py-26 mx-auto px-4 py-12 sm:px-8 sm:py-20">
      <div className="mb-10 text-center">
        <H3 className="text-gray-200">Together with Hey Rebekah</H3>
        <Lead className="mx-auto max-w-lg pt-5 text-center text-gray-400">
          Fill out the form below, and we'll get back to you reasonably quickly.
          Seriously though, we will.
        </Lead>
      </div>
      <form
        id="#contact"
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-2 mx-auto max-w-xl md:col-span-1">
        <div className="grid grid-cols-2 gap-7 md:gap-10">
          <div className="col-span-2 md:col-span-1">
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
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              placeholder="Last name"
              {...(register && register("lastName"))}
              className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
            {errors.lastName && (
              <div className="mt-1 text-red-600">
                <small>{errors.lastName.message}</small>
              </div>
            )}
          </div>
          <div className="col-span-2">
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
          <div className="col-span-2">
            <textarea
              {...register("message")}
              placeholder="Your message to HeyRebekah"
              className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
            {errors.message && (
              <div className="mt-1 text-red-600">
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>
          <ReactTurnstile setVerified={setVerified} />
          <div className="col-span-2 mx-auto max-w-xl">
            <GlowingButton aria-label="Submit Form" type="submit">
              {isLoading ? "Loading..." : "Send"}
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

export default ContactForm;
