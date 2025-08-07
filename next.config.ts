// next.config.ts
import { withCloudflare } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

// 1. Build your base config
const baseConfig: NextConfig = {
  basePath: "/app",
  // (optional) If you need to allow external images, define them here:
  // images: {
  //   domains: ["files.stripe.com"],
  // },
};

// 2. Wrap it in the Cloudflare helper
const openNextConfig = withCloudflare(baseConfig);

// 3. Only call the dev initializer in non-production
if (process.env.NODE_ENV !== "production") {
  // Use require() so this only runs at runtime, not during build
  // and so it doesn’t interfere with the frozen object in production.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
  initOpenNextCloudflareForDev();
}

// 4. Export the wrapped config
export default openNextConfig;
