# Environment Variables Setup Checklist

## Overview
This checklist covers all required environment variables for the Next.js Forge monorepo. Each app (app, web, api) needs its own `.env.local` file with the appropriate variables.

## 🚨 CRITICAL: Vercel Deployment Issues

### Current Problem
The `apps/app` deployment is failing on Vercel due to missing Clerk environment variables. The build error shows:
```
❌ Invalid environment variables: [
  {
    code: 'invalid_type',
    expected: 'string',
    received: 'undefined',
    path: [ 'NEXT_PUBLIC_CLERK_SIGN_UP_URL' ],
    message: 'Required'
  },
  {
    code: 'invalid_type',
    expected: 'string',
    received: 'undefined',
    path: [ 'NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL' ],
    message: 'Required'
  },
  {
    code: 'invalid_type',
    expected: 'string',
    received: 'undefined',
    path: [ 'NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL' ],
    message: 'Required'
  }
]
```

### Required Fix
Add these environment variables to your Vercel project settings:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add the missing variables:
   - `NEXT_PUBLIC_CLERK_SIGN_UP_URL` = `/sign-up`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` = `/`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` = `/`

## Required Environment Variables

### 🔐 Authentication (Clerk)
**Required for all apps**
```bash
# Server-side (required)
CLERK_SECRET_KEY="sk_test_..."                    # Required - Get from Clerk Dashboard
CLERK_WEBHOOK_SECRET="whsec_..."                  # Optional - For webhooks

# Client-side (required)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."   # Required - Get from Clerk Dashboard
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"          # Required - URL path
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"          # Required - URL path
NEXT_PUBLIC_CLERK_FALLBACK_REDIRECT_URL="/"       # Required - Redirect after sign-in/sign-up
NEXT_PUBLIC_CLERK_FORCE_REDIRECT_URL="/"          # Optional - Force redirect URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/"           # Required - Redirect after sign-in
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/"           # Required - Redirect after sign-up
```

### 🗄️ Database (Drizzle + Neon)
**Required for all apps**
```bash
DATABASE_URL="postgresql://..."                    # Required - Neon database connection string
```

### 📊 Analytics (PostHog)
**Required for all apps**
```bash
# Client-side (required)
NEXT_PUBLIC_POSTHOG_KEY="phc_..."                 # Required - Get from PostHog Dashboard
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.dev" # Required - PostHog instance URL
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXX"         # Optional - Google Analytics ID
```

### 📝 CMS (Basehub)
**Required for web app**
```bash
BASEHUB_TOKEN="bshb_pk_..."                       # Required - Get from Basehub Dashboard
```

### 📧 Email (Resend)
**Required for all apps**
```bash
RESEND_FROM="your-email@domain.com"               # Required - Sender email address
RESEND_TOKEN="re_..."                             # Required - Get from Resend Dashboard
```

### 💳 Payments (Stripe)
**Required for all apps**
```bash
STRIPE_SECRET_KEY="sk_test_..."                   # Required - Get from Stripe Dashboard
STRIPE_WEBHOOK_SECRET="whsec_..."                 # Required - Get from Stripe Dashboard
```

### 🔒 Security (Arcjet)
**Optional - Only in production**
```bash
ARCJET_KEY="ajkey_..."                           # Optional - Get from Arcjet Dashboard
```

### 📱 Notifications (Knock)
**Optional**
```bash
KNOCK_API_KEY=""                                  # Optional - Get from Knock Dashboard
KNOCK_FEED_CHANNEL_ID=""                          # Optional - Get from Knock Dashboard
KNOCK_SECRET_API_KEY=""                           # Optional - Get from Knock Dashboard
NEXT_PUBLIC_KNOCK_API_KEY=""                      # Optional - Client-side Knock key
NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID=""              # Optional - Client-side channel ID
```

### 🔄 Webhooks (Svix)
**Required for all apps**
```bash
SVIX_TOKEN="sk_test_..."                         # Required - Get from Svix Dashboard
```

