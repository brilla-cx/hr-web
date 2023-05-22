import GlowingButton from "components/ui/glowingButton";
import Image from "next/image";
import Link from "next/link";

import { H5, Input } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";
import LogoImage from "@/public/hey-rebekah-logo.svg";

// T-10892 Refactor Tailwind Footer
export default function Footer() {
  return (
    <footer
      className="border-t border-neutral-200/10 bg-midnight"
      aria-labelledby="footer-heading"
      role="contentinfo">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="border-l border-r border-neutral-200/10 mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <Image
            src={LogoImage}
            alt="A logo for Hey Rebekah, the best damn freelance newsletter on the west side."
            className="h-10 w-auto"
          />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-display font-semibold leading-6 text-gray-400 uppercase">
                  Resources
                </h3>
                <ul
                  role="list"
                  aria-label="Resources"
                  className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cx(
                          "text-lg leading-6 text-gray-200",
                          hoverStyles
                        )}
                        aria-label={item.ariaLabel}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-display font-semibold leading-6 text-gray-400 uppercase">
                  Company
                </h3>
                <ul role="list" aria-label="Company" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cx(
                          "text-lg leading-6 text-gray-200",
                          hoverStyles
                        )}
                        aria-label={item.ariaLabel}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-display font-semibold leading-6 text-gray-400 uppercase">
                  Follow Us
                </h3>
                <ul
                  role="list"
                  aria-label="Follow Us"
                  className="mt-6 space-y-4">
                  {navigation.follow.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cx(
                          "text-lg leading-6 text-gray-200",
                          hoverStyles
                        )}
                        aria-label={item.ariaLabel}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-display font-semibold leading-6 text-gray-400 uppercase">
                  Legal
                </h3>
                <ul role="list" aria-label="Legal" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cx(
                          "text-lg leading-6 text-gray-200",
                          hoverStyles
                        )}
                        aria-label={item.ariaLabel}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <H5 className="text-gray-200"> Subscribe to our newsletter</H5>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form
            id="footer-subscribe"
            className="mt-6 gap-3 flex flex-col sm:flex-row sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              email
            </label>
            <Input
              size="sm"
              className="px-4 w-full md:w-60 text-sm bg-slate-900 border-neutral-200/10 text-gray-200"
              autoComplete="email"
              placeholder="Enter your email"
              required
              type="email"
              aria-label="Enter your email address to subscribe"
            />
            <GlowingButton
              form="subscribe-form"
              type="submit"
              variant="subscribe">
              Level Up
            </GlowingButton>
          </form>
        </div>
        <div className="mt-10 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-2 md:mt-0">
            &copy; {new Date().getFullYear()} Hey Rebekah is a product of
            <Link
              href="https://bril.la"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BRIL.LA - this link opens in a new tab"
              className={cx(hoverStyles)}>
              {" "}
              BRIL.LA, LLC.
            </Link>
            &nbsp;All rights reserved.
          </p>

          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            In Partnership with{" "}
            <Link
              href="https://web3creative.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Web3Creative - this link opens in a new tab"
              className={cx(hoverStyles)}>
              {" "}
              Web3Creative
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

const navigation = {
  resources: [
    { name: "Archives", href: "/gists" },
    { name: "Hey Rebekah AI", href: "/juno" },
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
      ariaLabel: "LinkedIn - this link opens in a new tab",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/rebekahradice/",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Instagram - this link opens in a new tab",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/c/RebekahradiceLLC/videos",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "YouTube - this link opens in a new tab",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/rebekahradicellc",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Facebook - this link opens in a new tab",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/rebekahradice",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Twitter - this link opens in a new tab",
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/rebekahradice/",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Pinterest - this link opens in a new tab",
    },
    {
      name: "TiKTok",
      href: "https://www.tiktok.com/@rebekahradice",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "TikTok - this link opens in a new tab",
    },
  ],
  legal: [
    { name: "Editorial Policy", href: "/editorial-policy" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};
