## Context

- Input is a placeholder (`export {}`). ProductSearch, AuthForm, and AddProductForm need a reusable input.
- Figma exports (docs/search.ts, docs/login.ts) define: search input 48px height, 8px radius, light gray bg; login input 55px height, 12px radius, white bg.
- Button and Icon follow CSS modules, BEM, compound/slot patterns. Input should align.
- Radix has no native Input primitive; we use native `<input>` with a compound wrapper.

## Goals / Non-Goals

**Goals:**

- Compound Input with Root, Leading, Field, Trailing, Clear, PasswordToggle, Label, Error
- Each subcomponent in a separate file
- React Hook Form compatible (forwardRef, spread props)
- Figma-aligned styles (sm 48px, md 55px)
- Stories for all variants

**Non-Goals:**

- Radix Input primitive (none exists; native input is sufficient)
- Autocomplete, typeahead, or rich text

## Decisions

### Compound structure with Context

**Decision:** Use React Context to share value, onChange, error, disabled, size, and field type between Root, Field, Clear, and PasswordToggle.

**Rationale:** Clear and PasswordToggle need access to value/onChange. Context avoids prop drilling and keeps the API compositional.

**Alternative:** Render props or cloneElement — more verbose and harder to compose.

### File layout

**Decision:** One file per compound part: Root.tsx, Leading.tsx, Field.tsx, Trailing.tsx, Clear.tsx, PasswordToggle.tsx, Label.tsx, Error.tsx, InputContext.tsx.

**Rationale:** User requirement. Keeps each file small and focused.

### Controlled vs uncontrolled

**Decision:** Support both. Root accepts optional `value` and `onChange`; when provided, Field is controlled. Otherwise, internal state is used.

**Rationale:** AuthForm uses React Hook Form (controlled via `register`); ProductSearch may use local state (uncontrolled). Supporting both maximizes reuse.

### Leading/Trailing as wrappers, not the input box

**Decision:** Root renders a wrapper div with input-like styling (border, radius, focus ring). Leading, Field, Trailing are flex children inside that wrapper. Root does NOT render the wrapper by itself — a single "InputBox" subcomponent or Root's direct structure holds Leading + Field + Trailing.

**Clarification:** Root provides context and an outer `input-root` div. The visual input box (border, padding) must wrap Leading, Field, Trailing. So either:
- Root renders `<div className={inputRoot}><div className={input}>...</div></div>` and children go inside the inner div, or
- We have Input.Box as the styled container and Root/Leading/Field/Trailing compose inside it.

**Revised:** Root = context provider + optional label/error wrapper. The input box is a separate inner structure. Simpler: Root renders a flex column (label, box, error). The "box" is a div with input styling that contains Leading, Field, Trailing. Since Leading and Trailing are optional, we need a single container that always wraps Field. Structure:

```
Root (flex column)
  Label (optional)
  Box (flex row, border, radius) <- this is the input container
    Leading (optional)
    Field (required)
    Trailing (optional)
  Error (optional)
```

So we need an Input.Box or the box is implicitly created by how we structure. Actually, the cleanest is: Root renders the outer structure. The "box" is the first child that has the border — but Leading, Field, Trailing are siblings. So we need a wrapper. Let me define:

- **Root**: Provides context. Renders `<div className={inputRoot}>` with children. Children are typically: Label, then a box div, then Error. But that forces a specific order.
- **Alternative**: Root renders `<div className={inputRoot}><div className={input}>...</div></div>`. But then we need to know where to put Label and Error. So Root's children could be: Label, (Box containing Leading+Field+Trailing), Error. The Box would need to be a component.

**Simpler approach:** Root renders a single wrapper. We introduce **Input.Box** as the bordered container. Usage:

```tsx
<Input.Root>
  <Input.Label>Логин</Input.Label>
  <Input.Box>
    <Input.Leading><Icon name="user" /></Input.Leading>
    <Input.Field />
    <Input.Trailing><Input.Clear /></Input.Trailing>
  </Input.Box>
  <Input.Error />
</Input.Root>
```

Box contains Leading, Field, Trailing. Root provides context and the outer flex column. This matches "each in separate file" — we add Box.tsx.

### Sizes from Figma

**Decision:** `sm` = 48px height, 8px radius (search); `md` = 55px height, 12px radius (login).

**Rationale:** Direct mapping from Figma exports.

### Clear and PasswordToggle behavior

**Decision:** Clear shows only when `value.length > 0`; onClick clears. PasswordToggle toggles Field's type between `password` and `text`; shows `eye` when hidden, `eye-off` when visible (or vice versa — convention: eye-off = hidden, eye = visible).

**Rationale:** Standard UX patterns.

## Risks / Trade-offs

- **Context coupling:** Clear and PasswordToggle must be inside Root. Mitigation: Document usage; throw in useInputContext if used outside.
- **Controlled/uncontrolled complexity:** Two code paths. Mitigation: Keep logic in InputContextProvider; well-tested.
- **Box component:** Adds one more file. Trade-off: Clear separation of layout vs. semantics.
