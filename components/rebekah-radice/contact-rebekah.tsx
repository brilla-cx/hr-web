import Link from "next/link";
import React from "react";
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

import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

import { GlowingButton, H3, Input, Lead, Textarea } from "../ui";

function ContactRebekah() {
  return (
    <div className="grid grid-cols-2 gap-12">
      <div className="space-y-10">
        <div>
          <H3 className="pb-4 text-gray-200">Contact Rebekah Radice</H3>
          <Lead className="text-gray-400">
            Thanks for popping by. I would love to hear from you if you have any
            questions or just want to say hello.
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
            <Link href="" className={cx(hoverStyles)}>
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
              href="mailto:np@heyrebekah.com?subject=Rebekah%20Radice%20Contact%20Form%20Inquiry"
              className={cx(hoverStyles)}>
              Connect on LinkedIn
            </Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <AiFillInstagram />
            <Link
              href="mailto:np@heyrebekah.com?subject=Rebekah%20Radice%20Contact%20Form%20Inquiry"
              className={cx(hoverStyles)}>
              Follow me on Instagram
            </Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <AiFillFacebook />
            <Link
              href="mailto:np@heyrebekah.com?subject=Rebekah%20Radice%20Contact%20Form%20Inquiry"
              className={cx(hoverStyles)}>
              Join me on Facebook
            </Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <AiFillTwitterCircle />
            <Link
              href="mailto:np@heyrebekah.com?subject=Rebekah%20Radice%20Contact%20Form%20Inquiry"
              className={cx(hoverStyles)}>
              Get my Tweets
            </Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <BsPinterest />
            <Link
              href="mailto:np@heyrebekah.com?subject=Rebekah%20Radice%20Contact%20Form%20Inquiry"
              className={cx(hoverStyles)}>
              See my ins
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Input
          className="w-full text-white border-neutral-200/10 bg-slate-900 placeholder:text-gray-600"
          name="firstName"
          placeholder="rebekah"
        />
        <Input
          className="w-full text-white border-neutral-200/10 bg-slate-900 placeholder:text-gray-600"
          name="firstName"
          placeholder="rebekah"
        />
        <Input
          className="w-full text-white border-neutral-200/10 bg-slate-900 placeholder:text-gray-600"
          name="firstName"
          placeholder="rebekah"
        />
        <Input
          className="w-full text-white border-neutral-200/10 bg-slate-900 placeholder:text-gray-600"
          name="firstName"
          placeholder="rebekah"
        />
        <Textarea
          name="message"
          placeholder="message"
          className="w-full col-span-2 text-white border-neutral-200/10 bg-slate-900 placeholder:text-gray-600"
        />
        <GlowingButton>Contact Renekah</GlowingButton>
      </div>
    </div>
  );
}

export default ContactRebekah;
