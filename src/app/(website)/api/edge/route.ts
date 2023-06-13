import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: Request) {
  // const request = await req.json();
  console.log("request", req);

  return NextResponse.json(req);
}
