## ADDED Requirements

### Requirement: ProductTable displays thumbnail in name column

The project SHALL display a product thumbnail (48×48px) in the "Наименование" cell. When `thumbnail` is present, render an `<img>`; when absent, render a gray placeholder matching the Figma design.

#### Scenario: Thumbnail shown when available
- **WHEN** a product has a `thumbnail` URL
- **THEN** the name cell displays a 48×48 image from that URL

#### Scenario: Placeholder when thumbnail absent
- **WHEN** a product has no `thumbnail` or empty string
- **THEN** the name cell displays a gray placeholder (48×48) instead of an image

#### Scenario: Name cell layout order
- **WHEN** ProductTable renders the name column
- **THEN** the cell content order is: checkbox | photo/placeholder | title + category

### Requirement: ProductTable name column has specified width

The project SHALL set the "Наименование" column to `size: 280` and `minSize: 200` to match Figma layout and prevent name truncation.

#### Scenario: Name column width
- **WHEN** ProductTable defines the name column
- **THEN** the column has `size: 280` (base width ≈278px per Figma)

#### Scenario: Name column minimum width
- **WHEN** the table is resized or viewed on narrow screens
- **THEN** the name column does not shrink below 200px (horizontal scroll applies via BaseTable overflow-x)
