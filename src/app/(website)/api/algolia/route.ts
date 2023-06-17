import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const headersList = headers();
  const signature = headersList.get(SIGNATURE_HEADER_NAME) || null;

  const secret = process.env.SANITY_REVALIDATE_SECRET;

  console.log("signature", signature);

  if (!secret || !signature) {
    return NextResponse.json(
      {
        success: false,
        message: "secret or signature not found",
      },
      { status: 401 }
    );
  }

  const body = await req.json();

  const validSignature = isValidSignature(
    JSON.stringify(body),
    signature,
    secret
  );

  if (!validSignature) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid signature",
      },
      { status: 401 }
    );
  }
  console.log("success");
  return NextResponse.json("success", {
    status: 200,
  });
}

// export async function POST(req) {
//   console.log("im here baby");

//   const data = await req.json();

//   const secret = process.env.SANITY_REVALIDATE_SECRET;

//   const { body, isValidSignature } = await parseBody(req, secret);

//   if (!isValidSignature === false) {
//     const message = "Invalid signature";
//     console.log(message);
//     return new Response(null, {
//       status: 400,
//     });
//   }
//   //   const sanityBody = body as SanityDocument & {
//   //     slug: { current: string };
//   //   };

//   console.log(data, body);

//   return new Response(null, {
//     status: 200,
//   });
// }

// export async function POST(req: Request) {
//   console.log("im here baby");

//   const data = await req.json();

//   const secret = process.env.SANITY_REVALIDATE_SECRET;

//   const { body, isValidSignature } = await parseBody(data, secret);

//   return new Response(null, {
//     status: 200,
//   });
// }
