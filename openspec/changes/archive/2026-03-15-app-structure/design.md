## Context

The products-table project uses Vite + React + TypeScript. TECH_SPEC defines a feature-driven architecture with layers: app, api, stores, pages, features, components, shared. Currently, `App.tsx` lives in `src/` and there is no app layer, providers, or router. DEV_PLAN 0.3 marks folder structure as done, but the full structure per TECH_SPEC is not yet in place.

## Goals / Non-Goals

**Goals:**
- Establish the folder and file structure per TECH_SPEC
- Introduce app layer (providers, router) and wire it from `main.tsx`
- Scaffold api, stores, pages, features, components, shared with minimal placeholders
- Configure API client base URL and fetch wrapper in `api/client.ts`

**Non-Goals:**
- Implement auth, product list, or feature logic
- Add real API calls or stores logic
- Implement routing logic beyond basic route definitions

## Decisions

### App layer location
- **Decision**: Keep `app/` under `src/` (i.e. `src/app/`) to align with Vite/TS path alias `@/`.
- **Rationale**: TECH_SPEC shows `src/app/`; `@/` maps to `src/`, so `@/app/App` resolves correctly.
- **Alternative**: Root-level `app/` — rejected because it would require extra path config.

### Providers composition
- **Decision**: Single `providers.tsx` that composes QueryClientProvider (Tanstack Query) and BrowserRouter (React Router).
- **Rationale**: TECH_SPEC lists Tanstack Query and React Router; one providers file keeps composition simple.
- **Alternative**: Separate provider files — acceptable later if providers grow.

### Router structure
- **Decision**: `router.tsx` exports a component that defines routes; `/` and `/products` as placeholders; `/login` as placeholder.
- **Rationale**: Matches TECH_SPEC protected routes; implementation of protection deferred to auth change.
- **Alternative**: Route config as data — overkill for current scope.

### API client
- **Decision**: `api/client.ts` with base URL from env (e.g. `import.meta.env.VITE_API_URL` or default to DummyJSON) and a thin `fetch` wrapper.
- **Rationale**: TECH_SPEC uses DummyJSON; env allows switching for tests.
- **Alternative**: axios — TECH_SPEC prefers minimal libs; native fetch is sufficient.

### Scaffold depth
- **Decision**: Create folders and minimal index/placeholder files; no real logic in pages, features, or components.
- **Rationale**: Enables imports and navigation without implementing features.
- **Alternative**: Empty folders only — harder for tooling and imports.

## Risks / Trade-offs

- **Risk**: Stub files may drift from final implementation → Mitigation: Keep stubs minimal; real logic added in feature-specific changes.
- **Risk**: Path alias or import order issues → Mitigation: Verify `@/` in tsconfig and vite; run build after changes.
