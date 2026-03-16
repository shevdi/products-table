## Why

DEV_PLAN ставит Button (1.2) вторым среди базовых компонентов после Icons. Button нужен для AddProductForm («Добавить»), ProductTable («+», «...», Refresh), LoginPage и других фич. Сейчас `src/components/Button/` содержит только заглушку. Нужен полноценный переиспользуемый компонент Button с поддержкой вариантов и иконок.

## What Changes

- Реализовать компонент Button в `src/components/Button/`
- Поддержка вариантов (primary, secondary) и размеров
- Опциональная иконка слева или справа через интеграцию с Icon
- Использовать Radix UI primitives (если применимо) или нативный button
- CSS modules, БЭМ, CSS variables
- Stories в Storybook

## Capabilities

### New Capabilities

- `button-component`: Компонент Button с вариантами, размерами и опциональной иконкой. Используется в AddProductForm, ProductTable, LoginPage и других фичах.

### Modified Capabilities

- (none)

## Impact

- `src/components/Button/` — Button.tsx, Button.types.ts, Button.module.css, Button.stories.tsx, index.ts
- Зависимости: Icon (уже реализован), Radix UI primitives (по требованию TECH_SPEC)
