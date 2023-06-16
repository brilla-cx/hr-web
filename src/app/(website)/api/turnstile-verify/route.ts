import { NextResponse } from "next/server";

const endpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const secret = process.env.CLOUDFLARE_SECRET_KEY!;

export async function POST(request: Request, response: Response) {
  const { token } = await request.json();
  const body = `secret=${encodeURIComponent(
    secret
  )}&response=${encodeURIComponent(token)}`;

  const res = await fetch(endpoint, {
    method: "POST",
    body,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });

  const data = await res.json();
  return NextResponse.json({ data });
}
