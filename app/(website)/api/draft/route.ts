/* eslint-disable require-await */
// route handler with secret and slug
import { draftMode } from "next/headers";
// import { redirect } from "next/navigation";

const STUDIO_URL_DEV = "http://localhost:3333";
const STUDIO_URL_PROD = "https://heyrebekah.sanity.studio";

const WEBSITE_URL_DEV = "http://localhost:3000";
const WEBSITE_URL_PROD = "https://hr-web-beta.vercel.app";

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams, hostname } = new URL(request.url);
  const slug = searchParams.get("slug");
  const type = searchParams.get("type") || "gists";

  const fetchParam = searchParams.get("fetch");

  // console.log(request);

  if (!slug) {
    return new Response("Please generate the slug to start live preview", {
      status: 401,
    });
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable();

  if (fetchParam) {
    const corsOrigin = hostname.includes("localhost")
      ? STUDIO_URL_DEV
      : STUDIO_URL_PROD;

    // Create preview URL
    const baseOrigin = hostname.includes("localhost")
      ? WEBSITE_URL_DEV
      : WEBSITE_URL_PROD;
    const absoluteUrl = new URL(`/${type}/${slug}`, baseOrigin).toString();

    // Create preview headers from the setPreviewData above
    const previewHeader = request.headers.get("Set-Cookie");
    const previewHeaderString = previewHeader?.toString();
    const headers = new Headers();
    headers.set("credentials", "include");
    headers.set("Cookie", previewHeaderString || "");
    headers.set("Access-Control-Allow-Origin", corsOrigin);
    headers.set("Access-Control-Allow-Credentials", "true");

    const previewHtml = await fetch(absoluteUrl, { headers })
      .then((previewRes) => previewRes.text())
      .catch((err) => console.error(err));

    return new Response(previewHtml || null, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        ...Object.fromEntries(headers),
      },
    });
  }

  return new Response(null, {
    status: 307,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      Location: `/${type}/${slug}`,
    },
  });
}
