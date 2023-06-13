export const SITE_URL: string = "https://hr-web-beta.vercel.app";

export const ITERABLE_TOKEN: string =
  process.env.NODE_ENV === "production"
    ? (process.env.ITERABLE_PRODUCTION_TOKEN as string)
    : (process.env.ITERABLE_TOKEN as string);

// Iterable List ID
// In Production, We use 2559467 (Abandoned Signup) List to add the user when they complete Step 1
// The Iterable automation will then move the user to 2410209 (Newsletter Pending) and sends them a double-optin
// Once they have completed double-optin, user will be moved to 2424559 (Newsletter Activated) where they actually get emails
// For local testing we can keep using the 2462911 (Sandbox) list id

export const ITERABLE_LIST_ID: number =
  process.env.NODE_ENV === "production" ? 2559467 : 2462911;
