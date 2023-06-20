import Image from "next/image";
import Link from "next/link";

import { H5 } from "@/components/ui";
import GlowingButton from "@/components/ui/glowingButton";
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
      <div className="mx-auto max-w-7xl border-l border-r border-neutral-200/10 px-6 py-16 sm:pt-24 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <Image
            src={LogoImage}
            alt="A logo for Hey Rebekah, the best damn freelance newsletter on the west side."
            className="h-8 w-auto"
          />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase leading-6 text-gray-400">
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
                        aria-label={`Go to ${item.name} page`}
                        className={cx(
                          "text-lg leading-6 text-gray-200",
                          hoverStyles
                        )}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold uppercase leading-6 text-gray-400">
                  Company
                </h3>
                <ul role="list" aria-label="Company" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        aria-label={`Go to ${item.name} page`}
                        className={cx(
                          "text-lg leading-6 text-gray-200",
                          hoverStyles
                        )}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase leading-6 text-gray-400">
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
                        aria-label={`Navigate to ${item.name} page`}
                        className={cx(
                          "text-lg leading-6 text-gray-200",
                          hoverStyles
                        )}
                        target="_blank"
                        rel="noopener noreferrer">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold uppercase leading-6 text-gray-400">
                  Legal
                </h3>
                <ul role="list" aria-label="Legal" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        aria-label={`Go to ${item.name} page`}
                        className={cx(
                          "text-lg leading-6 text-gray-200",
                          hoverStyles
                        )}>
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
      <div className="max-w-full border-t border-neutral-200/10 pb-4">
        <div className="mx-auto max-w-7xl border-l border-r border-neutral-200/10 p-8">
          <div className="mx-auto mb-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <H5 as="h2" className="text-gray-200">
                {" "}
                Subscribe to our newsletter
              </H5>
              <p className="mb-4 mt-1 text-sm leading-6 text-gray-400">
                The latest news and resources sent to your inbox. Hot and fresh
                everyday.
              </p>
            </div>
            <GlowingButton
              variant="link"
              href="/signup"
              id="footer"
              aria-label="Go to sign-up form">
              Level Up
            </GlowingButton>
          </div>
          <div className="mx-auto pb-4 md:flex md:items-center md:justify-between">
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
              <br className="md:hidden" />
              &nbsp;All Rights Reserved.
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
    { name: "Built With", href: "/built-with" },
    { name: "Book Club", href: "/books" },
    { name: "Subscribe", href: "/signup" },
    { name: "Help", href: "/contact" },
  ],
  company: [
    { name: "Advertise", href: "/contact" },
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
      ariaLabel: "LinkedIn - this link opens in a new tab",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/rebekahradice/",
      ariaLabel: "Instagram - this link opens in a new tab",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/c/RebekahradiceLLC/videos",
      ariaLabel: "YouTube - this link opens in a new tab",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/rebekahradicellc",
      ariaLabel: "Facebook - this link opens in a new tab",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/rebekahradice",
      ariaLabel: "Twitter - this link opens in a new tab",
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/rebekahradice/",
      ariaLabel: "Pinterest - this link opens in a new tab",
    },
    {
      name: "TiKTok",
      href: "https://www.tiktok.com/@rebekahradice",
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
