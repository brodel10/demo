// app/return/page.tsx or page.jsx

import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";

type Props = {
  searchParams: { session_id?: string };
};

export default async function ReturnPage({ searchParams }: Props) {
  const session_id = searchParams?.session_id;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  const status = session.status;
  const customerEmail = session.customer_details?.email || "your email";

  if (status === "open") {
    redirect("/");
  }

  return (
    <section id="success">
      <p>
        We appreciate your business! A confirmation email will be sent to{" "}
        {customerEmail}. If you have any questions, please email{" "}
        <a href="mailto:orders@example.com">orders@example.com</a>.
      </p>
    </section>
  );
}
