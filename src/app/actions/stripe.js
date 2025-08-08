"use server";

import { headers } from "next/headers";

import { stripe } from "@/lib/stripe";

export async function fetchClientSecret() {
  const origin = (await headers()).get("origin");
  //   console.log("im origin", origin);
  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        // Provide the exact Price ID (for example, price_1234) of
        // the product you want to sell
        price: "price_1RtCJiRXomxvbbb3U1707cID",
        quantity: 1,
      },
    ],
    mode: "payment",
    // return_url:
    //   "https://playground-ff532a.webflow.io/demo/return?session_id={CHECKOUT_SESSION_ID}",
    return_url: `${origin}/app/return?session_id={CHECKOUT_SESSION_ID}`,
  });
  console.log(session);
  return session.client_secret;
}
