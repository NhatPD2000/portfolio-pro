# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md


## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

**Important:** Run npm commands via PowerShell tool, not Bash — `next` binary is not found in bash on this Windows machine.

## Stack

- **Next.js 16.2.4** — App Router, TypeScript. Read `node_modules/next/dist/docs/` before writing Next.js code.
- **Tailwind CSS v4** — Uses `@import "tailwindcss"` and `@theme inline` syntax. No `tailwind.config.js`. Do NOT use v3 config patterns.
- **Framer Motion 12** — `motion.div`, `AnimatePresence`, `whileInView`, `flexGrow` animation for card expand
- **lucide-react** — `Github` and `Linkedin` icons do NOT exist in the installed version. Use `GitBranch` for GitHub, `Link2` for LinkedIn, `ExternalLink` for external links.
- **next-themes** — `ThemeProvider` wraps the app; CSS variables auto-switch between light/dark via `.dark` class selector.

## Architecture

```
app/
  layout.tsx        — loads Geist (body) + Playfair Display (headings) via next/font/google
  page.tsx          — composes all section components top-to-bottom
  globals.css       — ALL design tokens as CSS custom properties (--bg-primary, --accent, etc.)
components/
  Navbar.tsx        — fixed top, scrolled state adds backdrop blur
  Hero.tsx          — animated gradient orbs + rotating rings, serif name
  About.tsx         — 3 highlight cards with card-hover
  Skills.tsx        — 4 expandable cards (flexGrow animation), idle shows skill pill bars, active shows icon matrix
  Experience.tsx    — vertical timeline, amber numbering (01/02)
  Projects.tsx      — BrowserFrame component with real screenshots, 3-col layout
  Contact.tsx       — dark cards with teal icon backgrounds
  ThemeToggle.tsx   — light/dark toggle button
  BackToTop.tsx     — scroll-to-top button
public/
  smes-workcenter.png, smes-iqc.png, smes-quality.png  — Spartronics project screenshots
  pnj-production.png                                    — PNJ project screenshot
  phan-dinh-nhat-cv.pdf
```

## Design System

CSS variables defined in `globals.css` — always use these, never hardcode hex colors:

| Variable             | Light                | Dark        |
| -------------------- | -------------------- | ----------- |
| `--bg-primary`     | `#F7F9FC`          | `#0D1B2E` |
| `--bg-secondary`   | `#FFFFFF`          | `#1A2332` |
| `--surface`        | `#FFFFFF`          | `#1A2332` |
| `--border`         | `#D8E2F0`          | `#2A3B55` |
| `--text-primary`   | `#0D1B2E`          | `#E8EDF8` |
| `--text-secondary` | `#4A5E7A`          | `#B0BFDA` |
| `--accent`         | `#4F46E5` (Indigo) | `#4F46E5` |

Utility classes in globals.css: `.font-serif`, `.gradient-text`, `.label-amber`, `.section-line`, `.card-hover`, `.topo-bg`

Fonts: `var(--font-serif)` = Playfair Display (headings only), `var(--font-sans)` = Geist (body)

## User & Project Context

- **Owner:** Phan Dinh Nhat — Business Analyst, 3 years experience, manufacturing domain (MES/MOM, ERP)
- **GitHub repo:** `https://github.com/NhatPD2000/portfolio`
- **Deployment:** Vercel auto-deploys on every `git push` to master
- **Domain target:** nhatphan.vercel.app (or nhatphan.app when purchased)
- **Design aesthetic:** Professional with personality — cinematic dark navy (dark mode) / clean indigo light (light mode)

## Workflow

Local changes → `npm run dev` to test → `git commit` → `git push` → Vercel auto-deploys in ~2 minutes.

Section `scroll-margin-top: 80px` is set to offset the fixed navbar (defined in globals.css, not per-component).
