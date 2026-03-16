## Context

- `@radix-ui/react-toast` is already in dependencies
- Toast will be used for AddProductForm success feedback (DEV_PLAN 5.6) and other notifications
- Project uses CSS modules, BEM, CSS variables; no extra UI libraries beyond Radix primitives
- Modal component follows the same pattern: simple wrapper over Radix primitive

## Goals / Non-Goals

**Goals:**
- Provide a minimal Toast API: `ToastProvider` + imperative `toast()` function
- Leverage Radix Toast for accessibility (aria-live, auto-dismiss, swipe, hotkey)
- Style toast panel to match design tokens (CSS variables)

**Non-Goals:**
- Custom imperative API beyond Radix — use Radix's Provider + Viewport + Root pattern
- Multiple toast variants (success/error/info) as separate components — use single styled toast, consumers pass content
- Toast action buttons — out of scope for basic notifications

## Decisions

### 1. Radix Toast as base

**Decision:** Use `@radix-ui/react-toast` (Toast.Provider, Toast.Viewport, Toast.Root, Toast.Title, Toast.Description, Toast.Close).

**Rationale:** Already in dependencies; provides aria-live, auto-dismiss, swipe gesture, F8 hotkey, and stacking out of the box.

**Alternatives:** Custom implementation — reinvents wheel; Sonner/React-Hot-Toast — extra dependency when Radix is sufficient.

### 2. Simple wrapper API

**Decision:** Export `ToastProvider` (wraps app, contains Viewport) and a `toast()` function. Consumer calls `toast({ title?, description })` to show a toast. Internally use React state + Radix Toast.Root for each queued toast.

**Rationale:** User requested simple wrapper. Imperative API matches common patterns (e.g. `toast.success('Saved!')`). Radix docs recommend abstracting parts for custom API.

### 3. Structure: Provider → Viewport → Root (per toast)

**Decision:** `ToastProvider` renders `Toast.Provider` + `Toast.Viewport`. When `toast()` is called, add entry to state; map over entries to render `Toast.Root` + `Toast.Title` + `Toast.Description` + optional `Toast.Close`. Each Root gets unique key.

**Rationale:** Matches Radix composition. Duplicate toasts work via multiple Root instances (per Radix docs).

### 4. Styling

**Decision:** CSS modules, BEM. Toast panel: background, border-radius, shadow, padding using CSS variables. Viewport: fixed position (e.g. bottom-right).

**Rationale:** Aligns with project conventions. Use existing `--color-background-light`, `--color-border-light` for consistency with Modal.

### 5. Optional close button

**Decision:** Include `Toast.Close` with × or similar icon for manual dismiss. Styled to match minimal design.

**Rationale:** Improves UX when user wants to dismiss before auto-close. Radix provides Close out of the box.

## Risks / Trade-offs

- [Stacking many toasts] → Radix handles stacking; default duration 5000ms limits accumulation. If needed, cap queue size.
- [No built-in success/error styling] → Single neutral style. Consumers can pass different content; add variant prop later if needed.
