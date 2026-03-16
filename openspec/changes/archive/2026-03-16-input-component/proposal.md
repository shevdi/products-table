## Why

The Input component is a placeholder. AuthForm (login), ProductSearch, and AddProductForm all need a reusable text input with support for leading icons, trailing actions (clear, password visibility toggle), labels, and error states. Implementing a single compound Input component will unblock these features and keep UI consistent with the Figma design.

## What Changes

- Add `eye` icon to Icon component (for password visibility toggle when password is shown)
- Implement Input as compound components in separate files: Root, Leading, Field, Trailing, Clear, PasswordToggle, Label, Error
- Add Input stories covering search, username with clear, password with toggle, label, error, disabled, sizes
- Replace placeholder usage in ProductSearch and AuthForm with the new Input component (when those features are implemented)

## Capabilities

### New Capabilities

- `input-component`: Reusable compound Input component with leading/trailing slots, clear button, password visibility toggle, label, error display, sizes (sm/md), and React Hook Form compatibility

### Modified Capabilities

- `icon-component`: Add `eye` icon for password visibility toggle (paired with existing `eye-off`)

## Impact

- `src/components/Icon/` — add EyeIcon.svg, update Icon.types and Icons/index
- `src/components/Input/` — new compound component files (Root, Leading, Field, Trailing, Clear, PasswordToggle, Label, Error, InputContext, Input.module.css, Input.stories)
- `src/features/ProductSearch/` — will use Input when implemented
- `src/features/AuthForm/` — will use Input when implemented
