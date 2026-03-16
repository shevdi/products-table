# toast-component Specification

## Purpose

Simple Toast wrapper over Radix Toast; imperative API via `toast()`; used for AddProductForm success feedback and other notifications.

## ADDED Requirements

### Requirement: Toast component exists as simple wrapper

The project SHALL have a Toast component in `src/components/Toast/` that wraps `@radix-ui/react-toast` and exposes a simple imperative API.

#### Scenario: ToastProvider wraps application
- **WHEN** application mounts ToastProvider
- **THEN** toast viewport is rendered and toasts can be displayed

#### Scenario: toast() shows a notification
- **WHEN** consumer calls `toast({ title?, description })` or `toast({ description })`
- **THEN** a toast appears in the viewport with the given content

#### Scenario: Toast auto-dismisses
- **WHEN** a toast is shown
- **THEN** it automatically closes after the default duration (e.g. 5000ms) unless user hovers or focuses it

#### Scenario: Toast can be dismissed manually
- **WHEN** user clicks the close button on a toast
- **THEN** the toast closes immediately

#### Scenario: Toast closes on Escape
- **WHEN** user presses Escape while focus is on a toast
- **THEN** the toast closes (Radix default behavior)

### Requirement: Toast uses CSS modules and BEM

The project SHALL style the Toast component using CSS modules with BEM naming.

#### Scenario: Styles use BEM
- **WHEN** developer inspects Toast.module.css
- **THEN** class names follow BEM convention and use CSS variables where appropriate

### Requirement: Toast has stories

The Toast component SHALL have Storybook stories.

#### Scenario: Stories exist
- **WHEN** developer opens Storybook
- **THEN** Toast stories exist at `src/components/Toast/` and demonstrate success notification and manual trigger
