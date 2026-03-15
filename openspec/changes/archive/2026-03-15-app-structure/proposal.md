## Why

The project needs a feature-driven architecture as specified in TECH_SPEC. Currently, the app has a flat structure with `App.tsx` in `src/` and no separation of concerns. Establishing the app structure now enables subsequent work on auth, product list, and features without refactoring.

## What Changes

- Create `app/` layer with `App.tsx`, `providers.tsx`, and `router.tsx`
- Create `api/` layer with `client.ts` scaffold (auth.ts, products.ts as stubs or empty)
- Create `stores/` layer (empty or minimal stubs for authStore, selectedProductsStore)
- Create `pages/` with `LoginPage/` and `ProductPage/` scaffolds
- Create `features/` with `AuthForm/`, `ProductSearch/`, `ProductTable/` scaffolds
- Create `components/` with folders for Table, Input, Checkbox, Button, Modal, Toast, Pagination, ProgressBar
- Extend `shared/` with `utils/`, `styles/`, `types/` subfolders
- Move existing `App.tsx` into `app/` and wire providers + router
- Configure API client base URL and fetch wrapper in `api/client.ts`

## Capabilities

### New Capabilities

- `app-structure`: Folder and file structure for products-table per TECH_SPEC; app layer (providers, router), api layer, stores, pages, features, components, shared.

### Modified Capabilities

- (none)

## Impact

- `src/` layout changes; imports may need path updates
- New files: `app/providers.tsx`, `app/router.tsx`, `api/client.ts`, page/feature/component scaffolds
- Existing `App.tsx` moves to `app/App.tsx`; `main.tsx` imports from `app/`
