## Why

TECH_SPEC требует прогресс-бар при подгрузке товаров (п. 3.4). Нужен переиспользуемый компонент ProgressBar в `src/components/ProgressBar/` — простая обёртка над Radix UI для единообразия с Modal, Toast и другими UI-примитивами.

## What Changes

- Добавить компонент ProgressBar в `src/components/ProgressBar/`
- Обёртка над `@radix-ui/react-progress` с простым API: `value`, `max`, опционально `indeterminate`
- CSS modules, БЭМ, CSS variables
- Storybook stories рядом с компонентом

## Capabilities

### New Capabilities

- `progress-bar-component`: Компонент ProgressBar — обёртка над @radix-ui/react-progress для отображения прогресса загрузки и других задач

### Modified Capabilities

- (нет)

## Impact

- **Зависимости:** добавить `@radix-ui/react-progress`
- **Код:** новый компонент `src/components/ProgressBar/` (ProgressBar.tsx, ProgressBar.module.css, index.ts, ProgressBar.stories.tsx)
- **Использование:** ProductTable при загрузке данных (п. 3.4 DEV_PLAN)
