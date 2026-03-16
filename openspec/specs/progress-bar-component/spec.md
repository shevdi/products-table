# progress-bar-component Specification

## Purpose

Simple ProgressBar wrapper over Radix Progress; used for loading indicator in ProductTable and other progress displays.

## Requirements

### Requirement: ProgressBar component exists as simple wrapper

The project SHALL have a ProgressBar component in `src/components/ProgressBar/` that wraps `@radix-ui/react-progress` and exposes a simple API with `value`, `max`, and optional `className`.

#### Scenario: ProgressBar shows determinate progress
- **WHEN** ProgressBar receives `value={50}` and `max={100}` (or default max)
- **THEN** the progress bar displays 50% filled

#### Scenario: ProgressBar shows indeterminate state
- **WHEN** ProgressBar receives `value={null}` or `value={undefined}`
- **THEN** the progress bar displays indeterminate/loading state (Radix data-state="indeterminate")

#### Scenario: ProgressBar accepts custom max
- **WHEN** ProgressBar receives `value={75}` and `max={150}`
- **THEN** the progress bar displays 50% filled (75/150)

#### Scenario: ProgressBar forwards className
- **WHEN** ProgressBar receives `className="custom-class"`
- **THEN** the root element includes the custom class for styling composition

### Requirement: ProgressBar uses CSS modules and BEM

The project SHALL style the ProgressBar component using CSS modules with BEM naming.

#### Scenario: Styles use BEM
- **WHEN** developer inspects ProgressBar.module.css
- **THEN** class names follow BEM convention (e.g., progressBar, progressBar__indicator) and use CSS variables where appropriate

### Requirement: ProgressBar has stories

The ProgressBar component SHALL have Storybook stories.

#### Scenario: Stories exist
- **WHEN** developer opens Storybook
- **THEN** ProgressBar stories exist at `src/components/ProgressBar/` and demonstrate determinate, indeterminate, and various value/max combinations
