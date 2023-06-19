"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ReactTurnstile from "@/components/turnstile";
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

  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(data: Message) {
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
          await axios.post("/api/contact-slack", {
            fullName: `${data.firstName} ${data.lastName}`,
            email: data.email,
            message: data.message,
          });
          setIsSuccess(true);
          reset();
        }
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
    <div className="px-4 py-12 mx-auto lg:py-26 sm:px-8 sm:py-20">
      <div className="mb-10 text-center">
        <H3 className="text-gray-200">Together with Hey Rebekah</H3>
        <Lead className="max-w-lg pt-5 mx-auto text-center text-gray-400">
          Fill out the form below, and we'll get back to you pronto - faster
          than a chicken lays an egg.
        </Lead>
      </div>
      <form
        ref={formRef}
        id="#contact"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl col-span-2 mx-auto md:col-span-1">
        <div className="grid grid-cols-2 gap-7 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              placeholder="First name"
              {...(register && register("firstName"))}
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
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
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
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
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
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
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
            {errors.message && (
              <div className="mt-1 text-red-600">
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>
          <ReactTurnstile />
          <div className="max-w-xl col-span-2 mx-auto">
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
