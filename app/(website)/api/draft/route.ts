/* eslint-disable require-await */
// route handler with secret and slug
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const type = searchParams.get("type") || "gists";

  if (!slug || !type) {
    return new Response("Invalid type or slug", { status: 401 });
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable();

  return new Response(null, {
    status: 307,
    headers: {
      Location: `/${type}/${slug}`,
    },
  });
}
