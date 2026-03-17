# Add Auth System — Design

## Context

- LoginPage exists with static form (useState); AuthForm is a placeholder
- authStore exists with minimal state (token, user); no persist, no rememberMe
- api/auth.ts does not exist; DummyJSON Auth API: POST /auth/login, returns accessToken, user
- Input.Root supports `error` prop for field-level errors
- Tanstack Query and Zustand are in use; react-hook-form, zod, immer are not yet installed

## Goals / Non-Goals

**Goals:**

- Login via DummyJSON API with Tanstack Query mutation
- Session state in Zustand with persist + immer middleware
- Separate slices: auth slice, table slice (foundation for future)
- AuthForm: form logic, validation (RHF + Zod), API errors under inputs
- LoginPage: layout container only
- Protected routes `/` and `/products`; redirect to `/login` when unauthenticated
- Remember me: localStorage (persist) vs sessionStorage (session-only)

**Non-Goals:**

- Refresh token flow
- Logout UI (can be added later)
- HTTP-only cookie storage (DummyJSON returns token in body; client stores it)

## Decisions

### 1. API layer + Tanstack Query

**Decision:** `api/auth.ts` exposes raw `login(username, password)`; AuthForm uses `useMutation` to call it.

**Rationale:** Query handles loading/error state; mutation fits login (one-shot, side effect). API layer stays thin (fetch only).

**Alternative:** useMutation calls apiFetch directly without api/auth.ts — rejected to keep api/ as single place for HTTP.

### 2. Zustand: separate stores, persist + immer

**Decision:** Two stores: `authStore`, `tableStore` (or `selectedProductsStore` extended). Each uses `persist` + `immer` middleware.

```ts
// authStore
create(
  persist(
    immer((set) => ({ ... })),
    { name: 'auth', storage: ... }  // storage chosen by rememberMe
  )
)
```

**Rationale:** Separate slices per proposal; persist for session across reloads; immer for cleaner mutations.

**Storage selection:** On login success, if `rememberMe` → use localStorage-backed persist; else → sessionStorage-backed persist. Implement via custom storage adapter or two store variants (authStorePersist vs authStoreSession) — simpler: single store with `storage` option that reads `rememberMe` from a previous persist or defaults to sessionStorage.

**Implementation note:** Zustand persist `storage` can be a custom object. Use `createJSONStorage` with `getItem`/`setItem` that delegate to localStorage or sessionStorage based on a flag. The flag is stored in a separate cookie or sessionStorage key (e.g. `auth-remember`) set at login time.

### 3. AuthForm vs LoginPage

**Decision:** AuthForm contains all form logic (RHF, Zod, mutation, error display). LoginPage renders layout (card, header) and renders AuthForm inside.

**Rationale:** Feature-driven layout; AuthForm is reusable; LoginPage stays a thin page container.

### 4. Validation: React Hook Form + Zod

**Decision:** Use `react-hook-form` with `@hookform/resolvers/zod` for schema validation. Required fields: username, password.

**Rationale:** TECH_SPEC; Zod for schema; RHF for form state and integration with Input.

### 5. Error display

**Decision:** API errors (e.g. invalid credentials) shown under inputs — e.g. a single error message below the form or under the password field. Use `Input.Root` `error` prop for field-level validation errors. No Toast for login errors.

**Rationale:** User requirement; Input already supports error display.

### 6. Protected routes

**Decision:** Wrap routes in a component that reads `authStore` and redirects to `/login` if not authenticated. Use `Navigate` from react-router-dom.

**Rationale:** Simple; no extra auth library; Zustand is the source of truth.

## Risks / Trade-offs

| Risk | Mitigation |
|------|-------------|
| Token in localStorage/sessionStorage (XSS) | Acceptable for demo; DummyJSON is demo API. Production would use HTTP-only cookies. |
| Persist storage switch (rememberMe) | Use custom storage or rehydrate on login; document that switching rememberMe on next login updates storage. |
| apiFetch throws on 4xx | login() catches, returns or throws; mutation onError handles. api/auth.ts should not throw for 400 — return `{ ok: false, error }` or throw with message for mutation to display. |

## Migration Plan

1. Add dependencies (react-hook-form, zod, @hookform/resolvers, immer)
2. Create api/auth.ts
3. Refactor authStore (persist + immer)
4. Implement AuthForm (RHF + Zod + mutation)
5. Refactor LoginPage to container
6. Add protected route wrapper
7. Update router

No rollback needed; feature is additive.

## Open Questions

- None.
