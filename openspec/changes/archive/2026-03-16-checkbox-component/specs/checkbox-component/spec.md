# checkbox-component Specification

## Purpose

Reusable compound Checkbox component styled like Input, with Root, Box, and Label, for use in Table (row selection), filters, and forms. Single size, checked/unchecked state, full accessibility.

## ADDED Requirements

### Requirement: Checkbox component exists as compound components

The project SHALL have a Checkbox component in `src/components/Checkbox/` implemented as compound components, each in a separate file.

#### Scenario: Checkbox.Root provides context
- **WHEN** Checkbox.Root wraps Checkbox.Box (and optional Checkbox.Label)
- **THEN** all child components receive shared context (checked, onChange, disabled, error, id)

#### Scenario: Checkbox.Box renders checkbox input and visual indicator
- **WHEN** Checkbox.Box is used inside Checkbox.Root
- **THEN** a native `<input type="checkbox">` is rendered (opacity 0, full area) with a custom 22×22px, 4px radius visual indicator for checked/unchecked state

#### Scenario: Checkbox indicator is clickable
- **WHEN** user clicks on the visual indicator (box)
- **THEN** the checkbox toggles (same behavior as clicking the label)

#### Scenario: Checkbox.Label associates with checkbox
- **WHEN** Checkbox.Label is used with Checkbox.Box
- **THEN** the label is associated with the checkbox for accessibility (htmlFor / id)

#### Scenario: Checkbox supports controlled and uncontrolled mode
- **WHEN** Checkbox.Root receives `checked` and `onChange` props
- **THEN** the checkbox operates in controlled mode

#### Scenario: Checkbox uncontrolled when no checked prop
- **WHEN** Checkbox.Root is used without `checked` prop
- **THEN** the checkbox operates in uncontrolled mode with internal state

### Requirement: Checkbox uses design tokens for colors

The project SHALL use CSS variables for checkbox states: unchecked border/label (`#B2B3B9`), checked border/fill (`#3C538E`).

#### Scenario: New color variables exist
- **WHEN** developer inspects `src/index.css`
- **THEN** `--color-checkbox-unchecked: #B2B3B9` and `--color-checkbox-checked: #3C538E` exist

#### Scenario: Unchecked state uses unchecked color
- **WHEN** checkbox is unchecked
- **THEN** border and label use `--color-checkbox-unchecked`

#### Scenario: Checked state uses checked color
- **WHEN** checkbox is checked
- **THEN** border and background use `--color-checkbox-checked` (no checkmark icon, fill only)

### Requirement: Checkbox has single size and layout

The project SHALL render Checkbox with fixed dimensions: 22×22px box, 4px corner radius, 20px gap between box and label.

#### Scenario: Box dimensions
- **WHEN** Checkbox.Box is rendered
- **THEN** the visual indicator is 22×22px with 4px border radius

#### Scenario: Label spacing
- **WHEN** Checkbox.Label is used
- **THEN** there is 20px gap between the box and the label

### Requirement: Checkbox supports disabled and error states

The project SHALL support `disabled` and `error` props on Checkbox.Root.

#### Scenario: Disabled state
- **WHEN** Checkbox.Root receives `disabled={true}`
- **THEN** the checkbox is not interactive and displays disabled styling (e.g. opacity)

#### Scenario: Error state
- **WHEN** Checkbox.Root receives `error` prop with a message
- **THEN** the checkbox displays error styling (e.g. border color) and `aria-invalid` is set

### Requirement: Checkbox uses CSS modules and BEM

The project SHALL style the Checkbox component using CSS modules with BEM naming.

#### Scenario: Styles use BEM
- **WHEN** developer inspects Checkbox.module.css
- **THEN** class names follow BEM convention and use CSS variables where appropriate

### Requirement: Checkbox is accessible

The project SHALL ensure the Checkbox is fully accessible.

#### Scenario: Label association
- **WHEN** Checkbox.Label wraps text
- **THEN** the label is associated with the checkbox input via htmlFor/id

#### Scenario: Keyboard support
- **WHEN** checkbox is focused
- **THEN** Space toggles the checked state

#### Scenario: ARIA attributes
- **WHEN** checkbox has error
- **THEN** the input has `aria-invalid="true"`

#### Scenario: Disabled exposes aria-disabled
- **WHEN** checkbox is disabled
- **THEN** the input has `disabled` attribute (and aria-disabled for screen readers)

### Requirement: Checkbox is React Hook Form compatible

The project SHALL allow Checkbox to work with React Hook Form's `register()`.

#### Scenario: Checkbox accepts ref
- **WHEN** Checkbox is used with `{...register('fieldName')}`
- **THEN** the ref is forwarded to the native input and validation works

### Requirement: Checkbox has stories

The Checkbox component SHALL have Storybook stories.

#### Scenario: Stories exist
- **WHEN** developer opens Storybook
- **THEN** Checkbox stories exist at `src/components/Checkbox/` and demonstrate default, with label, disabled, error, and form usage
