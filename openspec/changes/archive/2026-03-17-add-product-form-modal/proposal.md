## Why

По плану разработки (DEV_PLAN §5) нужно реализовать форму добавления товара. Пользователь должен иметь возможность открыть модальное окно по кнопке «Добавить», заполнить поля и отправить форму. На первом этапе товары не сохраняются — достаточно показать Toast при успешной отправке.

## What Changes

- Добавить форму AddProductForm с полями: Наименование, цена, вендор, артикул
- Валидация через React Hook Form + Zod (цена — число, положительное)
- Модальное окно по кнопке «Добавить» на ProductPage
- При отправке: Toast «Товар добавлен», закрытие модалки, сброс формы
- Подключить ToastProvider в app (если ещё не подключён)

## Capabilities

### New Capabilities

- `add-product-form`: форма добавления товара в модальном окне, валидация RHF+Zod, Toast при submit

### Modified Capabilities

- (нет — существующие specs не меняются)

## Impact

- `src/features/ProductTable/` — новый AddProductForm
- `src/pages/ProductPage/` — состояние модалки, обработчик кнопки «Добавить»
- `src/app/providers.tsx` — ToastProvider (если отсутствует)
- Зависимости: react-hook-form, @hookform/resolvers, zod (уже в проекте)
