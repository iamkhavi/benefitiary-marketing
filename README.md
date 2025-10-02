# Benefitiary Marketing

The marketing website for Benefitiary - deployed to `benefitiary.com`

## Purpose

This repository contains the marketing website including:
- Landing page with hero section and features
- Authentication pages (login/signup)
- Onboarding flow (organization setup + preferences)
- Marketing components and layouts

## User Flow

1. **Landing Page** (`benefitiary.com`) → Marketing content
2. **Sign Up** → User creates account
3. **Onboarding** → Organization setup + preferences
4. **Redirect** → After completion → `app.benefitiary.com` (console app)

## Related Repositories

- **Console App**: [benefitiary](https://github.com/iamkhavi/benefitiary) → `app.benefitiary.com`
- **Marketing**: This repo → `benefitiary.com`

## Tech Stack

- Next.js 15 with App Router
- TailwindCSS + shadcn/ui
- BetterAuth for authentication
- TypeScript

## Development

```bash
npm install
npm run dev
```

## Deployment

Deploy to `benefitiary.com` domain.

After onboarding completion, users are redirected to `app.benefitiary.com` (console app).