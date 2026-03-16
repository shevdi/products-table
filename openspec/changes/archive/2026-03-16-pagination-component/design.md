## Context

Pagination — базовый UI-компонент для ProductTable. Существует заглушка в `src/components/Pagination/`. Проект использует CSS modules, BEM, Radix primitives. ProductTable будет вызывать API с `limit` и `skip`, управляя страницей через state/URL.

## Goals / Non-Goals

**Goals:**

- Controlled Pagination: родитель управляет `page`, компонент вызывает `onPageChange`
- Отображение диапазона «Показано X–Y из Z»
- Стрелки `<` `>` как текст (без иконок ChevronLeft/ChevronRight)
- Номера страниц с ellipsis при большом числе страниц
- Активная страница: цвет `#797FEA`
- CSS modules, BEM, CSS variables

**Non-Goals:**

- Локализация текста диапазона
- Выбор pageSize в UI (pageSize — только проп)
- Radix Pagination (нет в Radix — свой компонент)

## Decisions

### 1. Controlled-only API

**Решение:** Только controlled: `page`, `onPageChange`, `totalItems`, `pageSize`.

**Альтернатива:** Uncontrolled с `defaultPage`. Отклонено — ProductTable всегда контролирует страницу через Tanstack Query и URL.

### 2. Стрелки как текст

**Решение:** Использовать символы `<` и `>` в кнопках, без иконок ChevronLeft/ChevronRight.

**Альтернатива:** Добавить иконки в Icon. Отклонено — пользователь явно указал «с помощью текста».

### 3. Цвет активной страницы

**Решение:** `#797FEA` — через CSS variable `--pagination-active-bg` в Pagination.module.css, переопределяемый при необходимости.

### 4. Ellipsis и maxVisiblePages

**Решение:** Показывать до 5 видимых номеров страниц + ellipsis при необходимости. Логика: первая, последняя, текущая и соседи.

### 5. Radix

**Решение:** Собственная реализация без Radix Pagination (примитива нет). Кнопки — обычные `<button>`, доступность — aria-label, role="navigation".

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Нет Radix — меньше готовой доступности | Добавить aria-label, role="navigation", disabled для стрелок на границах |
| Ellipsis-логика может быть сложной | Вынести в утилиту `getVisiblePages(totalPages, currentPage, maxVisible)` |
