// middleware.ts
import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Grab the Origin (e.g. "https://playground-ff532a.webflow.io")
  const origin = req.headers.get("origin")?.replace(/^https?:\/\//, "");

  // Create a “pass-through” response so we can inject a header
  const res = NextResponse.next();

  if (origin) {
    // Override x-forwarded-host to match origin
    res.headers.set("x-forwarded-host", origin);
  }

  return res;
}

// Only run this middleware on these paths
export const config = {
  matcher: [
    // your App‐Router pages that use Server Actions:
    "/demo/checkout",
    "/demo/return",
    // any API routes you’ve defined:
    "/demo/api/:path*",
    "/api/:path*",
  ],
};
