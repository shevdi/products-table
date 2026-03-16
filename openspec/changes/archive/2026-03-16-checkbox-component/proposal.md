# Checkbox Component Proposal

## Why

The project needs a reusable Checkbox component styled consistently with Input for use in Table (row selection), filters, and forms. The existing `src/components/Checkbox/` folder is a stub. A compound Checkbox aligned with Input patterns will ensure visual and API consistency across the product table UI.

## What Changes

- Add new CSS variables for checkbox states: unchecked border/label (`#B2B3B9`), checked border/fill (`#3C538E`)
- Implement compound Checkbox component (Checkbox.Root, Checkbox.Box, Checkbox.Label) in `src/components/Checkbox/`
- Single size (22×22px box, 4px radius, 20px gap to label) and single state (checked/unchecked)
- Full accessibility: `aria-checked`, `aria-invalid`, `aria-disabled`, keyboard support (Tab, Space), label association
- No CheckboxGroup — standalone checkbox only
- Storybook stories demonstrating default, with label, disabled, and form usage

## Capabilities

### New Capabilities

- `checkbox-component`: Reusable compound Checkbox with Root, Box, Label; styled like Input; used in Table, filters, and forms; accessible.

### Modified Capabilities

- (none)

## Impact

- **src/index.css**: Add `--color-checkbox-unchecked`, `--color-checkbox-checked`
- **src/components/Checkbox/**: Replace stub with full implementation (Root, Box, Label, context, styles, stories)
- **Consumers**: ProductTable (row selection), filters, AddProductForm — will import and use Checkbox
