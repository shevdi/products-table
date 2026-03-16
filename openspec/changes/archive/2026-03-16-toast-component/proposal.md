# Toast Component Proposal

## Why

The project needs a reusable Toast component for user feedback — for example, showing a notification when a product is successfully added (per DEV_PLAN 5.6). A simple wrapper over Radix Toast will provide accessible, non-intrusive notifications without reinventing viewport positioning, stacking, or dismiss behavior.

## What Changes

- Implement Toast as a simple wrapper over `@radix-ui/react-toast` (already in dependencies)
- API: `<Toast.Provider>` + `toast()` imperative API — standard Radix pattern
- Minimal styling with CSS modules, BEM, CSS variables
- Storybook stories demonstrating success/error/info variants and auto-dismiss

## Capabilities

### New Capabilities

- `toast-component`: Simple Toast wrapper over Radix Toast; imperative API via `toast()`; used for AddProductForm success feedback and other notifications.

### Modified Capabilities

- (none)

## Impact

- **src/components/Toast/**: New folder with Toast.tsx, Toast.module.css, Toast.stories.tsx, index.ts
- **Consumers**: AddProductForm (via ProductTable), future features — will use toast() for notifications
