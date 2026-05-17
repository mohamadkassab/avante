# Project Rules

## 1. Design Tokens — Single Source of Truth

- All design values (colors, gradients, typography, spacing, sizes, effects) are defined as CSS custom properties in `app/globals.css` under `:root`
- Components always reference `var(--token-name)` — never hardcode any color, size, font value, or spacing directly in a component
- When a new design value is needed, add it to `globals.css` first, then reference it
- Group variables by concern:
  - Brand colors, text colors, UI colors
  - Gradients
  - Layout (navbar height, container width)
  - Effects (blur)
  - Typography (font sizes, weights, letter spacing)
  - Icons
  - Logo (separate from icons — don't reuse icon size vars for the logo)

## 2. File Structure

| What | Where |
|---|---|
| UI components | `components/` at project root |
| App infrastructure (providers, registries) | `app/` |
| Pages | `app/<page>/page.tsx` |
| Global styles and tokens | `app/globals.css` |
| Root layout wrapper | `app/layout.tsx` |

- `app/layout.tsx` is the single wrapper for all pages — never create additional page wrapper components
- Infrastructure that is not a UI component (ThemeProvider, Emotion cache, etc.) goes in `app/providers.tsx`, not in `components/`

## 3. MUI + Next.js App Router

- Always wrap providers with `AppRouterCacheProvider` from `@mui/material-nextjs/v16-appRouter` — skipping this causes a hydration mismatch error
- Set global font family through MUI `createTheme` in `providers.tsx` (not via inline styles or CSS alone)
- All MUI provider setup lives in `app/providers.tsx`

## 4. Use MUI as the UI Library

- MUI is the single UI component library for this project — use it for all UI elements (buttons, inputs, layout, icons, etc.)
- Do not mix in other UI libraries (e.g. Radix, Headless UI, Chakra) unless MUI genuinely cannot cover the use case

## 5. Prefer Official Packages Over Manual Implementations

- Use officially maintained packages over hand-rolled solutions
- Example: `@mui/material-nextjs` instead of a custom Emotion cache registry

## 6. No Hardcoded Values

- No hardcoded hex colors, pixel sizes, font sizes, or font weights anywhere in components
- If a value appears more than once, it belongs in `globals.css` as a variable
- This includes transition durations, border radii, and line-heights — all go in `globals.css` as tokens

## 7. MUI Typography Global Defaults via `allVariants`

- Global Typography defaults (e.g. `letterSpacing: "normal"`) go in `createTheme({ typography: { allVariants: { ... } } })` in `app/providers.tsx`
- Never repeat the same Typography style override on individual components — if it applies everywhere, it belongs in `allVariants`
- Component-specific overrides (e.g. `--letter-spacing-wide` on a badge) are fine and take precedence

## 8. Font Stack Must Be Unified

- The Next.js font CSS variable (e.g. `--font-geist-sans`) must be used consistently in **both** `globals.css` body font-family **and** MUI `createTheme` `typography.fontFamily`
- Never mix different font families across those two locations (e.g. Arial in one, Geist in the other)

## 9. Component Prop APIs — Use Enums, Not Raw Strings

- When a component prop controls a design value (e.g. background color), use a type-safe enum resolved internally — not raw CSS var strings passed as props
- Example: `SectionShell` accepts `variant="white" | "offWhite"` and resolves it to the correct CSS var internally
- Callers should never write `bgcolor="var(--color-section-bg-white)"` as a prop value

## 10. Server vs Client Components

- Components that use no React hooks remain Server Components — do not add `"use client"` unless a hook is actually used
- `"use client"` is required for: `useState`, `useEffect`, `useRef`, `usePathname`, `useInView`, and other hooks
- Keep the Server/Client boundary as high as possible — only the leaf components that need interactivity should be client components
