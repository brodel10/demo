"use client";

import { Footer, Navigation } from "@/devlink";
import { useEffect, useState } from "react";

type ApiResponse = {
  message: string;
  timestamp: number;
  data: { body: string }[];
};

export default function HelloWorld() {
  const [someData, setSomeData] = useState<ApiResponse | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/app/api/test");
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data: ApiResponse = await res.json();
        setSomeData(data);
      } catch (err) {
        console.error("Failed to fetch API:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <div style={{ minHeight: "100vh" }}>
        <div>Hello World</div>

        <div
          style={{
            padding: "20px",
            border: "2px solid green",
            background: "#f0fff0",
          }}
        >
          <h3>✅ CORS Proxy Working!</h3>
          <p>
            <strong>Message:</strong> ${someData?.message}
          </p>
          <p>
            <strong>Timestamp:</strong> ${someData?.timestamp}
          </p>
          <p>
            <strong>Data fetched:</strong> ${someData?.data.length} posts
          </p>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "10px",
              overflow: "auto",
            }}
          >
            {someData?.data[0]?.body}
          </pre>
        </div>
      </div>
      <Footer />
    </>
  );
}
