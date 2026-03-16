# icon-component Specification (Delta)

## ADDED Requirements

### Requirement: Eye icon exists for password visibility

The project SHALL have an `eye` icon for use in password visibility toggle (paired with `eye-off`).

#### Scenario: Eye icon renders
- **WHEN** Icon receives `name="eye"`
- **THEN** the corresponding eye icon (open eye, no slash) is displayed

#### Scenario: Eye icon in Icon.types
- **WHEN** developer inspects Icon.types.ts
- **THEN** `eye` is included in ICON_NAMES
