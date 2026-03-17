# base-table Specification

## Purpose

Базовый компонент таблицы на TanStack Table: семантичная разметка, простой текст, кастомные ячейки, truncation, sort indicators, empty state.

## Requirements

### Requirement: BaseTable renders semantic table structure

The project SHALL render BaseTable using semantic HTML elements: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`.

#### Scenario: Table has semantic structure
- **WHEN** BaseTable is rendered with data and columns
- **THEN** the output contains `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` elements

#### Scenario: Headers use th elements
- **WHEN** BaseTable renders column headers
- **THEN** each header is rendered in a `<th>` element

#### Scenario: Data cells use td elements
- **WHEN** BaseTable renders row data
- **THEN** each cell is rendered in a `<td>` element

### Requirement: BaseTable renders simple text values by default

The project SHALL render cell content as plain text when no custom `cell` is provided in the column definition.

#### Scenario: Default text render
- **WHEN** a column has `accessorKey` and no `cell` function
- **THEN** BaseTable renders `row.getValue(accessorKey)` as text content

#### Scenario: Custom cell overrides default
- **WHEN** a column has a `cell` function
- **THEN** BaseTable renders the result of `cell({ row, getValue })` instead of plain text

### Requirement: BaseTable supports custom cells

The project SHALL allow column definitions to include a custom `cell` render function.

#### Scenario: Custom cell receives row context
- **WHEN** a column defines `cell: ({ row }) => ...`
- **THEN** the cell function receives `row` from TanStack Table API

#### Scenario: Custom cell renders custom content
- **WHEN** a column uses a custom cell
- **THEN** the rendered content replaces the default text value

### Requirement: BaseTable applies truncation to text columns by default

The project SHALL apply text truncation (ellipsis) to text columns by default, with the ability to override via column `meta.truncate`.

#### Scenario: Default truncation for text columns
- **WHEN** a column has no `meta.truncate` or `meta.truncate === true`
- **THEN** long text in the cell is truncated with ellipsis (e.g. `text-overflow: ellipsis`)

#### Scenario: Truncation can be disabled per column
- **WHEN** a column has `meta: { truncate: false }`
- **THEN** text in that column is not truncated

### Requirement: BaseTable renders sort indicators

The project SHALL render sort indicators (↑↓) next to column headers when sorting is enabled.

#### Scenario: Sort indicator for ascending
- **WHEN** a column is sorted ascending
- **THEN** an up arrow (↑) is displayed next to the header

#### Scenario: Sort indicator for descending
- **WHEN** a column is sorted descending
- **THEN** a down arrow (↓) is displayed next to the header

#### Scenario: Header click toggles sort
- **WHEN** user clicks a sortable column header
- **THEN** the sort direction toggles (asc ↔ desc)

### Requirement: BaseTable shows default empty state when no rows

The project SHALL display a default message when `data.length === 0`, overridable via `emptyMessage` prop.

#### Scenario: Default empty message
- **WHEN** BaseTable receives `data` with length 0 and no `emptyMessage` prop
- **THEN** a default message (e.g. "Нет данных") is displayed in a single row spanning all columns

#### Scenario: Custom empty message
- **WHEN** BaseTable receives `emptyMessage="Список пуст"`
- **THEN** "Список пуст" is displayed instead of the default when there are no rows
