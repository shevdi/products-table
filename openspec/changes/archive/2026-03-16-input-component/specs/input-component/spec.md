# input-component Specification

## Purpose

Reusable compound Input component with leading/trailing slots, clear button, password visibility toggle, label, error display, and React Hook Form compatibility for use in AuthForm, ProductSearch, and AddProductForm.

## Requirements

### Requirement: Input component exists as compound components

The project SHALL have an Input component in `src/components/Input/` implemented as compound components, each in a separate file.

#### Scenario: Input.Root provides context
- **WHEN** Input.Root wraps Input.Box (and optional Label, Error)
- **THEN** all child components receive shared context (value, onChange, error, disabled, size)

#### Scenario: Input.Box wraps field and slots
- **WHEN** Input.Box wraps Input.Leading, Input.Field, and Input.Trailing
- **THEN** they are laid out in a row with border, radius, and focus styling

#### Scenario: Input.Leading renders left slot
- **WHEN** Input.Leading wraps content (e.g. Icon)
- **THEN** the content is rendered to the left of the input field

#### Scenario: Input.Field renders native input
- **WHEN** Input.Field is used inside Input.Root
- **THEN** a native `<input>` is rendered and participates in the context (value, onChange)

#### Scenario: Input.Trailing renders right slot
- **WHEN** Input.Trailing wraps content (e.g. Input.Clear, Input.PasswordToggle)
- **THEN** the content is rendered to the right of the input field

#### Scenario: Input.Clear clears the field
- **WHEN** Input.Clear is used and the field has a non-empty value
- **THEN** a clear button is visible and clicking it clears the field value

#### Scenario: Input.Clear hidden when empty
- **WHEN** Input.Clear is used and the field value is empty
- **THEN** the clear button is not visible

#### Scenario: Input.PasswordToggle toggles visibility
- **WHEN** Input.PasswordToggle is used with a password Field
- **THEN** clicking it toggles the Field type between `password` and `text`

#### Scenario: Input.Label associates with field
- **WHEN** Input.Label is used with Input.Field
- **THEN** the label is associated with the field for accessibility (htmlFor / id)

#### Scenario: Input.Error displays error message
- **WHEN** Input.Root receives `error` prop with a message
- **THEN** Input.Error displays the message below the field with error styling

### Requirement: Input supports sizes

The project SHALL support size variants for the Input component.

#### Scenario: Input supports sm size
- **WHEN** Input.Root receives `size="sm"`
- **THEN** the input displays with 48px height and 8px border radius (Figma search)

#### Scenario: Input supports md size
- **WHEN** Input.Root receives `size="md"`
- **THEN** the input displays with 55px height and 12px border radius (Figma login)

### Requirement: Input uses CSS modules and BEM

The project SHALL style the Input component using CSS modules with BEM naming.

#### Scenario: Styles use BEM
- **WHEN** developer inspects Input.module.css
- **THEN** class names follow BEM convention and use CSS variables where appropriate

### Requirement: Input is React Hook Form compatible

The project SHALL allow Input.Field to work with React Hook Form's `register()`.

#### Scenario: Input.Field accepts ref
- **WHEN** Input.Field is used with `{...register('fieldName')}`
- **THEN** the ref is forwarded to the native input and validation works

### Requirement: Input has stories

The Input component SHALL have Storybook stories.

#### Scenario: Stories exist
- **WHEN** developer opens Storybook
- **THEN** Input stories exist at `src/components/Input/` and demonstrate search (leading icon), username with clear, password with toggle, label, error, disabled, and sizes
