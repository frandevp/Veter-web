import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
remotePatterns: [
{ protocol: "https", hostname: "veter.es" },
{ protocol: "https", hostname: "*.wp.com" },
],
},
};

export default nextConfig;
