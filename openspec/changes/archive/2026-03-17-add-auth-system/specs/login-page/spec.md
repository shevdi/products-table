# login-page Specification (Delta)

## ADDED Requirements

### Requirement: Form validation with React Hook Form and Zod

AuthForm SHALL validate username and password as required using react-hook-form and zod schema.

#### Scenario: Required validation
- **WHEN** user submits form with empty username or password
- **THEN** validation errors are shown under the respective input fields
- **AND** form does not submit to API

#### Scenario: Validation schema
- **WHEN** developer inspects AuthForm implementation
- **THEN** zod schema defines required username and password
- **AND** @hookform/resolvers/zod is used with useForm

### Requirement: API error display under inputs

AuthForm SHALL display API errors (e.g. invalid credentials) under the form inputs, not as Toast.

#### Scenario: Invalid credentials error
- **WHEN** user submits valid format but wrong credentials
- **THEN** API returns error
- **AND** error message is displayed under the form (e.g. below password field or as form-level error)
- **AND** Input.Root error prop is used for field-level display where applicable

### Requirement: AuthForm contains form logic

AuthForm SHALL contain all form logic (validation, mutation, error handling). LoginPage SHALL act as a layout container only.

#### Scenario: AuthForm responsibility
- **WHEN** developer inspects AuthForm
- **THEN** AuthForm contains useForm, useMutation, validation schema, and submit handler
- **AND** AuthForm renders Input, Checkbox, Button components

#### Scenario: LoginPage as container
- **WHEN** developer inspects LoginPage
- **THEN** LoginPage renders layout (card, header, logo)
- **AND** LoginPage composes AuthForm inside the form area
- **AND** LoginPage does not contain form state or validation logic

## MODIFIED Requirements

### Requirement: Login form uses existing components

LoginPage SHALL render a centered card; AuthForm (composed by LoginPage) SHALL use Input, Checkbox, Button, and Icon components from the component library.

#### Scenario: Input component
- **WHEN** developer inspects AuthForm implementation
- **THEN** Input.Root, Input.Box, Input.Field, Input.Slot, Input.Clear, Input.PasswordToggle are used for login and password fields
- **AND** Input.Root error prop is used for validation and API error display

#### Scenario: Checkbox component
- **WHEN** developer inspects AuthForm implementation
- **THEN** Checkbox.Root, Checkbox.Box, Checkbox.Label are used for "Запомнить данные"

#### Scenario: Button component
- **WHEN** developer inspects AuthForm implementation
- **THEN** Button component is used for "Войти"

#### Scenario: Icon component
- **WHEN** developer inspects AuthForm implementation
- **THEN** Icon component is used for user, lock, eye, eye-off, close, logo icons
