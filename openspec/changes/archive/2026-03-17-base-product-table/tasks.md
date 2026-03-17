# BaseTable & ProductTable Tasks

## 1. BaseTable Setup

- [x] 1.1 Create `src/components/BaseTable/` folder with `BaseTable.tsx`, `BaseTable.module.css`, `index.ts`
- [x] 1.2 Install TanStack Table if not present (`@tanstack/react-table`)
- [x] 1.3 Define BaseTable props interface: `data`, `columns`, `sorting`, `onSortingChange`, `rowSelection`, `onRowSelectionChange`, `emptyMessage?`

## 2. BaseTable Core Rendering

- [x] 2.1 Implement semantic table structure: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` using TanStack Table `flexRender`
- [x] 2.2 Render simple text values when column has no `cell` — use `row.getValue(accessorKey)` as fallback
- [x] 2.3 Support custom `cell` in column definition — render `cell({ row, getValue })` when provided
- [x] 2.4 Add `emptyMessage` prop (default "Нет данных"); when `data.length === 0` render single row with `colSpan` and empty message

## 3. BaseTable Truncation & Sort

- [x] 3.1 Apply truncation (text-overflow: ellipsis) to text cells by default; respect `meta.truncate` (default true, allow false to disable)
- [x] 3.2 Render sort indicators (↑/↓) next to column headers based on `column.getIsSorted()`
- [x] 3.3 Wire header click to `column.getToggleSortingHandler()` for sortable columns

## 4. BaseTable Row Selection

- [x] 4.1 Enable TanStack Table row selection: pass `state.rowSelection`, `onRowSelectionChange`, `enableRowSelection`
- [x] 4.2 Add selection column with Checkbox for each row; use `row.getIsSelected()`, `row.getToggleSelectedHandler()`
- [x] 4.3 Add header "select all" checkbox when applicable
- [x] 4.4 Apply selected row styling (e.g. left border, background) via `row.getIsSelected()`

## 5. BaseTable Styles & Stories

- [x] 5.1 Create `BaseTable.module.css` with BEM classes, CSS variables, truncation styles
- [x] 5.2 Create `BaseTable.stories.tsx` with stories: Default, Empty, WithSorting, WithSelection, CustomCells

## 6. ProductTable Column Definitions

- [x] 6.1 Define product columns: Наименование (title+category), Вендор, Артикул, Оценка, Цена, Действия
- [x] 6.2 Implement custom cell for Наименование: title (bold) + category (small gray)
- [x] 6.3 Implement custom cell for Оценка: format as "X.X/5", red when rating < 3
- [x] 6.4 Implement custom cell for Действия: "+" and "⋮" buttons (use Button or icon buttons)

## 7. ProductTable State & Integration

- [x] 7.1 Use BaseTable inside ProductTable; pass `data` from props (products)
- [x] 7.2 Sync `rowSelection` with `selectedProductsStore`: on `onRowSelectionChange` update store with `selectedIds`
- [x] 7.3 Pass `rowSelection` from store (map selectedIds to `{ [id]: true }`) to BaseTable
- [x] 7.4 Update ProductPage to fetch products, pass to ProductTable, and ensure selectedRowIds flow to Root/store

## 8. ProductTable Stories

- [x] 8.1 Create `ProductTable.stories.tsx` with stories: Default, WithSelection, Empty, LongNames (truncation)
