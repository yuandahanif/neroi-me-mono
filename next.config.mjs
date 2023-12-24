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
  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
  },
};

export default config;