### 🎨 Collaboration (Liveblocks)
**Required for app**
```bash
LIVEBLOCKS_SECRET="sk_test_..."                  # Required - Get from Liveblocks Dashboard
```

### 📈 Logging (Betterstack)
**Required for all apps**
```bash
# Server-side
BETTERSTACK_API_KEY="..."                        # Required - Get from Betterstack Dashboard
BETTERSTACK_URL="https://in.logs.betterstack.com" # Required - Betterstack ingestion URL

# Client-side (required)
NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN="..."       # Required - Same as API key
NEXT_PUBLIC_BETTER_STACK_INGESTING_URL="..."      # Required - Same as URL
```

### 🚩 Feature Flags
**Optional**
```bash
FLAGS_SECRET=""                                   # Optional - Feature flags secret
```

### 🌐 App URLs
**Required for all apps**
```bash
# App-specific URLs (adjust ports as needed)
VERCEL_PROJECT_PRODUCTION_URL="http://localhost:3000"  # App port
NEXT_PUBLIC_APP_URL="http://localhost:3000"            # App URL
NEXT_PUBLIC_WEB_URL="http://localhost:3001"            # Web URL
NEXT_PUBLIC_API_URL="http://localhost:3002"            # API URL (web app only)
NEXT_PUBLIC_DOCS_URL="http://localhost:3004"           # Docs URL
```

## Setup Instructions

### 1. Create Environment Files
Create `.env.local` files in each app directory:
- `apps/app/.env.local`
- `apps/web/.env.local`
- `apps/api/.env.local`

### 2. Get API Keys
Visit the following dashboards to get your API keys:

- **Clerk**: https://dashboard.clerk.com/
- **Neon Database**: https://console.neon.tech/
- **PostHog**: https://app.posthog.com/
- **Basehub**: https://basehub.com/
- **Resend**: https://resend.com/
- **Stripe**: https://dashboard.stripe.com/
- **Arcjet**: https://app.arcjet.com/
- **Knock**: https://knock.app/
- **Svix**: https://dashboard.svix.com/
- **Liveblocks**: https://liveblocks.io/
- **Betterstack**: https://betterstack.com/

### 3. Replace Placeholders
Replace all placeholder values (like `sk_test_placeholder`) with your actual API keys.

### 4. Validate Setup
Run the development server to check for validation errors:
```bash
cd apps/app && pnpm dev
```

## Current Status ✅

### Working Features:
- ✅ Turbopack compilation
- ✅ Betterstack logging integration
- ✅ Drizzle database setup
- ✅ Authentication flow
- ✅ Environment variable validation
- ✅ All apps responding correctly

### Environment Files Status:
- ✅ `apps/app/.env.local` - Configured
- ✅ `apps/web/.env.local` - Configured  
- ✅ `apps/api/.env.local` - Configured

### Validation Status:
- ✅ All required environment variables present
- ✅ Format validation passing
- ✅ No missing dependencies
- ✅ No Prisma conflicts (migrated to Drizzle)

## Next Steps

1. **Replace placeholder values** with real API keys for production
2. **Test each integration** individually
3. **Set up production environment variables** on your deployment platform
4. **Configure webhooks** for production use

## Troubleshooting

### Common Issues:
- **Validation errors**: Check that API keys match the expected format (e.g., `sk_` prefix for Stripe)
- **Missing variables**: Ensure all required variables are present in each app's `.env.local`
- **Port conflicts**: Verify that each app uses the correct port (3000, 3001, 3002)

### Validation Rules:
- Clerk keys must start with `sk_` (server) or `pk_` (client)
- Stripe keys must start with `sk_` (server) or `pk_` (client)
- PostHog key must start with `phc_`
- Basehub token must start with `bshb_pk_`
- Arcjet key must start with `ajkey_`
- URLs must be valid URLs
- Database URL must be a valid PostgreSQL connection string