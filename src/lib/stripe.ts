// lib/stripe.ts

import "server-only";
import Stripe from "stripe";

// Optional: Set your Stripe API version explicitly
const apiVersion: Stripe.LatestApiVersion = "2024-08-01";

if (!process.env.STRIPE_SECRET_KEY) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("❌ Missing STRIPE_SECRET_KEY in production environment.");
  } else {
    console.warn(
      "⚠️ STRIPE_SECRET_KEY is not set. Using dummy key for local dev."
    );
  }
}

// Initialize Stripe only if key is available
export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || "sk_test_dummyKey",
  { apiVersion }
);
