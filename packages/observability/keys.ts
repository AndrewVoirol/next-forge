import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    server: {
      BETTERSTACK_API_KEY: z.string().optional(),
      BETTERSTACK_URL: z.string().url().optional(),

      // Added by Sentry Integration, Vercel Marketplace
      SENTRY_ORG: z.string().optional(),
      SENTRY_PROJECT: z.string().optional(),
    },
    client: {
      // Betterstack Logging (Client-side)
      NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN: z.string().optional(),
      NEXT_PUBLIC_BETTER_STACK_INGESTING_URL: z.string().url().optional(),
      NEXT_PUBLIC_BETTER_STACK_LOG_LEVEL: z.string().optional(),

      // Added by Sentry Integration, Vercel Marketplace
      NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
    },
    runtimeEnv: {
      BETTERSTACK_API_KEY: process.env.BETTERSTACK_API_KEY,
      BETTERSTACK_URL: process.env.BETTERSTACK_URL,
      NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN:
        process.env.NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN,
      NEXT_PUBLIC_BETTER_STACK_INGESTING_URL:
        process.env.NEXT_PUBLIC_BETTER_STACK_INGESTING_URL,
      NEXT_PUBLIC_BETTER_STACK_LOG_LEVEL:
        process.env.NEXT_PUBLIC_BETTER_STACK_LOG_LEVEL,
      SENTRY_ORG: process.env.SENTRY_ORG,
      SENTRY_PROJECT: process.env.SENTRY_PROJECT,
      NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    },
  });
