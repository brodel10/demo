import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app",
  experimental: {
    serverActions: {
      // allow both your Webflow domain and the internal cosmic.services host
      // allowedOrigins: [
      //   "playground-ff532a.webflow.io",
      //   "1165bbfa-b77d-4f9a-8efd-04a347180483.wf-app-prod.cosmic.webflow.services",
      // ],
    },
  },
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
