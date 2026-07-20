# Ferrotype Engineering — Website

A production-ready marketing website for an industrial engineering company (mechanical engineering, automation,
manufacturing network, engineering consulting) built with Next.js 15, TypeScript, and Tailwind CSS. Site copy is in
Bahasa Indonesia (simple, B2B-friendly language for the UMKM–menengah segment), with industry-standard technical
terms (DFMA, PLC, SCADA, CNC, GD&T, CAD, etc.) kept in their original English form.

> Verified in this environment: `npm install`, `npx tsc --noEmit`, and `npx next build` all complete successfully
> (font fetching from Google Fonts requires normal internet access, which this build sandbox restricts — it will
> work in any standard dev/CI environment).

## Tech Stack

- **Next.js 15** (App Router, Server Components, `generateStaticParams`, dynamic `sitemap.ts` / `robots.ts`)
- **React 19** + **TypeScript**
- **Tailwind CSS 3** with a custom industrial design token system (see `tailwind.config.ts`)
- **Framer Motion** for scroll-reveal animation
- **React Hook Form + Zod** for the contact form
- **MDX** (`next-mdx-remote/rsc`) for the blog, content lives in `content/blog/*.mdx`
- **Lucide Icons**, **next-themes** for dark/light mode

## Project Structure

```
app/                    Route segments (App Router)
  layout.tsx            Root layout: fonts, theming, header/footer, org schema
  page.tsx               Home
  about/ services/ industries/ portfolio/ case-studies/
  resources/ blog/ blog/[slug]/ careers/ faq/ contact/
  privacy-policy/ terms/
  sitemap.ts robots.ts not-found.tsx globals.css
components/
  layout/               Header, Footer, ThemeProvider, ThemeToggle
  ui/                   Button, Container/Section, Card/Badge, Input, Reveal
  sections/             Hero, TrustSection, ServicesGrid, WorkflowSteps,
                        IndustriesGrid, PortfolioGrid, CaseStudiesGrid,
                        InsightsSection, CTASection, FaqAccordion
  forms/                ContactForm, ResourceForm
content/blog/*.mdx       Blog posts (frontmatter: title, excerpt, date, category, tags, author, featured)
lib/                    site.ts (config), data.ts (dummy content), seo.ts,
                        mdx.ts, validation.ts (Zod schema), icons.ts, utils.ts
types/                  Shared TypeScript interfaces
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build & Deploy

```bash
npm run build
npm run start
```

**Recommended host:** Vercel (zero-config for Next.js App Router, image optimization, and `next/font`).
Any Node.js host that supports Next.js (Netlify, Render, self-hosted Node) also works.

1. Push the repo to GitHub/GitLab.
2. Import into Vercel (or your host of choice).
3. Set environment variables from `.env.example` in the host's dashboard.
4. Deploy — `sitemap.xml` and `robots.txt` are generated automatically at `/sitemap.xml` and `/robots.txt`.

## Environment Variables

See `.env.example`. At minimum, set `NEXT_PUBLIC_SITE_URL` to your production domain so canonical URLs, sitemap,
and Open Graph tags resolve correctly. The contact form currently logs submissions client-side — wire up
`CONTACT_FORM_PROVIDER` / `RESEND_API_KEY` (or your provider of choice) to an API route (`app/api/contact/route.ts`)
before going live.

## Content Editing

- **Services / Industries / Portfolio / Case Studies / Resources / Careers / FAQ**: edit the arrays in `lib/data.ts`.
- **Blog**: add a new `.mdx` file to `content/blog/` with frontmatter matching the existing posts — it's picked up
  automatically by the listing page, sitemap, and static params.
- **Site-wide config** (name, nav, contact details, footer links): `lib/site.ts`.
- **Colors, fonts, spacing tokens**: `tailwind.config.ts` (`blueprint`, `graphite`, `signal`, `surface`, `canvas`,
  `ink` color scales; `--font-display` / `--font-body` / `--font-mono` in `app/layout.tsx`).

## SEO

- Per-page metadata via `lib/seo.ts` → `buildMetadata()` (title, description, canonical, Open Graph, Twitter Card).
- `Organization` schema in the root layout, `FAQPage` schema on `/faq`, `BreadcrumbList` schema on blog posts.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` dynamically from live content.

## Known Follow-Ups Before Production Launch

- Contact form (`/api/contact`) and resource-download form (`/api/resources`) are wired to [Resend](https://resend.com) —
  set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in your environment to activate email delivery. Without a key, the
  routes return a clear 503 error instead of failing silently.
- Replace placeholder portfolio/case-study copy and add real project photography (currently text-only, no stock
  imagery used, to avoid placeholder image licensing issues).
- Add real Open Graph image assets to `public/` (referenced as `/og-default.png`).
- Connect analytics (`NEXT_PUBLIC_GA_ID` placeholder is present in `.env.example`).
- Verify Resend sender domain (`from:` addresses in `app/api/*/route.ts` use your site's hostname — this must be a
  verified sending domain in your Resend account before emails will deliver).

## Future Modules (Architected For, Not Yet Built)

The `lib/` and `types/` structure is intentionally decoupled from UI components so the following can be added
without major refactors: Customer Portal, Vendor Portal, Quotation System, Project Tracking, Knowledge Base, LMS,
AI Engineering Assistant, CRM/ERP integration. Each would live as a new route group (e.g. `app/(portal)/`) consuming
the same `lib/data.ts`-style data layer, swapped for real API/database calls.
