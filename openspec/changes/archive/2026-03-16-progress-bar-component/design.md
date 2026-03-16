## Context

- TECH_SPEC требует прогресс-бар при подгрузке товаров (ProductTable, п. 3.4)
- Проект использует radix-ui primitives (Modal, Toast, Checkbox и т.д.)
- CSS modules, БЭМ, CSS variables; stories рядом с компонентами
- `@radix-ui/react-progress` — отдельная зависимость, нужно добавить

## Goals / Non-Goals

**Goals:**
- Простая обёртка над `@radix-ui/react-progress` с минимальным API
- Поддержка determinate (value/max) и indeterminate (value=null)
- Стилизация через CSS modules, БЭМ, CSS variables
- Storybook stories для демонстрации

**Non-Goals:**
- Compound components — один компонент достаточно
- Кастомные анимации — базовые CSS transitions
- Сложная кастомизация — value, max, className

## Decisions

### 1. Radix Progress как база

**Решение:** Использовать `@radix-ui/react-progress` (Root + Indicator).

**Обоснование:** Соответствует подходу Modal/Toast; даёт accessibility (progressbar role, ARIA), поддержку indeterminate; минимальный API.

**Альтернативы:** Нативный `<progress>` — ограниченная стилизация; кастомная реализация — дублирование логики.

### 2. API: value, max, className

**Решение:** Props: `value?: number | null` (null = indeterminate), `max?: number` (default 100), `className?: string`.

**Обоснование:** value=null → Radix переводит в indeterminate; max=100 — типичный процент; className для композиции.

### 3. Структура компонента

**Решение:** Один компонент `ProgressBar` — рендерит `Root` + `Indicator` внутри; классы БЭМ: `progressBar`, `progressBar__indicator`.

**Обоснование:** Простая обёртка без compound pattern; Indicator всегда внутри Root.

### 4. Стилизация

**Решение:** CSS modules, БЭМ. Root — трек (фон), Indicator — заполненная часть. Использовать CSS variables для цветов (--color-primary, --color-border-light и т.д.).

**Обоснование:** Соответствует TECH_SPEC; единообразие с другими компонентами.

## Risks / Trade-offs

- [Новая зависимость] → Добавить `@radix-ui/react-progress` в package.json; минимальный footprint.
- [Indeterminate UX] → Radix поддерживает data-state="indeterminate"; CSS animation для бесконечного прогресса при необходимости.
