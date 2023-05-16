/* eslint-disable require-await */
// route handler with secret and slug
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const type = searchParams.get("type") || "gists";

  // Enable Draft Mode by setting the cookie
  draftMode().enable();

  // Redirect to the path from the fetched post
  redirect(`/${type}/${slug}`);
}
