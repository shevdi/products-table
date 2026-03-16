## Context

- `@radix-ui/react-dialog` is already in dependencies
- Modal will be used for AddProductForm (triggered by "Добавить" button) and other overlay dialogs
- Project uses CSS modules, BEM, CSS variables; no extra UI libraries beyond Radix primitives
- Existing components (Input, Checkbox) use compound patterns; Modal is intentionally simple per user request

## Goals / Non-Goals

**Goals:**
- Provide a minimal, controlled Modal API: `<Modal open onOpenChange>children</Modal>`
- Leverage Radix Dialog for accessibility (focus trap, escape, overlay dismiss, portal)
- Style overlay and content panel to match design tokens

**Non-Goals:**
- Compound components (Header, Body, Footer) — not needed for this scope
- Trigger component — parent controls open state
- Custom animations — use Radix defaults or simple CSS transitions

## Decisions

### 1. Radix Dialog as base

**Decision:** Use `@radix-ui/react-dialog` (Dialog.Root, Dialog.Portal, Dialog.Content, Dialog.Overlay).

**Rationale:** Already in dependencies; provides focus management, escape handling, overlay dismiss, portal rendering, and ARIA attributes out of the box.

**Alternatives:** Native HTML `<dialog>` — less mature; custom implementation — reinvents wheel.

### 2. Simple controlled API

**Decision:** Single component with `open`, `onOpenChange`, and `children`. No compound subcomponents.

**Rationale:** User explicitly requested simple wrapper. AddProductForm can pass children directly; no need for Header/Body/Footer slots for this use case.

### 3. Structure: Root → Portal → Overlay + Content

**Decision:** Map `open`/`onOpenChange` to Radix `Dialog.Root`; render `Dialog.Portal` with `Dialog.Overlay` and `Dialog.Content`; children go inside `Dialog.Content`.

**Rationale:** Matches Radix composition; overlay and content are siblings for styling and stacking.

### 4. Styling

**Decision:** CSS modules, BEM. Overlay: semi-transparent background; Content: white panel, centered, with border-radius and shadow using CSS variables.

**Rationale:** Aligns with project conventions. Use existing `--color-background-light`, `--color-border-light`, `--color-white` for consistency.

## Risks / Trade-offs

- [No built-in title/description] → Modal is content-agnostic; consumers add title/description as needed. Radix Dialog.Title can be used visually hidden for a11y if needed.
- [Single content size] → One size fits AddProductForm. If multiple sizes needed later, add `size` prop.
