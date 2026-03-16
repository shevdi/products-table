# icon-component Specification

## Purpose
TBD - created by archiving change icon-component. Update Purpose after archive.
## Requirements
### Requirement: Icon component exists

The project SHALL have an Icon component in `src/components/Icon/` that displays an icon by name.

#### Scenario: Icon renders by name
- **WHEN** Icon receives `name="search"`
- **THEN** the rendered element displays the search icon

#### Scenario: All supported icons render
- **WHEN** Icon receives `name` equal to one of: search, reload, plus, dots, user, close, lock, hide
- **THEN** the corresponding icon is displayed

#### Scenario: Icon imports from Icons
- **WHEN** developer inspects Icon.svg
- **THEN** Icon imports individual icon components from `Icons/` and renders based on name prop

### Requirement: Icons in separate files

The project SHALL have each icon in a separate file under `src/components/Icon/Icons/`.

#### Scenario: Icon files exist
- **WHEN** developer inspects `src/components/Icon/Icons/`
- **THEN** files exist: SearchIcon.svg, ReloadIcon.svg, PlusIcon.svg, DotsIcon.svg, UserIcon.svg, CloseIcon.svg, LockIcon.svg, HideIcon.svg, index.ts

#### Scenario: Icons use inline SVG
- **WHEN** any icon component is rendered
- **THEN** it outputs SVG elements (path, circle, etc.) with currentColor

### Requirement: Eye icon exists for password visibility

The project SHALL have an `eye` icon for use in password visibility toggle (paired with `eye-off`).

#### Scenario: Eye icon renders
- **WHEN** Icon receives `name="eye"`
- **THEN** the corresponding eye icon (open eye, no slash) is displayed

#### Scenario: Eye icon in Icon.types
- **WHEN** developer inspects Icon.types.ts
- **THEN** `eye` is included in ICON_NAMES

### Requirement: Icon has stories

The Icon component SHALL have Storybook stories.

#### Scenario: Stories exist
- **WHEN** developer opens Storybook
- **THEN** Icon stories exist at `src/components/Icon/` and demonstrate all icons

