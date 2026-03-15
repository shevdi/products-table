## ADDED Requirements

### Requirement: App layer exists

The project SHALL have an `app/` layer under `src/` containing `App.tsx`, `providers.tsx`, and `router.tsx`.

#### Scenario: App files present
- **WHEN** developer inspects `src/app/`
- **THEN** `App.tsx`, `providers.tsx`, and `router.tsx` exist

#### Scenario: Main entry wires app
- **WHEN** developer inspects `src/main.tsx`
- **THEN** it renders the app through providers (e.g. `providers.tsx` wrapping `App` or router)

### Requirement: API layer exists

The project SHALL have an `api/` layer under `src/` with `client.ts` providing a configured HTTP client.

#### Scenario: API client present
- **WHEN** developer inspects `src/api/`
- **THEN** `client.ts` exists and exports a fetch wrapper or client with base URL configuration

#### Scenario: Base URL configurable
- **WHEN** developer configures `VITE_API_URL` (or equivalent)
- **THEN** the API client uses that URL as base; otherwise a sensible default (e.g. DummyJSON) is used

### Requirement: Stores layer exists

The project SHALL have a `stores/` layer under `src/` for Zustand stores.

#### Scenario: Stores folder present
- **WHEN** developer inspects `src/stores/`
- **THEN** the folder exists (may contain stub or empty files for authStore, selectedProductsStore)

### Requirement: Pages layer exists

The project SHALL have a `pages/` layer under `src/` with `LoginPage` and `ProductPage` scaffolds.

#### Scenario: Page scaffolds present
- **WHEN** developer inspects `src/pages/`
- **THEN** `LoginPage/` and `ProductPage/` exist, each with at least one component file (e.g. `LoginPage.tsx`, `ProductPage.tsx`)

### Requirement: Features layer exists

The project SHALL have a `features/` layer under `src/` with `AuthForm`, `ProductSearch`, and `ProductTable` scaffolds.

#### Scenario: Feature scaffolds present
- **WHEN** developer inspects `src/features/`
- **THEN** `AuthForm/`, `ProductSearch/`, and `ProductTable/` exist, each with at least one component file

### Requirement: Components layer exists

The project SHALL have a `components/` layer under `src/` with folders for Table, Input, Checkbox, Button, Modal, Toast, Pagination, and ProgressBar.

#### Scenario: Component folders present
- **WHEN** developer inspects `src/components/`
- **THEN** folders exist for Table, Input, Checkbox, Button, Modal, Toast, Pagination, and ProgressBar (may be empty or contain stubs)

### Requirement: Shared layer extended

The project SHALL have `shared/utils/`, `shared/styles/`, and `shared/types/` under `src/`.

#### Scenario: Shared subfolders present
- **WHEN** developer inspects `src/shared/`
- **THEN** `utils/`, `styles/`, and `types/` subfolders exist

### Requirement: Router defines routes

The router SHALL define routes for `/`, `/products`, and `/login`.

#### Scenario: Routes defined
- **WHEN** developer inspects `app/router.tsx`
- **THEN** routes for `/`, `/products`, and `/login` are defined (may render placeholder components)
