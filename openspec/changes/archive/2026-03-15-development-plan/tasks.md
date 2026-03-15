## 1. Подготовка

- 1.1 Инициализировать проект (Vite + React + TS)
- 1.2 Настроить Storybook, ESLint, Prettier
- 1.3 Создать структуру папок (app, api, stores, pages, features, components, shared)
- 1.4 Настроить API client (api/client.ts)
- 1.5 Добавить типы в shared/types

## 2. Базовые компоненты (Storybook)

- 2.1 Button
- 2.2 Input
- 2.3 Checkbox
- 2.4 Modal
- 2.5 Toast
- 2.6 ProgressBar
- 2.7 Pagination
- 2.8 Table (compound components, Tanstack Table)
- 2.9 Стили: CSS modules, БЭМ, CSS variables

## 3. Авторизация

- 3.1 api/auth.ts — метод login
- 3.2 authStore (Zustand): token, user, remember me
- 3.3 AuthForm: валидация (React Hook Form + Zod), обработка ошибок
- 3.4 LoginPage
- 3.5 Protected routes: / и /products требуют авторизации
- 3.6 Редирект неавторизованных на /login
- 3.7 Логика remember me: localStorage vs sessionStorage

## 4. Список товаров

- 4.1 api/products.ts — fetch, pagination, sort
- 4.2 Tanstack Query: useProducts (limit 5, skip, sortBy, order)
- 4.3 ProductTable: колонки по макету (наименование, вендор, артикул, оценка, цена)
- 4.4 Прогресс-бар при загрузке
- 4.5 Сортировка по столбцам, состояние в URL (query params)
- 4.6 Пагинация (5 товаров на страницу)
- 4.7 Подсветка рейтинга < 3 красным
- 4.8 ProductPage

## 5. Поиск

- 5.1 ProductSearch: поле ввода с debounce 500ms
- 5.2 Интеграция с API search (пустой запрос → весь список)
- 5.3 Связка ProductSearch + ProductTable на ProductPage

## 6. Выбор и добавление товара

- 6.1 selectedProductsStore: добавление/удаление по чекбоксу
- 6.2 Чекбоксы в таблице (логика выбора)
- 6.3 AddProductForm: поля Наименование, цена, вендор, артикул
- 6.4 Модальное окно по кнопке «Добавить»
- 6.5 Локальное добавление в state (без API)
- 6.6 Toast при успешном добавлении

## 7. Полировка

- 7.1 Сверстать элементы без логики: «Создать», «+», «...», Refresh
- 7.2 app/providers, app/router
- 7.3 Интеграция всех фич в приложение
- 7.4 Финальная проверка по TECH_SPEC

