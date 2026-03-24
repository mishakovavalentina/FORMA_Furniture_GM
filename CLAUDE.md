# CLAUDE.md

## Project Name

FORMA Furniture GM

## Description

Лендинговая страница для FORMA — русскоязычного конструктора мебели («FORMA — твоя форма пространства»). Сайт состоит из нескольких секций: Hero, Solution, Capabilities, Shift, Trust, FinalCTA, Contact (форма заявки на замер), Footer. Деплоится на Netlify.

## Tech Stack

- **Language**: TypeScript 5
- **Framework**: React 18
- **Bundler**: Vite 5 (`@vitejs/plugin-react-swc`)
- **Styling**: Tailwind CSS 3 + `tailwindcss-animate` + PostCSS + Autoprefixer
- **UI Components**: shadcn/ui (style: default, base color: slate) + Radix UI primitives
- **Routing**: React Router DOM v6
- **Server State / Data Fetching**: TanStack React Query v5
- **Forms**: React Hook Form v7 + Zod
- **Icons**: Lucide React
- **Font**: Manrope (`@fontsource/manrope`)
- **Testing**: Vitest + jsdom + @testing-library/react + @testing-library/jest-dom
- **Linting**: ESLint 9 (typescript-eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh)
- **Deployment**: Netlify

## Project Structure

```
FORMA_Furniture_GM/                          # Git root
├── CLAUDE.md                                # This file
├── README.md                                # Minimal root readme
├── netlify.toml                             # Netlify build config (base, publish, SPA redirect)
└── lovable-project-<uuid>-2026-03-10/       # Actual project directory
    ├── index.html                           # HTML entry point
    ├── package.json
    ├── vite.config.ts                       # Vite config, port 8080, alias @/ -> src/
    ├── vitest.config.ts
    ├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
    ├── tailwind.config.ts                   # Custom theme: colors via CSS vars, Manrope font
    ├── postcss.config.js
    ├── eslint.config.js
    ├── components.json                      # shadcn/ui config
    ├── public/
    │   ├── favicon.ico
    │   ├── robots.txt
    │   ├── placeholder.svg
    │   └── _redirects                       # Netlify SPA fallback
    └── src/
        ├── main.tsx                         # React DOM entry
        ├── App.tsx                          # Root: QueryClient, Router, Toaster providers
        ├── App.css
        ├── index.css                        # Tailwind directives, CSS custom properties, global styles
        ├── vite-env.d.ts
        ├── assets/
        │   ├── hero-mockup.png
        │   └── shift-room.png
        ├── components/
        │   ├── Navbar.tsx
        │   ├── Hero.tsx
        │   ├── Solution.tsx
        │   ├── Capabilities.tsx
        │   ├── Shift.tsx
        │   ├── Trust.tsx
        │   ├── FinalCTA.tsx
        │   ├── Contact.tsx
        │   ├── Footer.tsx
        │   ├── NavLink.tsx
        │   └── ui/                          # 48 shadcn/ui components
        ├── pages/
        │   ├── Index.tsx                    # Main landing page (composes all sections)
        │   └── NotFound.tsx                 # 404 page
        ├── lib/
        │   └── utils.ts                     # cn() helper (clsx + tailwind-merge)
        ├── hooks/
        │   ├── use-toast.ts
        │   └── use-mobile.tsx
        └── test/
            ├── setup.ts
            └── example.test.ts
```

## Conventions

- **Path alias**: `@/` maps to `src/` (configured in Vite and TypeScript)
- **Component files**: PascalCase `.tsx` for components, camelCase `.ts` for utilities and hooks
- **Styling**: utility-first Tailwind classes; custom colors defined as CSS variables in `src/index.css` and referenced in `tailwind.config.ts` via `hsl(var(--...))`
- **shadcn/ui**: components live in `src/components/ui/`; add new ones via `npx shadcn-ui add <component>`
- **Forms**: use React Hook Form + Zod schema validation
- **TypeScript**: `strict: false`, `noImplicitAny: false`, `skipLibCheck: true` — lenient config
- **Tests**: place test files in `src/**/*.{test,spec}.{ts,tsx}`; run with `npm test`
- **Language**: UI text and content is in Russian

## Environment Variables

Not found in repository. `.env` and `.env.local` are gitignored.

## What Claude Should Know

- The actual source code lives inside the subdirectory `lovable-project-<uuid>-2026-03-10/`, not at the repo root. The `netlify.toml` at root sets `base` to that subdirectory for builds.
- The project was scaffolded via [Lovable](https://lovable.dev) (a visual React builder); `lovable-tagger` dev dependency tags components for the Lovable editor.
- Dev server runs on port **8080** (`vite.config.ts`).
- SPA routing is handled by `public/_redirects` (Netlify) and `netlify.toml` redirect rule — all routes fall back to `index.html`.
- CSS theme tokens (colors, radius, sidebar) are defined as CSS custom properties in `src/index.css` and consumed by Tailwind via `hsl(var(--...))`.
- No backend, no API, no database — this is a purely static frontend landing page.
- No CI/CD workflows, no Docker configuration present in the repository.

## Don't

- Don't run `npm install` or `npm run build` from the repo root — always `cd` into the `lovable-project-*/` subdirectory first.
- Don't add files or components directly to `src/components/ui/` manually — use the shadcn/ui CLI to keep them consistent.
- Don't commit `.env` or `.env.local` files — they are gitignored.
- Don't modify `public/_redirects` or `netlify.toml` redirect rules without understanding the SPA routing setup.
- Don't enable `strict: true` in TypeScript without auditing the entire codebase first — the current config intentionally has it disabled.
