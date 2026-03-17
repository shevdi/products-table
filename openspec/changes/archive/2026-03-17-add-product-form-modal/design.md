## Context

- ProductPage уже имеет кнопку «Добавить» без обработчика
- Modal и Toast компоненты существуют (Radix UI)
- AuthForm использует React Hook Form + Zod + Controller + Input — тот же паттерн применим
- ToastProvider не подключён в app/providers — toast() не сработает без него

## Goals / Non-Goals

**Goals:**
- Форма с 4 полями (title, price, brand, sku), валидация Zod
- Модалка по кнопке «Добавить»
- Submit → Toast «Товар добавлен» → закрыть модалку → reset формы

**Non-Goals:**
- Сохранение товаров в store или API
- Локальное добавление в таблицу

## Decisions

### 1. Расположение AddProductForm
**Решение:** `features/ProductTable/ui/AddProductForm.tsx` (рядом с ProductTable, по TECH_SPEC)

**Альтернатива:** `features/AddProductForm/` — отдельная фича. Отклонено: форма логически часть ProductTable flow.

### 2. Управление модалкой
**Решение:** useState в ProductPage (`addModalOpen`), кнопка «Добавить» вызывает `setAddModalOpen(true)`.

**Альтернатива:** Zustand slice. Отклонено: состояние локально для страницы, не нужно глобально.

### 3. Валидация цены
**Решение:** `z.number().positive('Цена должна быть положительным числом')` — число, строго > 0.

**Альтернатива:** `z.coerce.number()` для парсинга строки. Принято: использовать `z.coerce.number()` чтобы Input (string) корректно валидировался.

### 4. ToastProvider
**Решение:** Обернуть App в ToastProvider в `app/providers.tsx` (или в router/App).

**Альтернатива:** Локальный ToastProvider только на ProductPage. Отклонено: Toast может понадобиться и на других страницах.

### 5. Паттерн формы
**Решение:** Повторить AuthForm: useForm + zodResolver + Controller + Input. Поля: Input.Root с Label, Box, Field, Error.

## Risks / Trade-offs

- [ToastProvider не подключён] → Добавить в providers.tsx до использования toast()
- [Input для цены] → type="number" или type="text" с валидацией; z.coerce.number() обработает оба
