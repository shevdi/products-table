## Why

Нужна переиспользуемая таблица для вывода товаров с поддержкой сортировки, выбора строк, кастомных ячеек и семантичной разметки. BaseTable обеспечивает общую логику рендеринга и конфигурации, ProductTable — доменную реализацию с кнопками действий и интеграцией с Root-состоянием.

## What Changes

- **BaseTable** — базовый компонент таблицы:
  - Рендерит простые текстовые значения по умолчанию
  - Поддержка кастомных ячеек через `cell` в определении колонки
  - Семантичная таблица (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`)
  - Truncation по умолчанию для текстовых колонок с возможностью переопределения
  - Sort indicators (↑↓) рядом с заголовками
  - Дефолтное значение при 0 строк, переопределяемое через проп

- **ProductTable** — таблица товаров:
  - Рендерит кнопки «+» и «⋮» через custom cell
  - Управляет состоянием (row selection)
  - Передаёт `selectedRowIds` / `rowSelection` в Root
  - Строки получают `selected` state через TanStack row API

## Capabilities

### New Capabilities

- `base-table`: Базовый компонент таблицы на TanStack Table — семантичная разметка, простой текст, кастомные ячейки, truncation, sort indicators, empty state
- `product-table`: Таблица товаров — custom cells с кнопками + и ⋮, row selection, интеграция с Root store

### Modified Capabilities

- (нет — ProductTable и BaseTable не имеют существующих specs)

## Impact

- **components/Table/** — новый BaseTable (или components/BaseTable/)
- **features/ProductTable/** — обновление/создание ProductTable с использованием BaseTable
- **stores/selectedProductsStore** — интеграция с row selection
- **pages/ProductPage** — передача selectedRowIds в Root
- TanStack Table — использование row selection API, column definitions с cell/accessorKey
