# product-table Specification

## Purpose

Таблица товаров: custom cells с кнопками + и ⋮, row selection, интеграция с selectedProductsStore. Структура фичи (хуки, ячейки, потоки данных) описана в спецификации product-table-structure.

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

The project SHALL manage row selection state via selectedProductsStore and useTableRowSelection hook.

#### Scenario: ProductTable reads selection from store
- **WHEN** ProductTable renders
- **THEN** it obtains `selectedIds` and `setSelectedIds` from `useSelectedProductsStore` and passes them to `useTableRowSelection`

#### Scenario: Rows receive selected state via TanStack row API
- **WHEN** a row is selected
- **THEN** the row receives `selected` state through TanStack Table row API (e.g. `row.getIsSelected()`)

#### Scenario: Selected row has visual highlight
- **WHEN** a row is selected
- **THEN** the row displays visual feedback (e.g. left border, background) indicating selection

### Requirement: ProductTable integrates with selectedProductsStore

The project SHALL sync row selection with selectedProductsStore (Zustand store in `features/ProductTable/model/`).

#### Scenario: Selection updates store
- **WHEN** user toggles row selection via checkboxes
- **THEN** `useTableRowSelection`'s handler calls `setSelectedIds` and the store is updated with the new set of selected row IDs

#### Scenario: Store drives selection display
- **WHEN** ProductTable reads `selectedIds` from `useSelectedProductsStore`
- **THEN** `useTableRowSelection` converts to `rowSelection` format and checkboxes/row highlights reflect the store state

### Requirement: ProductTable displays thumbnail in name column

The project SHALL display a product thumbnail (48×48px) in the "Наименование" cell. When `thumbnail` is present, render an `<img>`; when absent, render a gray placeholder matching the Figma design.

#### Scenario: Thumbnail shown when available
- **WHEN** a product has a `thumbnail` URL
- **THEN** the name cell displays a 48×48 image from that URL

#### Scenario: Placeholder when thumbnail absent
- **WHEN** a product has no `thumbnail` or empty string
- **THEN** the name cell displays a gray placeholder (48×48) instead of an image

#### Scenario: Row layout for name area
- **WHEN** ProductTable renders a product row with row selection enabled
- **THEN** the row shows: select column (checkbox) | name column (photo/placeholder | title + category). The checkbox is in a separate column via useTableColumnsWithSelection; ProductNameCell renders only photo and title.

### Requirement: ProductTable name column width (optional)

The project MAY set the "Наименование" column to `size: 280` and `minSize: 200` to match Figma layout. If not set, column uses default TanStack Table sizing.
