export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";

// interface Props {
//   searchParams?: { [key: string]: string | string[] | undefined };
// }

export default async function ReturnPage({ searchParams }) {
  const sessionParam = searchParams?.session_id;
  const session_id = Array.isArray(sessionParam)
    ? sessionParam[0]
    : sessionParam;

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
