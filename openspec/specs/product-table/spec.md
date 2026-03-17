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
