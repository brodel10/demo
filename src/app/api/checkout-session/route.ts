import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const { priceId } = await req.json();
  const origin = req.headers.get("origin") || "";
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    payment_method_types: ["card"],
    line_items: [
      {
        // Provide the exact Price ID (for example, price_1234) of
        // the product you want to sell
        price: "price_1RtCJiRXomxvbbb3U1707cID",
        quantity: 1,
      },
    ],
    mode: "payment",
    return_url: `${origin}/demo/return?session_id={CHECKOUT_SESSION_ID}`,
    // cancel_url: `${origin}/app/`,
  });
  return NextResponse.json({ clientSecret: session.client_secret });
}
