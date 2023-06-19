"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ReactTurnstile from "@/components/turnstile";
import { GlowingButton } from "@/components/ui";

interface Message {
  fullName: string;
  email: string;
  message: string;
}

const schema = z.object({
  fullName: z.string().nonempty("Full name is required"),
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
            fullName: data.fullName,
            email: data.email,
            message: data.message,
          });
          setIsSuccess(true);
          reset();
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
    return null;
  }
  return (
    <div>
      <form
        ref={formRef}
        id="#contact"
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-2 md:col-span-1">
        <div className="grid grid-cols-2 gap-7 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              placeholder="First name"
              {...(register && register("fullName"))}
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
            {errors.fullName && (
              <div className="mt-1 text-red-600">
                <small>{errors.fullName.message}</small>
              </div>
            )}
          </div>
          <div className="col-span-2 md:col-span-1">
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
              placeholder="Your message to Rebekah"
              className="w-full text-gray-200 border-2 border-black rounded border-neutral-200/10 bg-slate-900 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
            />
            {errors.message && (
              <div className="mt-1 text-red-600">
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>
          <ReactTurnstile />
          <div className="col-span-2">
            <GlowingButton aria-label="Submit Form" type="submit">
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

export default ContactForm;
