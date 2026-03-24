# CLAUDE.md

## 1. Project Name and Description

**FORMA_Furniture_GM** — a single-page landing site for "FORMA — конструктор мебели" (FORMA — Furniture Constructor). All user-facing content is in Russian. The page consists of sections: Navbar, Hero, Solution, Capabilities, Shift, Trust, FinalCTA, Contact, and Footer.

## 2. Tech Stack

- **Language**: TypeScript 5.8.3
- **Framework**: React 18.3.1 (client-side only, no SSR/RSC)
- **Bundler**: Vite 5.4.19 with `@vitejs/plugin-react-swc`
- **Routing**: react-router-dom 6.30.1 (two routes: `/` and `*` catch-all)
- **Styling**: Tailwind CSS 3.4.17, PostCSS, Autoprefixer
- **UI Components**: shadcn/ui (45 components in `src/components/ui/`), Radix UI primitives
- **Icons**: lucide-react 0.462.0
- **Font**: Manrope (imported via `@fontsource/manrope`)
- **Forms**: react-hook-form 7.61.1, zod 3.25.76, @hookform/resolvers 3.10.0
- **State**: @tanstack/react-query 5.83.0
- **Notifications**: sonner 1.7.4, Radix toast
- **Charts**: recharts 2.15.4
- **Date utilities**: date-fns 3.6.0, react-day-picker 8.10.1
- **Other**: class-variance-authority, clsx, tailwind-merge, embla-carousel-react, vaul, next-themes, cmdk, input-otp, react-resizable-panels
- **Testing**: Vitest 3.2.4, @testing-library/react 16.0.0, @testing-library/jest-dom 6.6.0, jsdom 20.0.3
- **Linting**: ESLint 9.32.0 (flat config), eslint-plugin-react-hooks, eslint-plugin-react-refresh, typescript-eslint
- **Dev tooling**: lovable-tagger 1.1.13 (componentTagger plugin, dev mode only)
- **Deployment**: Netlify (configured in `netlify.toml`)

## 3. Project Structure

```
FORMA_Furniture_GM/
├── README.md
├── netlify.toml
└── lovable-project-6d8fb51e-c416-4b3b-a4f6-dd65fd233f37-2026-03-10/
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.ts
    ├── vitest.config.ts
    ├── tsconfig.json
    ├── tsconfig.app.json
    ├── tsconfig.node.json
    ├── tailwind.config.ts
    ├── postcss.config.js
    ├── eslint.config.js
    ├── components.json          # shadcn/ui configuration
    ├── .gitignore
    ├── public/
    │   ├── favicon.ico
    │   ├── placeholder.svg
    │   ├── robots.txt
    │   └── _redirects
    └── src/
        ├── main.tsx             # Entry point (React 18 createRoot)
        ├── App.tsx              # Router + providers (QueryClient, Tooltip, Toaster)
        ├── App.css
        ├── index.css            # Tailwind directives, CSS variables, custom utilities
        ├── vite-env.d.ts
        ├── assets/
        │   ├── hero-mockup.png
        │   └── shift-room.png
        ├── components/
        │   ├── Navbar.tsx
        │   ├── NavLink.tsx
        │   ├── Hero.tsx
        │   ├── Solution.tsx
        │   ├── Capabilities.tsx
        │   ├── Shift.tsx
        │   ├── Trust.tsx
        │   ├── FinalCTA.tsx
        │   ├── Contact.tsx
        │   ├── Footer.tsx
        │   └── ui/              # 45 shadcn/ui components
        ├── hooks/
        │   ├── use-mobile.tsx   # Mobile breakpoint detection (768px)
        │   └── use-toast.ts
        ├── lib/
        │   └── utils.ts         # cn() — clsx + tailwind-merge
        └── test/
            ├── setup.ts         # jest-dom matchers, matchMedia mock
            └── example.test.ts  # Single smoke test
```

## 4. Conventions

- **Path alias**: `@/` maps to `./src/` (configured in tsconfig.json and vite.config.ts)
- **shadcn/ui config** (`components.json`): style `default`, base color `slate`, CSS variables enabled, TSX, no RSC
- **Component aliases**: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`
- **CSS theming**: HSL color values via CSS custom properties (e.g., `--primary`, `--background`); dark mode via `class` strategy in Tailwind
- **Custom CSS utilities** in `index.css`: `.section-container`, `.card-elevated`, `.animate-fade-slide-up`, `.animate-delay-*`
- **TypeScript strictness**: strict mode OFF for application code (`tsconfig.app.json`); strict mode ON for build tooling (`tsconfig.node.json`)
- **ESLint rules**: `@typescript-eslint/no-unused-vars` is OFF; `react-refresh/only-export-components` is WARN
- **Test pattern**: files matching `src/**/*.{test,spec}.{ts,tsx}` run with Vitest in jsdom environment with globals enabled
- **Module system**: ESM (`"type": "module"` in package.json)
- **Navigation**: anchor-based smooth scrolling to section IDs (`#how-it-works`, `#capabilities`, `#shift`, `#why-forma`, `#contact`, `#cta`)

## 5. Environment

No environment variables are used in the source code. No `.env` or `.env.example` files are present in the repository. The `.gitignore` lists `.env` and `.env.local`.

## 6. What Claude Should Know

- The entire application source lives inside the `lovable-project-6d8fb51e-c416-4b3b-a4f6-dd65fd233f37-2026-03-10/` subdirectory, not the repo root.
- `netlify.toml` at repo root sets the build base to that subdirectory.
- The dev server runs on port 8080 (`vite.config.ts`).
- There is only one page route (`/`); all other paths fall through to a NotFound component.
- The project was generated with Lovable (evidenced by `lovable-tagger` dev dependency and project naming).
- Only one test exists (`example.test.ts`) — it is a placeholder smoke test (`expect(true).toBe(true)`).
- No backend, API integration, or environment variables are present in the codebase.
- All user-facing text is in Russian.

## 7. Don't

- Don't assume any backend, API, or database exists — none is present in the repository.
- Don't assume environment variables are needed — none are referenced in source code.
- Don't add SSR or RSC patterns — the project is explicitly client-side only (`rsc: false` in `components.json`).
- Don't enable TypeScript strict mode without considering existing code — it is intentionally disabled.
- Don't place source files at the repo root — all application code belongs inside the `lovable-project-*` subdirectory.
- Don't write user-facing content in English — the site is entirely in Russian.
- Don't remove or rename shadcn/ui components in `src/components/ui/` without checking for imports across feature components.
