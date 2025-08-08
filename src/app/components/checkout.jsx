"use client";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// import { fetchClientSecret } from "../actions/stripe";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);
console.log("another one", process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

async function fetchClientSecret() {
  const body = { priceId: "price_1RtCJiRXomxvbbb3U1707cID" };
  const res = await fetch("/app/api/checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Failed to fetch client secret");
  const { clientSecret } = await res.json();
  // .then((res) => console.log("howdy", res));
  console.log(999, clientSecret);
  return clientSecret;
}

export default function Checkout() {
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
