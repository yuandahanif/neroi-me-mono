import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    MYSQL_ALLOW_EMPTY_PASSWORD: z.string(),
    MYSQL_ROOT_PASSWORD: z.string(),
    MYSQL_DATABASE: z.string(),
    DATABASE_URL: z.string().url(),
    SHADOW_DATABASE_URL: z.string().nullable(),
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
      // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
      // Since NextAuth.js automatically uses the VERCEL_URL if present.
      (str) => process.env.VERCEL_URL ?? str,
      // VERCEL_URL doesn't include `https` so it cant be validated as a URL
      process.env.VERCEL ? z.string().min(1) : z.string().url()
    ),
    // Add `.min(1) on ID and SECRET if you want to make sure they're not empty
    DISCORD_CLIENT_ID: z.string(),
    DISCORD_CLIENT_SECRET: z.string(),
    CLOUDFLARE_R2_ACCOUNT_ID: z.string(),
    CLOUDFLARE_R2_ACCESS_KEY_ID: z.string(),
    CLOUDFLARE_R2_SECRET_ACCESS_KEY: z.string(),
    CLOUDFLARE_R2_TOKEN_VALUE: z.string().optional(),
    CLOUDFLARE_R2_URL: z.string().optional(),
    CLOUDFLARE_R2_BUCKET: z.string(),
  },

  client: {
    NEXT_PUBLIC_UMAMI_ID: z.string(),
    NEXT_PUBLIC_DOMAIN: z.string().default("localhost"),
    NEXT_PUBLIC_CLOUDFLARE_WORKER_ENDPOINT: z.string(),
  },

  runtimeEnv: {
    NEXT_PUBLIC_UMAMI_ID: process.env.NEXT_PUBLIC_UMAMI_ID,
    NEXT_PUBLIC_CLOUDFLARE_WORKER_ENDPOINT:
      process.env.NEXT_PUBLIC_CLOUDFLARE_WORKER_ENDPOINT,
    DATABASE_URL: process.env.DATABASE_URL,
    SHADOW_DATABASE_URL: process.env.SHADOW_DATABASE_URL,
    MYSQL_ALLOW_EMPTY_PASSWORD: process.env.MYSQL_ALLOW_EMPTY_PASSWORD,
    MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
    CLOUDFLARE_R2_ACCOUNT_ID: process.env.CLOUDFLARE_R2_ACCOUNT_ID,
    CLOUDFLARE_R2_ACCESS_KEY_ID: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
    CLOUDFLARE_R2_SECRET_ACCESS_KEY:
      process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
    CLOUDFLARE_R2_TOKEN_VALUE: process.env.CLOUDFLARE_R2_TOKEN_VALUE,
    CLOUDFLARE_R2_URL: process.env.CLOUDFLARE_R2_URL,
    CLOUDFLARE_R2_BUCKET: process.env.CLOUDFLARE_R2_BUCKET,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },
});
