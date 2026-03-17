# product-table Specification

## Purpose

Таблица товаров: custom cells с кнопками + и ⋮, row selection, интеграция с Root store.

## Requirements

### Requirement: ProductTable renders + and ⋮ buttons via custom cell

The project SHALL render action buttons (add "+" and menu "⋮") in a custom cell for each product row.

#### Scenario: Add button in each row
- **WHEN** ProductTable renders a product row
- **THEN** a "+" button is displayed in the actions column

#### Scenario: Menu button in each row
- **WHEN** ProductTable renders a product row
- **THEN** a "⋮" (three dots) button is displayed in the actions column

#### Scenario: Buttons are in custom cell
- **WHEN** ProductTable defines the actions column
- **THEN** the column uses a custom `cell` render function for the buttons

### Requirement: ProductTable manages row selection state

The project SHALL manage row selection state and pass it to Root (ProductPage).

#### Scenario: Row selection is passed to Root
- **WHEN** user selects or deselects rows via checkboxes
- **THEN** `selectedRowIds` or `rowSelection` is passed to the parent (Root / ProductPage)

#### Scenario: Rows receive selected state via TanStack row API
- **WHEN** a row is selected
- **THEN** the row receives `selected` state through TanStack Table row API (e.g. `row.getIsSelected()`)

#### Scenario: Selected row has visual highlight
- **WHEN** a row is selected
- **THEN** the row displays visual feedback (e.g. left border, background) indicating selection

### Requirement: ProductTable integrates with selectedProductsStore

The project SHALL sync row selection with the application store (selectedProductsStore or equivalent).

#### Scenario: Selection updates store
- **WHEN** user toggles row selection
- **THEN** the store is updated with the new set of selected row IDs

#### Scenario: Store drives selection display
- **WHEN** ProductTable receives `rowSelection` from Root (derived from store)
- **THEN** checkboxes and row highlights reflect the store state

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
