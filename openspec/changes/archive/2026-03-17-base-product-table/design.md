# BaseTable & ProductTable Design

## Context

Проект использует TanStack Table, Feature-Driven Architecture, CSS modules, БЭМ. Таблица товаров уже предусмотрена в TECH_SPEC (features/ProductTable, components/Table). Нужно разделить ответственность: BaseTable — переиспользуемая таблица с семантичной разметкой, кастомными ячейками, truncation, sort indicators, empty state; ProductTable — доменная обёртка с кнопками + и ⋮, row selection, интеграция с Root store.

## Goals / Non-Goals

**Goals:**
- BaseTable как generic-компонент на TanStack Table с семантичной разметкой (`<table>`, `<thead>`, `<tbody>`)
- Рендеринг простых значений по умолчанию, кастомные ячейки через `cell` в column definition
- Truncation по умолчанию для текстовых колонок, переопределение через `meta.truncate`
- Sort indicators (↑↓) рядом с заголовками
- Empty state при 0 строк с переопределяемым текстом
- ProductTable: custom cells для кнопок + и ⋮, row selection через TanStack row API
- selectedRowIds / rowSelection передаётся в Root (ProductPage / store)

**Non-Goals:**
- Пагинация внутри BaseTable (уже есть Pagination)
- Фильтрация/поиск внутри таблицы (ProductSearch отдельно)
- Редактирование ячеек inline

## Decisions

### 1. BaseTable как controlled component

**Решение:** BaseTable принимает `data`, `columns`, `sorting`, `onSortingChange`, `rowSelection`, `onRowSelectionChange`, `emptyMessage`. Вся логика состояния — снаружи (controlled). TanStack Table используется как headless, BaseTable рендерит семантичный HTML.

**Альтернатива:** Uncontrolled — BaseTable сам хранит sorting/selection. Отклонено: ProductTable должен синхронизировать selection с Root store, controlled даёт явный контроль.

### 2. Column definition API

**Решение:** Колонки задаются в формате TanStack Table: `accessorKey`, `header`, `cell` (опционально). Для truncation — `meta: { truncate: boolean }` (по умолчанию `true` для текстовых колонок). BaseTable рендерит `cell` если передан, иначе `row.getValue(accessorKey)` как текст.

### 3. Семантичная таблица

**Решение:** Использовать `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`. TanStack Table `flexRender` для ячеек. Без div-based layout — только семантичные элементы.

### 4. Row selection через TanStack row API

**Решение:** Использовать `getRowCanSelect`, `getIsSelected`, `getToggleSelectedHandler` из TanStack Table. ProductTable передаёт `rowSelection` (object `{ [rowId]: boolean }`) и `onRowSelectionChange` в BaseTable. Root (ProductPage) получает `selectedRowIds` и передаёт в store или использует локально.

### 5. Empty state

**Решение:** Проп `emptyMessage?: ReactNode` (по умолчанию "Нет данных"). При `data.length === 0` рендерить `<tbody><tr><td colSpan={columns.length}>{emptyMessage}</td></tr></tbody>`.

### 6. Sort indicators

**Решение:** BaseTable рендерит стрелки ↑/↓ рядом с `header` в зависимости от `column.getIsSorted()`. Использовать `column.getToggleSortingHandler()` для клика по заголовку.

### 7. ProductTable custom cells

**Решение:** ProductTable определяет колонки с `cell: ({ row }) => <ProductActionsCell row={row} />` для кнопок + и ⋮. Колонка «Наименование» — custom cell с title + category. Рейтинг — custom cell с условной подсветкой (красный при < 3).

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| TanStack Table row selection vs store sync | ProductTable подписывается на `onRowSelectionChange`, вызывает callback в Root, Root обновляет store. Один источник правды — store. |
| Truncation vs custom cell | Если `cell` задан, truncation не применяется к custom content. Truncation только для default text render. |
| Sort indicators и i18n | Стрелки ↑↓ — универсальные символы. Текст "Сортировка" — опционально через aria-label. |
