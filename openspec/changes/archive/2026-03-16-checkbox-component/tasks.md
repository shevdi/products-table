# Checkbox Component Tasks

## 1. Setup

- [x] 1.1 Add `--color-checkbox-unchecked: #B2B3B9` and `--color-checkbox-checked: #3C538E` to `src/index.css` in :root

## 2. Checkbox Context and Root

- [x] 2.1 Create `CheckboxContext.tsx` with context for checked, onChange, disabled, error, id; support controlled/uncontrolled (useState when uncontrolled)
- [x] 2.2 Create `Root.tsx` (Checkbox.Root) wrapping CheckboxContextProvider, accepting checked, onChange, disabled, error; use useId() for id
- [x] 2.3 Create flex layout wrapper in Root with gap 20px for Box + Label

## 3. Checkbox Box

- [x] 3.1 Create `Box.tsx` (Checkbox.Box) that renders visually-hidden native `<input type="checkbox">` with ref forwarding for React Hook Form
- [x] 3.2 Add custom 22×22px visual indicator (div) with 4px radius, border/fill from CSS variables based on checked state
- [x] 3.3 Add checkmark SVG when checked
- [x] 3.4 Apply aria-invalid when error, disabled attribute when disabled; ensure focus-visible styling on wrapper

## 4. Checkbox Label

- [x] 4.1 Create `Label.tsx` (Checkbox.Label) using useCheckboxContext, associating via htmlFor/id
- [x] 4.2 Style label with font-size var(--font-size-sm), color var(--color-checkbox-unchecked)

## 5. Styles

- [x] 5.1 Create `Checkbox.module.css` with BEM classes (checkbox, checkbox__box, checkbox__indicator, checkbox__label)
- [x] 5.2 Implement unchecked/checked, disabled, error states using CSS variables

## 6. Exports and Index

- [x] 6.1 Update `src/components/Checkbox/index.ts` to export Checkbox compound (Root, Box, Label) and named exports

## 7. Stories

- [x] 7.1 Create `Checkbox.stories.tsx` with stories: Default, WithLabel, Disabled, Error, WithReactHookForm (or FormUsage)
