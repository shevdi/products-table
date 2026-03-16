## Why

ProductTable (DEV_PLAN 3.6) требует пагинацию для навигации по списку товаров. Сейчас Pagination — заглушка в `src/components/Pagination/`. Нужен переиспользуемый UI-компонент, готовый для Storybook и интеграции с ProductTable (5 товаров на страницу).

## What Changes

- Добавить компонент Pagination в `src/components/Pagination/`
- Controlled API: `page`, `onPageChange`, `totalItems`, `pageSize`
- Отображение диапазона: «Показано X–Y из Z» (без локализации)
- Навигация: стрелки `<` `>` (текст, не иконки) и номера страниц
- Ellipsis при большом числе страниц
- Стили: CSS modules, BEM, активная страница `#797FEA`

## Capabilities

### New Capabilities

- `pagination-component`: Компонент Pagination с controlled API, отображением диапазона, стрелками и номерами страниц

### Modified Capabilities

- (none)

## Impact

- `src/components/Pagination/` — новая реализация
- ProductTable (будущая фича) — будет использовать Pagination
- Storybook — новые stories для Pagination
