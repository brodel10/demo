"use client";

import { redirect } from "next/navigation";
// import { getSession } from "../actions/getSession";
import { useState } from "react";

// interface Props {
//   searchParams?: { [key: string]: string | string[] | undefined };
// }

export default async function ReturnPage({ searchParams }) {
  const [session, setSession] = useState();
  const sessionParam = searchParams?.session_id;
  const session_id = Array.isArray(sessionParam)
    ? sessionParam[0]
    : sessionParam;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/demo/api/getSession?session_id=${session_id}`
        );
        setSession(await res.json());
      } catch (err) {
        console.error("Failed to fetch API:", err);
      }
    };

    fetchData();
  }, []);

  // const session = await getSession(session_id);

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
