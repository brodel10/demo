import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const { priceId } = await req.json();
  const origin = req.headers.get("origin") || "";
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    success_url: `${origin}/demo/return?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/demo/`,
  });
  return NextResponse.json({ clientSecret: session.client_secret });
}
