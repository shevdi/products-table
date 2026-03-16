## Context

TECH_SPEC требует «иконки в одном компоненте». Иконки нужны для Button, Input и других компонентов. Каждая иконка — отдельный файл в `Icons/`. Icon импортирует их и по пропсу `name` возвращает нужную.

## Goals / Non-Goals

**Goals:**
- Компонент Icon с пропсом `name`
- 8 иконок в отдельных файлах: SearchIcon, ReloadIcon, PlusIcon, DotsIcon, UserIcon, CloseIcon, LockIcon, HideIcon
- Icon импортирует иконки из Icons/ и рендерит по name
- Inline SVG, viewBox 0 0 24 24, currentColor
- CSS modules + БЭМ
- Stories в Storybook

**Non-Goals:**
- Внешние иконочные библиотеки
- Анимации

## Decisions

### 1. Отдельные файлы для каждой иконки
**Решение:** `Icons/SearchIcon.svg`, `Icons/ReloadIcon.svg` и т.д. Каждый файл экспортирует компонент, возвращающий SVG-содержимое (path, circle и т.п.).
**Обоснование:** Удобно добавлять новые иконки, читаемость, tree-shaking.

### 2. Icons/index.ts — map name → компонент
**Решение:** `Icons/index.ts` импортирует все иконки и экспортирует `iconComponents: Record<IconName, Component>`.
**Обоснование:** Icon.svg получает компонент по name и рендерит его внутри svg.

### 3. IconName и Icon.types.ts
**Решение:** `Icon.types.ts` содержит `ICON_NAMES` и тип `IconName` (search | reload | plus | dots | user | close | lock | hide).
**Обоснование:** Единый источник истины для списка иконок, избежание циклических зависимостей.

### 4. HideIcon вместо NoEyeIcon
**Решение:** Иконка «скрытый пароль» называется HideIcon, name="hide".
**Обоснование:** Соответствие структуре из запроса пользователя.

## Risks / Trade-offs

- **[Регистр папки Icons]** → На Windows возможны конфликты icons vs Icons; использовать `Icons` везде в импортах.
