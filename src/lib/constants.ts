/* eslint-disable camelcase */
import { FeedOptions } from "rss";

export const SITE_URL: string = "https://heyrebekah.com";

export const ITERABLE_TOKEN: string =
  process.env.VERCEL_ENV === "production"
    ? (process.env.ITERABLE_PRODUCTION_TOKEN as string)
    : (process.env.ITERABLE_TOKEN as string);

// Iterable List ID
// In Production, We use 2559467 (Abandoned Signup) List to add the user when they complete Step 1
// The Iterable automation will then move the user to 2410209 (Newsletter Pending) and sends them a double-optin
// Once they have completed double-optin, user will be moved to 2424559 (Newsletter Activated) where they actually get emails
// For local testing we can keep using the 2462911 (Sandbox) list id

export const ITERABLE_LIST_ID: number =
  process.env.VERCEL_ENV === "production" ? 2559467 : 2462911;

// CLOUDFLARE
export const CF_TURNSTILE_RESPONSE = "cf-turnstile-reponse";
export const CLOUDFLARE_SITE_KEY: string = process.env
  .NEXT_PUBLIC_CLOUDFLARE_SITE_KEY as string;
export const CLOUDFLARE_SECRET_KEY: string = process.env
  .CLOUDFLARE_SECRET_KEY as string;

export const FEED_OPTIONS: FeedOptions = {
  title: "Hey Rebekah | Like Morning Brew for AI",
  site_url: SITE_URL,
  feed_url: `${SITE_URL}/gists`,
  image_url: `${SITE_URL}/logo.png`,
  pubDate: new Date(),
  copyright: `&copy; ${new Date().getFullYear()} Hey Rebekah is a product of BRIL.LA, LLC. &nbsp;All Rights Reserved.`,
};
