# Checkbox Component Design

## Context

The project uses compound components (Input.Root, Input.Box, Input.Label) and Radix UI primitives where applicable. Checkbox must match Input styling (border, radius, colors) and integrate with Table, filters, and forms. The design spec defines: unchecked `#B2B3B9`, checked `#3C538E`, 22×22px box, 4px radius, 20px gap, single size, full accessibility.

## Goals / Non-Goals

**Goals:**
- Compound Checkbox (Root, Box, Label) styled like Input
- New CSS variables for checkbox states
- Accessible (ARIA, keyboard, label association)
- Works in Table, filters, forms
- Storybook stories

**Non-Goals:**
- CheckboxGroup
- Multiple sizes or indeterminate state
- Radix UI dependency (use native `<input type="checkbox">` with custom styling for simplicity; Radix Checkbox adds complexity for minimal gain given single-state requirement)

## Decisions

### 1. Native checkbox + compound wrapper

**Решение:** Использовать нативный `<input type="checkbox">` внутри Checkbox.Box, скрытый визуально, с кастомным визуальным индикатором (div/SVG) для стилизации. Label связывается через `htmlFor` / `id`.

**Альтернатива:** @radix-ui/react-checkbox — даёт готовую accessibility, но требует новой зависимости и кастомизации. Для одного размера и одного состояния нативный подход проще и без лишних зависимостей.

### 2. CSS variables в :root

**Решение:** Добавить в `src/index.css`:
- `--color-checkbox-unchecked: #B2B3B9`
- `--color-checkbox-checked: #3C538E`

Использовать в `Checkbox.module.css` для border и fill.

### 3. Структура компонентов

```
Checkbox.Root (Context: checked, onChange, disabled, error, id)
  ├── Checkbox.Box (обёртка над input + визуальный индикатор)
  └── Checkbox.Label (опционально)
```

Checkbox.Box рендерит:
- `<input type="checkbox">` (opacity 0, full area — перехватывает клики по индикатору)
- Видимый div с border/background (22×22, radius 4px)
- Checked: заливка фона `--color-checkbox-checked` (без иконки)

### 4. Layout

- Flex row, gap 20px (checkbox | label)
- Label: `font-size: var(--font-size-sm)`, цвет `--color-checkbox-unchecked` (placeholder-like) или `--color-text` — уточнить: в Figma label серый (#B2B3B9). Использовать `--color-checkbox-unchecked` для label в unchecked, `--color-text` при checked или всегда серый для placeholder-стиля.

**Решение:** Label всегда `--color-checkbox-unchecked` для соответствия макету (серый текст "Наименование").

### 5. Accessibility

- `id` от `useId()` в Root, передаётся в input и Label.htmlFor
- `aria-checked={checked}` на input (нативный checkbox уже имеет)
- `aria-invalid={!!error}` при error
- `aria-disabled` / `disabled` при disabled
- Tab + Space для toggle
- `role="checkbox"` не нужен — нативный input уже имеет семантику

### 6. Controlled / Uncontrolled

Поддержать оба режима: `checked` + `onChange` (controlled) или без них (uncontrolled с внутренним state), по аналогии с Input.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Скрытый input и кастомный UI могут рассинхронизироваться | Использовать один source of truth: input управляет состоянием, визуал — чисто presentation |
| Focus ring на кастомном div | Применить `:focus-visible` на wrapper, который оборачивает input; или `focus-within` на Root |
| React Hook Form | Checkbox.Box/input должен принимать `ref` и `{...register()}` для форм |
