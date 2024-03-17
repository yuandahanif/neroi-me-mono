/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "safebooru.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "yuandahanif.github.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "markdown-videos.vercel.app",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.workers.dev",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.tenor.com",
        port: "",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async rewrites() {
    return [
      {
        source: "/:path(api.*|static.*|_next.*|favicon.ico|robots.txt|sitemap.xml|sitemap.xsl|sitemap.xsd)",
        destination: "/:path*",
      },
      {
        source: "/:locale/:path*",
        has: [
          {
            type: "host",
            value: `business.${process.env.DOMAIN}`,
          },
        ],
        destination: "/:locale/business/:path*",
      },
      {
        source: "/:locale/:path*",
        has: [
          {
            type: "host",
            value: `personal.${process.env.DOMAIN}`,
          },
        ],
        destination: "/:locale/personal/:path*",
      },
    ];
  },
};

export default config;
