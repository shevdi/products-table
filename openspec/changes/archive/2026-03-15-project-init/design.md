## Context

Greenfield project for products-table. TECH_SPEC.MD and DEV_PLAN.MD define the stack: Vite, React, TypeScript, React Router, and later Storybook, Tanstack Query, Zustand, etc. Item 0.1 requires initializing the project with Vite + React + TS before tooling (0.2) and folder structure (0.3).

## Goals / Non-Goals

**Goals:**

- Produce a runnable Vite + React + TypeScript app
- Use official Vite React-TS template as base
- Configure TypeScript for strict mode and path aliases (`@/` → `src/`)
- Provide `npm run dev` and `npm run build` scripts
- Minimal entry point: `main.tsx` → `App.tsx` with a simple placeholder UI

**Non-Goals:**

- Storybook, ESLint, Prettier (0.2)
- Folder structure (app, api, stores, etc.) (0.3)
- API client, types, or any feature code (0.4, 0.5)

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Scaffold method | `npm create vite@latest` with `react-ts` template | Official, maintained, matches TECH_SPEC. Avoids manual config. |
| Path alias | `@/` → `src/` | Common convention; aligns with planned structure (app, api, features, etc.). |
| TypeScript | Strict mode enabled | TECH_SPEC expects TS; strict mode catches errors early. |
| Entry | `src/main.tsx` + `index.html` at root | Default Vite layout; no need to deviate. |

**Alternatives considered:**

- Manual Vite setup: More control but higher effort; template is sufficient for 0.1.
- `@/` vs `~` vs no alias: `@/` is widely used and clear; `~` can conflict with CSS; no alias increases import verbosity.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Template drift | Use pinned `vite` and `@vitejs/plugin-react` versions in package.json |
| Path alias breaks tooling | Ensure `tsconfig` and `vite.config` both define `@/`; verify IDE and build |
