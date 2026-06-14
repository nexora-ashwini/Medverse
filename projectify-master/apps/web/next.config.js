/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    UNASSIGNED_USER_ID: process.env.UNASSIGNED_USER_ID,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "img.clerk.com",
        protocol: "https",
      },
    ],
  },
  redirects: async () => [
    {
      source: "/projects",
      destination: "/dashboard",
      permanent: true,
    },
    {
      source: "/projects/:id",
      destination: "/projects/:id/dashboard",
      permanent: true,
    },
  ],
  rewrites: async () => [
    {
      source: "/changelog",
      destination: "/changelog/j5775aqxkjg4avhhdjgwn05jqh6rkcyp",
    },
  ],
};

module.exports = withSentryConfig(nextConfig, {
  org: "vigneshfixes",
  project: "projectify",
  sentryUrl: "https://sentry.io/",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
