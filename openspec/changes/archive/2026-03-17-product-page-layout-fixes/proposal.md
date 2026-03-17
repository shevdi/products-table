## Why

Страница товаров не соответствует макету Figma: названия обрезаются, отсутствует превью изображения в колонке «Наименование», пагинация не интегрирована. Требуется привести вёрстку к макету и устранить обрезку названий.

## What Changes

- **Колонка «Наименование»**: задать `size: 280`, `minSize: 200` (по макету ≈278px). Горизонтальный скролл на узких экранах сохраняется (BaseTable уже имеет `overflow-x: auto`).
- **ProductNameCell**: добавить блок с фото 48×48 — при наличии `thumbnail` показывать `<img>`, иначе серый placeholder. Структура: чекбокс | фото | название + категория.
- **ProductPage**: интегрировать компонент Pagination, связать с `limit`/`skip` из `useQuery`. Текст «Показано X–Y из Z» уже есть в Pagination.
- **Мелкие правки**: выравнивание цифр в кнопках пагинации, проверка отступов по макету.

## Capabilities

### New Capabilities

- None

### Modified Capabilities

- `product-table`: добавить требование отображения thumbnail в ячейке «Наименование» (48×48, placeholder при отсутствии). Добавить требование ширины колонки «Наименование» (size 280, minSize 200).

## Impact

- `src/features/ProductTable/ProductTable.tsx` — колонки, ProductNameCell
- `src/components/BaseTable/BaseTable.tsx` — поддержка size/minSize (если ещё не реализована)
- `src/pages/ProductPage/ProductPage.tsx` — Pagination, state limit/skip, useQuery
