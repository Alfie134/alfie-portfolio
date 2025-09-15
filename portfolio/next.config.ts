import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDocumentPreloading: true,
  },
};

export default nextConfig;
