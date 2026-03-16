# button-component Specification

## Purpose

Reusable Button component with variants, sizes, and optional icon support for use across AddProductForm, ProductTable, LoginPage, and other features.

## ADDED Requirements

### Requirement: Button component exists

The project SHALL have a Button component in `src/components/Button/` that renders a clickable button with configurable appearance.

#### Scenario: Button renders with text
- **WHEN** Button receives `children` as text
- **THEN** the rendered element displays the text and is focusable and clickable

#### Scenario: Button supports variants
- **WHEN** Button receives `variant` equal to one of: primary, secondary
- **THEN** the button displays with the corresponding visual style (primary or secondary)

#### Scenario: Button supports sizes
- **WHEN** Button receives `size` equal to one of: sm, md, lg
- **THEN** the button displays with the corresponding size (small, medium, or large)

#### Scenario: Button renders with icon
- **WHEN** Button receives `iconLeft` or `iconRight` with a valid IconName
- **THEN** the corresponding Icon is rendered inside the button (left or right of children)

#### Scenario: Button supports disabled state
- **WHEN** Button receives `disabled={true}`
- **THEN** the button is not clickable and displays disabled styling

### Requirement: Button uses CSS modules and BEM

The project SHALL style the Button component using CSS modules with BEM naming.

#### Scenario: Styles use BEM
- **WHEN** developer inspects Button.module.css
- **THEN** class names follow BEM convention (block, element, modifier) and use CSS variables where appropriate

#### Scenario: Variants and sizes are modifiers
- **WHEN** Button receives `variant="primary"` and `size="md"`
- **THEN** the root element has modifier classes such as `button--primary` and `button--md`

### Requirement: Button has stories

The Button component SHALL have Storybook stories.

#### Scenario: Stories exist
- **WHEN** developer opens Storybook
- **THEN** Button stories exist at `src/components/Button/` and demonstrate variants, sizes, with/without icons, and disabled state
