// @ts-nocheck

import { NextResponse } from "next/server";

import { ITERABLE_LIST_ID, ITERABLE_TOKEN } from "@/lib/constants";

export async function POST(request: Request) {
  const { email, ...rest } = await request.json();

  const url = "https://api.iterable.com/api/lists/subscribe";

  const postdata = {
    listId: ITERABLE_LIST_ID,
    subscribers: [
      {
        email: email,
        userId: email,
        dataFields: { ...rest },
        createNewFields: true,
      },
    ],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Api-Key": ITERABLE_TOKEN,
    },
    body: JSON.stringify(postdata),
  });

  const result = await response.json();

  if (result.successCount) {
    return NextResponse.json({
      success: true,
      message: "User subscribed successfully!",
      result,
    });
  }
  return new Response(
    JSON.stringify({
      success: false,
      message: "Something went wrong!",
      debug: result,
    }),
    {
      status: 400,
      headers: { "Content-Type": "application/json" },
    }
  );
}
