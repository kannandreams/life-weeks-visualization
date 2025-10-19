/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/life-weeks-visualization',
    reactStrictMode: true,
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.buymeacoffee.com",
        },
      ],
    },
  };

export default nextConfig;
