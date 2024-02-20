/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "safebooru.org",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "yuandahanif.github.io",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "markdown-videos.vercel.app",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        port: "",
        pathname: "/",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:path(api.*|static.*|.*\\..*|_next.*|favicon.ico|robots.txt|sitemap.xml|sitemap.xsl|sitemap.xsd)",
        destination: "/:path*",
      },
      {
        source: "/:locale/:path*",
        has: [
          {
            type: "host",
            value: `work.${process.env.DOMAIN}`,
          },
        ],
        destination: "/:locale/work/:path*",
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
