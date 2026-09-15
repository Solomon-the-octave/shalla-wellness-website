import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve the large camera photos as small modern formats sized per device
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
  },
};

export default nextConfig;
