# Add Auth System

## Why

LoginPage currently renders a static form with no validation, no API integration, and no session management. Users cannot log in, and there is no protection for routes. This change implements the full authentication flow per TECH_SPEC: login via DummyJSON API, session persistence with remember-me, and protected routes.

## What Changes

- **api/auth.ts** — Add `login` method calling DummyJSON POST /auth/login
- **authStore** — Zustand store with token, user, rememberMe; persist + immer middleware; storage chosen by rememberMe (localStorage vs sessionStorage)
- **AuthForm** — Feature containing form logic, validation (React Hook Form + Zod), API error display under inputs; LoginPage becomes a layout container only
- **Protected routes** — `/` and `/products` require auth; redirect unauthenticated users to `/login`
- **Tanstack Query** — Use `useMutation` for login; Zustand for session state
- **Dependencies** — Add react-hook-form, zod, @hookform/resolvers, immer

## Capabilities

### New Capabilities

- `auth-flow`: Login API integration, session state (Zustand with persist/immer), protected routes, redirect logic, remember-me (localStorage vs sessionStorage)

### Modified Capabilities

- `login-page`: Add form validation (required fields), API error display under inputs, AuthForm as form+logic container (LoginPage layout only)

## Impact

- **api/** — New auth.ts
- **stores/** — Refactor authStore with persist + immer; separate slices for auth and (future) table page
- **features/AuthForm/** — Replace placeholder with full form + validation + error handling
- **pages/LoginPage/** — Refactor to container; compose AuthForm
- **app/router.tsx** — Add protected route wrapper
- **package.json** — react-hook-form, zod, @hookform/resolvers, immer
