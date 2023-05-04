import Image from "next/image";

import { Button, H5, Input } from "@/components/ui";
import LogoImage from "@/public/hey-rebekah-logo.svg";

export default function Footer() {
  return (
    // T-10084 Update Footer Styles
    <footer
      className="border-t-4 border-t-pink bg-black"
      aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <Image
            src={LogoImage}
            alt="Hey Rebekah Logo"
            className="h-10 w-auto"
          />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-display font-semibold leading-6 text-aqua uppercase">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-med leading-6 text-light-grey hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-display font-semibold leading-6 text-aqua uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-med leading-6 text-light-grey hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-display font-semibold leading-6 text-aqua uppercase">
                  Follow Us
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.follow.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-med leading-6 text-light-grey hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-display font-semibold leading-6 text-aqua uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-med leading-6 text-light-grey hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <H5 className="text-white"> Subscribe to our newsletter</H5>
            <p className="mt-1 text-sm leading-6 text-light-grey">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-6 gap-3 flex flex-col sm:flex-row sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Input
              size="sm"
              className="w-full md:w-60 text-sm"
              autoComplete="email"
              placeholder="Enter your email"
              required
              type="email"
            />
            <Button variant="alternate">Join Us</Button>
          </form>
        </div>
        <div className="mt-8 border-t border-light-grey pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-xs leading-5 text-gray-300 md:order-2 md:mt-0">
            &copy; {new Date().getFullYear()} Hey Rebekah is a product of
            <a
              href="https://bril.la"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
              {" "}
              BRIL.LA, LLC.
            </a>
            &nbsp;All rights reserved.
          </p>

          <p className="mt-8 text-xs leading-5 text-gray-300 md:order-1 md:mt-0">
            In Partnership with{" "}
            <a
              href="https://web3creative.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
              Web3Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

const navigation = {
  resources: [
    { name: "Archives", href: "/gists" },
    {
      name: "Hey Rebekah AI",
      href: "https://app.heyrebekah.com",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    { name: "Community", href: "/community" },
    { name: "Discounts", href: "/built-with" },
    { name: "Help", href: "/contact" },
  ],
  company: [
    { name: "Advertise", href: "/advertise" },
    { name: "Partner", href: "/partner-program" },
    { name: "About", href: "/about" },
    { name: "Rebekah Radice", href: "/rebekah-radice" },
    { name: "Contact", href: "/contact" },
  ],
  follow: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rebekahradice/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/rebekahradice/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/c/RebekahradiceLLC/videos",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/rebekahradicellc",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/rebekahradice",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/rebekahradice/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "TiKTok",
      href: "https://www.tiktok.com/@rebekahradice",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
  legal: [
    { name: "Editorial Policy", href: "/editorial-policy" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};
