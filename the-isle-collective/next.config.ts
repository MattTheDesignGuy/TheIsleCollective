import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath is set via env var so it works both on GitHub Pages
  // (NEXT_PUBLIC_BASE_PATH=/TheIsleCollective) and on a custom domain (leave unset)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    // Required for static export — no Next.js image server available
    unoptimized: true,
  },
};

export default nextConfig;
