/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isGithubPages = process.env.DEPLOY_TARGET === 'github';

const nextConfig = {
    // Only use export mode for GitHub Pages
    ...(isGithubPages && { output: 'export' }),
    // Only use basePath for GitHub Pages
    ...(isGithubPages && { basePath: '/life-weeks-visualization' }),
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
