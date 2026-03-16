## Context

DEV_PLAN ставит Button (1.2) вторым среди базовых компонентов. Button нужен для AddProductForm («Добавить»), ProductTable («+», «...», Refresh), LoginPage и других фич. Icon уже реализован. TECH_SPEC требует Radix UI primitives, CSS modules, БЭМ, CSS variables. Radix UI не предоставляет отдельный Button primitive — есть Slot для asChild. Используем нативный `button` с опциональным Slot для гибкости.

## Goals / Non-Goals

**Goals:**
- Компонент Button с вариантами (primary, secondary) и размерами (sm, md, lg)
- Опциональная иконка слева или справа через интеграцию с Icon
- Поддержка disabled, loading (опционально)
- CSS modules, БЭМ, CSS variables
- Stories в Storybook
- Использовать @radix-ui/react-slot для asChild (если нужна композиция с link и т.п.)

**Non-Goals:**
- Отдельный Radix Button package (его нет)
- Сложные анимации
- Button group / toolbar (отдельный компонент при необходимости)

## Decisions

### 1. Нативный button + @radix-ui/react-slot
**Решение:** Использовать нативный `<button>` как базовый элемент. Добавить `@radix-ui/react-slot` для поддержки `asChild` — когда нужно рендерить как `<a>` или другой элемент.
**Обоснование:** Radix UI не имеет Button primitive. Slot даёт гибкость без лишней сложности. Нативный button обеспечивает доступность (focus, keyboard) из коробки.

### 2. Варианты и размеры
**Решение:** `variant`: primary, secondary. `size`: sm, md, lg. БЭМ-модификаторы: `button--primary`, `button--secondary`, `button--sm`, `button--md`, `button--lg`.
**Обоснование:** Покрывает сценарии из макета (кнопка «Добавить», «+», «...», Refresh, кнопки в форме входа).

### 3. Иконка через Icon
**Решение:** Пропсы `iconLeft?: IconName` и `iconRight?: IconName`. Button рендерит Icon внутри себя с учётом размера.
**Обоснование:** Icon уже реализован. Единый источник иконок, соответствие TECH_SPEC.

### 4. Структура файлов
**Решение:** `Button.tsx`, `Button.types.ts`, `Button.module.css`, `Button.stories.tsx`, `index.ts` в `src/components/Button/`.
**Обоснование:** Соответствует структуре Icon и другим компонентам. Stories рядом с компонентом.

## Risks / Trade-offs

- **[@radix-ui/react-slot]** → Нужно добавить зависимость. Альтернатива: обойтись без asChild на первом этапе, добавить позже при необходимости.
- **[Иконки]** → Icon должен поддерживать все имена, используемые в кнопках (plus, dots, reload и т.д.). Проверить соответствие IconName.
