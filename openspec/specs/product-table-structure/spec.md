# product-table-structure Specification

## Purpose

Структура фичи ProductTable: расположение хуков, ячеек, колонок и потоки данных. Документирует «как устроена фича» для согласования реализации с документацией.

## Requirements

### Requirement: ProductTable feature has hooks folder

The project SHALL have `src/features/ProductTable/hooks/` containing custom hooks for page params, data fetching, and row selection.

#### Scenario: useProductPageParams exists
- **WHEN** developer inspects `src/features/ProductTable/hooks/`
- **THEN** `useProductPageParams.ts` exists and exports `useProductPageParams`

#### Scenario: useProductsQuery exists
- **WHEN** developer inspects `src/features/ProductTable/hooks/`
- **THEN** `useProductsQuery.ts` exists and exports `useProductsQuery`

#### Scenario: useTableRowSelection exists
- **WHEN** developer inspects `src/features/ProductTable/hooks/`
- **THEN** `useTableRowSelection.ts` exists and exports `useTableRowSelection`

### Requirement: useProductPageParams syncs URL with search, page, sorting

The project SHALL provide `useProductPageParams` that reads and updates URL search params for product list state.

#### Scenario: Returns search, page, sorting from URL
- **WHEN** `useProductPageParams` is called
- **THEN** it returns `{ search, page, sorting, handleSearchChange, handlePageChange, handleSortingChange }` derived from `?q=`, `?page=`, `?sortBy=`, `?order=`

#### Scenario: Handlers update URL
- **WHEN** `handleSearchChange(value)` or `handlePageChange(page)` or `handleSortingChange(updater)` is called
- **THEN** URL search params are updated via `setSearchParams` (replace mode)

### Requirement: useProductsQuery fetches products with debounce

The project SHALL provide `useProductsQuery(search, page, sorting)` that fetches products from API with debounced search.

#### Scenario: Returns products and loading state
- **WHEN** `useProductsQuery(search, page, sorting)` is called
- **THEN** it returns `{ products, totalItems, isLoading, handleRefresh, pageSize }`

#### Scenario: Search is debounced
- **WHEN** search value changes
- **THEN** API request uses debounced value (e.g. 500ms) to reduce requests

### Requirement: useTableRowSelection bridges selectedIds with TanStack rowSelection

The project SHALL provide `useTableRowSelection(selectedIds, setSelectedIds)` that converts between `string[]` and TanStack `RowSelectionState`.

#### Scenario: Returns rowSelection and handler
- **WHEN** `useTableRowSelection(selectedIds, setSelectedIds)` is called
- **THEN** it returns `{ rowSelection, handleRowSelectionChange }` for BaseTable props

#### Scenario: Selection updates store via setSelectedIds
- **WHEN** user toggles rows via checkboxes
- **THEN** `handleRowSelectionChange` calls `setSelectedIds` with new array of selected IDs

### Requirement: ProductTable has model with selectedProductsStore

The project SHALL have `src/features/ProductTable/model/selectedProductsStore.ts` with Zustand store for selected product IDs.

#### Scenario: Store exports useSelectedProductsStore
- **WHEN** developer inspects `src/features/ProductTable/model/`
- **THEN** `selectedProductsStore.ts` exists and exports `useSelectedProductsStore`

#### Scenario: Store provides selectedIds and setSelectedIds
- **WHEN** `useSelectedProductsStore()` is called
- **THEN** it returns `{ selectedIds: string[], setSelectedIds: (ids: string[]) => void }`

### Requirement: ProductTable defines custom cells for name, rating, actions

The project SHALL have `ProductNameCell`, `RatingCell`, and `ActionsCell` in `src/features/ProductTable/ui/`.

#### Scenario: ProductNameCell renders thumbnail and title
- **WHEN** ProductNameCell receives `row` with product
- **THEN** it renders thumbnail (or placeholder) 48×48, title, and category

#### Scenario: RatingCell renders rating with low-rating styling
- **WHEN** RatingCell receives `row` with product
- **THEN** it renders rating as "X.X/5" with distinct style when rating < 3

#### Scenario: ActionsCell renders add and menu buttons
- **WHEN** ActionsCell receives `row` with product
- **THEN** it renders add button (plus icon) and menu button (dots icon)

### Requirement: productTableColumns defines column definitions

The project SHALL have `productTableColumns.tsx` in `src/features/ProductTable/ui/` exporting column definitions for BaseTable.

#### Scenario: Columns include name, brand, sku, rating, price, actions
- **WHEN** developer inspects `productTableColumns`
- **THEN** columns for name (with ProductNameCell), brand, sku, rating (with RatingCell), price, actions (with ActionsCell) are defined

### Requirement: ProductPage composes hooks and passes data to ProductTable

The project SHALL have ProductPage use `useProductPageParams` and `useProductsQuery`, passing derived state to ProductSearch, ProductTable, and Pagination.

#### Scenario: ProductPage uses both hooks
- **WHEN** ProductPage renders
- **THEN** it calls `useProductPageParams()` and `useProductsQuery(search, page, sorting)`

#### Scenario: ProductTable receives products and sorting
- **WHEN** ProductPage renders ProductTable
- **THEN** it passes `products`, `sorting`, `onSortingChange`, `isLoading` from hooks

### Requirement: ProductTable uses store and useTableRowSelection internally

The project SHALL have ProductTable read `useSelectedProductsStore` and `useTableRowSelection`, passing `rowSelection` and `onRowSelectionChange` to BaseTable.

#### Scenario: ProductTable does not receive selection from parent
- **WHEN** ProductTable renders
- **THEN** it obtains `selectedIds` and `setSelectedIds` from `useSelectedProductsStore` directly (not from props)

#### Scenario: BaseTable receives row selection state
- **WHEN** ProductTable renders BaseTable
- **THEN** it passes `rowSelection`, `onRowSelectionChange`, `enableRowSelection`, `getRowId`

### Requirement: BaseTable uses useTableColumnsWithSelection for selection column

The project SHALL have BaseTable use `useTableColumnsWithSelection(columns, enableRowSelection)` to prepend selection column when enabled.

#### Scenario: Selection column is prepended when enabled
- **WHEN** BaseTable receives `enableRowSelection={true}` and columns
- **THEN** `useTableColumnsWithSelection` returns columns with select column first (header checkbox, row checkboxes)

#### Scenario: No selection column when disabled
- **WHEN** BaseTable receives `enableRowSelection={false}` or omitted
- **THEN** columns are passed through unchanged
