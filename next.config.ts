// next.config.ts

import type { NextConfig } from "next";
// — default-import the adapter function
import withCloudflare from "@opennextjs/cloudflare";

const baseConfig: NextConfig = {
  basePath: "/app",
  // …any other Next.js settings you need…
};

// Wrap your baseConfig in the Cloudflare helper
const openNextConfig = withCloudflare(baseConfig);

// Only run the dev initializer in local/dev mode
if (process.env.NODE_ENV !== "production") {
  // use require so that this call doesn’t interfere with the frozen object in production
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
  initOpenNextCloudflareForDev();
}

export default openNextConfig;
