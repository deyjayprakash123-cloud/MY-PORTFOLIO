import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow all IPs in local network for dev preview
  allowedDevOrigins: [
    '192.168.29.53',
    'localhost'
  ]
};

export default nextConfig;
