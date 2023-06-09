import GlowingButton from "components/ui/glowingButton";
import Image from "next/image";
import Link from "next/link";

import { H5 } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";
import LogoImage from "@/public/hey-rebekah-logo.svg";

export default function Footer() {
  return (
    <footer
      className="border-t border-neutral-200/10 bg-midnight"
      aria-labelledby="footer-heading"
      role="contentinfo">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 py-16 mx-auto border-l border-r max-w-7xl border-neutral-200/10 sm:pt-24 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <Image
            src={LogoImage}
            alt="A logo for Hey Rebekah, the best damn freelance newsletter on the west side."
            className="w-auto h-10"
          />
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-400 uppercase font-display">
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
                <h3 className="text-sm font-semibold leading-6 text-gray-400 uppercase font-display">
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
                <h3 className="text-sm font-semibold leading-6 text-gray-400 uppercase font-display">
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
                <h3 className="text-sm font-semibold leading-6 text-gray-400 uppercase font-display">
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
      </div>
      <div className="max-w-full pb-4 border-t border-neutral-200/10">
        <div className="p-8 mx-auto border-l border-r max-w-7xl border-neutral-200/10">
          <div className="mx-auto mb-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <H5 as="h2" className="text-gray-200">
                {" "}
                Subscribe to our newsletter
              </H5>
              <p className="mt-1 mb-4 text-sm leading-6 text-gray-400">
                The latest news and resources sent to your inbox. Hot and fresh
                everyday.
              </p>
            </div>
            <GlowingButton variant="link" href="/signup" id="footer">
              Level Up
            </GlowingButton>
          </div>
          <div className="pb-4 mx-auto md:flex md:items-center md:justify-between">
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-2 md:mt-0">
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

            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
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
      </div>
    </footer>
  );
}

const navigation = {
  resources: [
    { name: "Archives", href: "/gists" },
    { name: "Juno AI", href: "/juno" },
    { name: "Community", href: "/community" },
    { name: "Tools", href: "/built-with" },
    { name: "Book Club", href: "/books" },
    { name: "Help", href: "/contact" },
  ],
  company: [
    { name: "Advertise", href: "/advertise" },
    { name: "Partner", href: "/partners" },
    { name: "About", href: "/about" },
    { name: "Rebekah Radice", href: "/rebekah-radice" },
    { name: "Social Blog", href: "/social-blog" },
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
    { name: "Accessibility", href: "/accessibility" },
    { name: "Editorial Policy", href: "/editorial-policy" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};
