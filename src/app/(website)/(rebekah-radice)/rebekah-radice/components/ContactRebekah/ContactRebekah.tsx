import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import React, { RefObject, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { z } from "zod";

import ReactTurnstile from "@/components/shared/reactTurnstile/ReactTurnstile";
import { GlowingButton, H3, Lead } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

interface Message {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const schema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().nonempty("Phone number is required"),
  message: z.string().nonempty("Message is required"),
});

interface Props {
  contactSectionRef: RefObject<HTMLDivElement>;
}

function ContactRebekah(props: Props) {
  const { contactSectionRef } = props;
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
        await axios.post("/api/rr-slack", {
          fullName: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phoneNumber: data.phoneNumber,
          message: data.message,
        });
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
    return null;
  }

  return (
    <div
      ref={contactSectionRef}
      className="lg:py-26 mx-auto px-4 py-12 sm:px-8 sm:py-20">
      <div className="grid grid-cols-2 gap-12">
        <div className="col-span-2 space-y-10 md:col-span-1">
          <div>
            <H3 className="pb-4 text-gray-200">Contact Rebekah Radice</H3>
            <Lead className="text-gray-400">
              Thanks for popping by. I would love to hear from you if you have
              any questions or just want to say hello.
            </Lead>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white">
              <AiFillMail />
              <Link
                href="mailto:np@heyrebekah.com?subject=Rebekah%20Radice%20Contact%20Form%20Inquiry"
                className={cx(hoverStyles)}>
                Email Rebekah Radice
              </Link>
            </div>
            <div className="flex items-center gap-2 text-white">
              <AiFillPhone className="text-white" />
              <Link href="tel:+1415727455213" className={cx(hoverStyles)}>
                (415) 727-4552 x13
              </Link>
            </div>
            <div className="flex items-center gap-2 text-white">
              <FaLocationArrow className="text-white" />
              <Lead>
                BRIL.LA, 1370 N. St. Andrews Place, Los Angeles, CA 90028
              </Lead>
            </div>
          </div>

          <div className="border-b-2 border-slate-900" />
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white">
              <AiFillLinkedin />
              <Link
                href="https://www.linkedin.com/in/rebekahradice/"
                target="_blank"
                className={cx(hoverStyles)}>
                Connect on LinkedIn
              </Link>
            </div>
            <div className="flex items-center gap-2 text-white">
              <AiFillInstagram />
              <Link
                href="https://www.instagram.com/rebekahradice/"
                target="_blank"
                className={cx(hoverStyles)}>
                Follow me on Instagram
              </Link>
            </div>
            <div className="flex items-center gap-2 text-white">
              <AiFillFacebook />
              <Link
                href="https://www.facebook.com/rebekahradicellc"
                target="_blank"
                className={cx(hoverStyles)}>
                Join me on Facebook
              </Link>
            </div>
            <div className="flex items-center gap-2 text-white">
              <AiFillTwitterCircle />
              <Link
                href="https://twitter.com/rebekahradice"
                target="_blank"
                className={cx(hoverStyles)}>
                Get my Tweets
              </Link>
            </div>
            <div className="flex items-center gap-2 text-white">
              <BsPinterest />
              <Link
                href="https://www.pinterest.com/rebekahradice/"
                target="_blank"
                className={cx(hoverStyles)}>
                See my Pins
              </Link>
            </div>
          </div>
        </div>
        <form
          id="#contact"
          onSubmit={handleSubmit(onSubmit)}
          className="col-span-2 md:col-span-1">
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
                {...register("lastName")}
                className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
              />
              {errors.lastName && (
                <div className="mt-1 text-red-600">
                  <small>{errors.lastName.message}</small>
                </div>
              )}
            </div>
            <div className="col-span-2 md:col-span-1">
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
            <div className="col-span-2 md:col-span-1">
              <input
                type="number"
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
            <div className="col-span-2">
              <textarea
                {...register("message")}
                placeholder="Your message to Rebekah"
                className="w-full rounded border-2 border-black border-neutral-200/10 bg-slate-900 text-gray-200 placeholder:text-zinc-400 focus:border-pink focus:ring-pink"
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>
            <ReactTurnstile setVerified={setVerified} />
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
    </div>
  );
}

export default ContactRebekah;
