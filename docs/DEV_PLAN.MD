# План разработки

План реализации приложения products-table по [TECH_SPEC.MD](./TECH_SPEC.MD).

---

## 0. Подготовка

0.1 Инициализировать проект (Vite + React + TS) ✅  
0.2 Настроить Storybook, ESLint, Prettier ✅  
0.3 Создать структуру папок (app, api, stores, pages, features, components, shared) ✅  

---

## 1. Базовые компоненты (Storybook)

Стили: CSS modules, БЭМ, CSS variables
Stories: хранить параллельно с компонентами
1.1 Icons ✅
1.2 Button ✅
1.3 Input ✅
1.4 Checkbox ✅
1.5 Modal ✅
1.6 Toast ✅
1.7 ProgressBar ✅
1.8 Pagination ✅
1.9 Table ✅

---

## 2. Авторизация

2.1 LoginPage ✅
2.2 api/auth.ts — метод login ✅
2.3 authStore (Zustand): token, user, remember me ✅
2.4 AuthForm: валидация (React Hook Form + Zod), обработка ошибок ✅
2.5 Protected routes: / и /products требуют авторизации ✅
2.6 Редирект неавторизованных на /login ✅
2.7 Логика remember me: localStorage vs sessionStorage ✅

---

## 3. Список товаров

3.1 ProductPage
3.2 api/products.ts — fetch, pagination, sort
3.3 Tanstack Query: useProducts (limit 5, skip, sortBy, order)
3.4 ProductTable: колонки по макету (наименование, вендор, артикул, оценка, цена)
3.5 Прогресс-бар при загрузке
3.6 Сортировка по столбцам, состояние в URL (query params)
3.7 Пагинация (5 товаров на страницу)
3.8 Подсветка рейтинга < 3 красным

---

## 4. Поиск

4.1 ProductSearch: поле ввода с debounce 500ms
4.2 Интеграция с API search (пустой запрос → весь список)
4.3 Связка ProductSearch + ProductTable на ProductPage

---

## 5. Выбор и добавление товара

5.1 selectedProductsStore: добавление/удаление по чекбоксу
5.2 Чекбоксы в таблице (логика выбора)
5.3 AddProductForm: поля Наименование, цена, вендор, артикул
5.4 Модальное окно по кнопке «Добавить»
5.5 Локальное добавление в state (без API)
5.6 Toast при успешном добавлении

---

## 6. Полировка

6.1 Сверстать элементы без логики: «Создать», «+», «...», Refresh
6.2 app/providers, app/router
6.3 Интеграция всех фич в приложение
6.4 Финальная проверка по TECH_SPEC