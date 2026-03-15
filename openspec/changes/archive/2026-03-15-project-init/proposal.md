## Why

The products-table application needs a working development environment before any features can be built. Item 0.1 of the development plan (DEV_PLAN.MD) requires initializing the project with Vite, React, and TypeScript—the foundation for all subsequent work.

## What Changes

- Create a new Vite project with React and TypeScript templates
- Configure TypeScript for strict mode and path aliases
- Set up the basic `src/` entry point and `index.html`
- Add `package.json` with core dependencies (React, React DOM, React Router)
- Ensure the app runs with `npm run dev` and builds with `npm run build`

## Capabilities

### New Capabilities

- `project-setup`: A runnable Vite + React + TypeScript application that serves a minimal page and builds successfully. Covers project scaffolding, dependency setup, and basic scripts.

### Modified Capabilities

- (none)

## Impact

- New `package.json`, `vite.config.ts`, `tsconfig.json`
- New `src/` directory with `main.tsx`, `App.tsx`, `index.html`
- No existing code modified (greenfield setup)
