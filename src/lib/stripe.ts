import "server-only";

import Stripe from "stripe";

console.log(1, process.env.STRIPE_SECRET_KEY);
console.log(2, process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ||
    process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ||
    "sk_test"
);
