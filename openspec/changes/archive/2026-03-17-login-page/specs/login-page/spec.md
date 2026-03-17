# login-page Specification

## Purpose

Страница авторизации на маршруте `/login` с формой входа по дизайну Figma.

## ADDED Requirements

### Requirement: Login page renders at /login route

LoginPage SHALL render when user navigates to `/login`.

#### Scenario: Route configured
- **WHEN** developer inspects `app/router.tsx`
- **THEN** route `/login` renders `LoginPage` component

#### Scenario: Page displays login form
- **WHEN** user visits `/login`
- **THEN** page displays centered login card with form

### Requirement: Login form structure

LoginPage SHALL display a centered white card containing: logo, title "Авторизация", subtitle "Пожалуйста, авторизируйтесь", login input, password input, "Запомнить данные" checkbox, "Войти" button, "или" separator, and "Нет аккаунта? Создать" link.

#### Scenario: Card layout
- **WHEN** user views LoginPage
- **THEN** a white card with rounded corners (40px) and drop shadow is centered on the page

#### Scenario: Header content
- **WHEN** user views LoginPage
- **THEN** logo icon, title "Авторизация", and subtitle "Пожалуйста, авторизируйтесь" are visible

#### Scenario: Login input
- **WHEN** user views LoginPage
- **THEN** login field has label "Логин", user icon, and clear (X) button

#### Scenario: Password input
- **WHEN** user views LoginPage
- **THEN** password field has label "Пароль", lock icon, and eye-off toggle for visibility

#### Scenario: Remember checkbox
- **WHEN** user views LoginPage
- **THEN** "Запомнить данные" checkbox is visible below password field

#### Scenario: Submit button
- **WHEN** user views LoginPage
- **THEN** "Войти" button with primary styling is visible

#### Scenario: Create account link
- **WHEN** user views LoginPage
- **THEN** "Нет аккаунта? Создать" text is visible with "Создать" as a link

### Requirement: Login form uses existing components

LoginPage SHALL use Input, Checkbox, Button, and Icon components from the component library.

#### Scenario: Input component
- **WHEN** developer inspects LoginPage implementation
- **THEN** Input.Root, Input.Box, Input.Field, Input.Slot, Input.Clear, Input.PasswordToggle are used for login and password fields

#### Scenario: Checkbox component
- **WHEN** developer inspects LoginPage implementation
- **THEN** Checkbox.Root, Checkbox.Box, Checkbox.Label are used for "Запомнить данные"

#### Scenario: Button component
- **WHEN** developer inspects LoginPage implementation
- **THEN** Button component is used for "Войти"

#### Scenario: Icon component
- **WHEN** developer inspects LoginPage implementation
- **THEN** Icon component is used for user, lock, eye, eye-off, close, logo icons

### Requirement: Login page has Storybook story

LoginPage SHALL have a Storybook story for visual development and documentation.

#### Scenario: Story exists
- **WHEN** developer runs Storybook
- **THEN** LoginPage story is available and renders the full form

### Requirement: Login page is responsive

LoginPage SHALL use fluid layout and one breakpoint (600px) for mobile adaptation.

#### Scenario: Fluid card width
- **WHEN** viewport is narrower than 527px
- **THEN** card width is 100% of available space (minus page padding), no horizontal scroll

#### Scenario: Desktop layout
- **WHEN** viewport is wider than 600px
- **THEN** card has inner border and gradient background

#### Scenario: Mobile layout
- **WHEN** viewport is 600px or narrower
- **THEN** inner border is removed, cardInner padding is reduced (20px 12px)
