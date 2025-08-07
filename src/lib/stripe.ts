import "server-only";

import Stripe from "stripe";

if (process.env.NODE_ENV === "production" && !process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing SERVICE_API_KEY");
}
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});
