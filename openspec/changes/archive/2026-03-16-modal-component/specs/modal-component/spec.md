## ADDED Requirements

### Requirement: Modal component exists as simple wrapper

The project SHALL have a Modal component in `src/components/Modal/` that wraps `@radix-ui/react-dialog` and exposes a simple controlled API.

#### Scenario: Modal renders children when open
- **WHEN** Modal receives `open={true}` and `children`
- **THEN** the children are rendered inside a dialog overlay and content panel

#### Scenario: Modal hides when closed
- **WHEN** Modal receives `open={false}`
- **THEN** the dialog is not visible and content is not rendered in the DOM (or is hidden)

#### Scenario: Modal is controlled via onOpenChange
- **WHEN** Modal receives `open` and `onOpenChange` props
- **THEN** closing the modal (overlay click, Escape) calls `onOpenChange(false)` so the parent can update state

#### Scenario: Modal closes on overlay click
- **WHEN** user clicks the backdrop/overlay
- **THEN** the modal closes (Radix default behavior)

#### Scenario: Modal closes on Escape key
- **WHEN** user presses Escape while modal is focused
- **THEN** the modal closes (Radix default behavior)

### Requirement: Modal uses CSS modules and BEM

The project SHALL style the Modal component using CSS modules with BEM naming.

#### Scenario: Styles use BEM
- **WHEN** developer inspects Modal.module.css
- **THEN** class names follow BEM convention and use CSS variables where appropriate

### Requirement: Modal has stories

The Modal component SHALL have Storybook stories.

#### Scenario: Stories exist
- **WHEN** developer opens Storybook
- **THEN** Modal stories exist at `src/components/Modal/` and demonstrate open/close and form content
