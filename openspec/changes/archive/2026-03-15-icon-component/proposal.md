## Why

TECH_SPEC требует «иконки в одном компоненте», DEV_PLAN ставит Icons (1.1) первым среди базовых компонентов. Button и Input зависят от иконок. Нужен единый компонент Icon, который импортирует отдельные иконки и в зависимости от пропса `name` возвращает нужную.

## What Changes

- Создать компонент Icon в `src/components/Icon/`
- Реализовать 8 иконок в отдельных файлах: SearchIcon, ReloadIcon, PlusIcon, DotsIcon, UserIcon, CloseIcon, LockIcon, HideIcon
- Icon импортирует иконки и по пропсу `name` возвращает соответствующую
- Inline SVG, без внешних библиотек
- Stories в Storybook

## Capabilities

### New Capabilities

- `icon-component`: Компонент Icon с отдельными файлами иконок в `Icons/`. Icon по пропсу `name` возвращает нужную иконку.

### Modified Capabilities

- (none)

## Impact

- `src/components/Icon/` — Icon.svg, Icon.types.ts, Icon.module.css, Icon.stories.svg, index.ts
- `src/components/Icon/Icons/` — SearchIcon, ReloadIcon, PlusIcon, DotsIcon, UserIcon, CloseIcon, LockIcon, HideIcon, index.ts
- Зависимости: нет новых
