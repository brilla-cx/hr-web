/* eslint-disable require-await */
// route handler with secret and slug
import { draftMode } from "next/headers";
// import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const STUDIO_URL_DEV = "http://localhost:3333";
const STUDIO_URL_PROD = "https://heyrebekah.sanity.studio";

const WEBSITE_URL_DEV = "http://localhost:3000";
const WEBSITE_URL_PROD = "https://heyrebekah.com";

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams, hostname } = new URL(request.url);
  const slug = searchParams.get("slug");
  const type = searchParams.get("type") || "gists";

  const fetchParam = searchParams.get("fetch");

  const corsOrigin = hostname.includes("localhost")
    ? STUDIO_URL_DEV
    : STUDIO_URL_PROD;

  // Create preview URL
  const baseOrigin = hostname.includes("localhost")
    ? WEBSITE_URL_DEV
    : WEBSITE_URL_PROD;

  if (!slug) {
    return new Response("Please generate the slug to start live preview", {
      status: 401,
      headers: {
        "Access-Control-Allow-Origin": corsOrigin,
      },
    });
  }

  if (fetchParam) {
    const absoluteUrl = new URL(`/${type}/${slug}`, baseOrigin).toString();
    const previewHtml = await fetch(absoluteUrl, {
      headers: { "Access-Control-Allow-Origin": corsOrigin },
    })
      .then((previewRes) => previewRes.text())
      .catch((err) => console.error(err));

    return new Response(previewHtml || null, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": corsOrigin,
      },
    });
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable();

  const cookieStore = cookies();
  const cookie = cookieStore.get("__prerender_bypass");

  const headers = new Headers();
  headers.append("credentials", "include");
  headers.append("Cookie", `${cookie?.name}=${cookie?.value}` || "");
  headers.append("Access-Control-Allow-Origin", corsOrigin);
  headers.append("Access-Control-Allow-Credentials", "true");

  return new Response(null, {
    status: 307,
    headers: {
      ...Object.fromEntries(headers),
      Location: type == "legal" ? `/${slug}` : `/${type}/${slug}`,
    },
  });
}
