import { NextResponse } from "next/server";

export const runtime = "edge";

// eslint-disable-next-line require-await
export async function GET(req: Request) {
  // const request = await req.json();
  // eslint-disable-next-line no-console
  console.log("request", req);

  return NextResponse.json(req);
}
