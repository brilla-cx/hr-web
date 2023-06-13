export const SITE_URL: string = "https://hr-web-beta.vercel.app";

export const ITERABLE_TOKEN: string =
  process.env.NODE_ENV === "production"
    ? (process.env.ITERABLE_PRODUCTION_TOKEN as string)
    : (process.env.ITERABLE_TOKEN as string);
