# Modal Component Proposal

## Why

The project needs a reusable Modal component for AddProductForm (opened by "Добавить" button) and other overlay dialogs. The existing `src/components/Modal/` folder is a stub. A simple wrapper over Radix Dialog will provide accessible overlay behavior without reinventing focus management, escape handling, or portal rendering.

## What Changes

- Implement Modal as a simple wrapper over `@radix-ui/react-dialog` (already in dependencies)
- API: `<Modal open onOpenChange>children</Modal>` — controlled, minimal surface
- Overlay + content panel styled with CSS modules, BEM, CSS variables
- Close on overlay click and Escape key (Radix default)
- Storybook stories demonstrating open/close and form content

## Capabilities

### New Capabilities

- `modal-component`: Simple Modal wrapper over Radix Dialog; controlled via `open`/`onOpenChange`; used for AddProductForm and other dialogs.

### Modified Capabilities

- (none)

## Impact

- **src/components/Modal/**: Replace stub with implementation (Modal.tsx, Modal.module.css, Modal.stories.tsx)
- **Consumers**: AddProductForm (via ProductTable), future dialogs — will import and use Modal
