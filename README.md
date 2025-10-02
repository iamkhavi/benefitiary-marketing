# Benefitiary Marketing

The marketing website for Benefitiary - deployed to `benefitiary.com`

## Purpose

This repository contains the marketing website including:
- Landing page with hero section and features
- Marketing components and layouts
- CTA buttons that redirect to console app for auth

## User Flow

1. **Landing Page** (`benefitiary.com`) → Marketing content
2. **Sign Up/Login** → Redirects to `app.benefitiary.com` (console app)
3. **Onboarding** → Handled in console app
4. **Dashboard** → User stays in console app

## Related Repositories

- **Console App**: [benefitiary](https://github.com/iamkhavi/benefitiary) → `app.benefitiary.com`
- **Marketing**: This repo → `benefitiary.com`

## Tech Stack

- Next.js 15 with App Router
- TailwindCSS + shadcn/ui
- TypeScript
- Pure marketing site (no auth/database)

## Development

```bash
npm install
npm run dev
```

## Deployment

Deploy to `benefitiary.com` domain.

All auth/signup buttons redirect users to `app.benefitiary.com` (console app).