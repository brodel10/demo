// // app/api/session/route.ts

// import { stripe } from "@/lib/stripe";
// import { NextResponse } from "next/server";

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const session_id = searchParams.get("session_id");

//   if (!session_id) {
//     return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
//   }

//   try {
//     const session = await stripe.checkout.sessions.retrieve(session_id, {
//       expand: ["line_items", "payment_intent"],
//     });

//     return NextResponse.json(session);
//   } catch (err: any) {
//     return NextResponse.json(
//       { error: err.message || "Failed to retrieve session" },
//       { status: 500 }
//     );
//   }
// }

export async function GET() {
  return Response.json({
    status: "ok",
    timestamp: Date.now(),
  });
}
