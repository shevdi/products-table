# Архитектура приложения Products Table (табличная версия)

Альтернативное описание архитектуры SPA-приложения в табличном формате. **Feature-Driven Architecture**, **Component-Driven Development**.

---

## 1. Обзор системы

| Аспект | Описание |
|--------|----------|
| **Тип** | SPA на React |
| **Источник данных** | DummyJSON API |
| **Функции** | Загрузка товаров, сортировка, поиск, выбор, добавление позиций |
| **Авторизация** | Обязательна для основных страниц |

### Взаимодействие частей системы

| Откуда | Куда | Связь |
|--------|------|-------|
| UI компоненты | Zustand stores | чтение/запись состояния |
| UI компоненты | TanStack Query cache | запросы, подписка на данные |
| TanStack Query | DummyJSON API | HTTP-запросы |
| authStore | localStorage / sessionStorage | persist (remember me) |

---

## 2. Слои приложения

| № | Слой | Путь | Назначение |
|---|------|------|------------|
| 1 | App | `app/` | Провайдеры (Query, Router, Toast), роутинг, ProtectedRoute, LoadingFallback |
| 2 | API | `api/` | HTTP-клиент (`apiFetch`), методы `auth.ts` и `products.ts` |
| 3 | Pages | `pages/` | MainPage, LoginPage, ProductPage — композиция фич |
| 4 | Features | `features/` | auth, ProductSearch, ProductTable — бизнес-логика, stores, UI фич |
| 5 | Components | `components/` | BaseTable, Input, Checkbox, Button, Modal, Toast и др. — Storybook |
| 6 | Shared | `shared/` | Типы (Product), хуки (useControlledState) |

### Зависимости слоёв

| Слой | Зависит от |
|------|------------|
| app | api, pages |
| pages | features, components |
| features | api, components, shared |
| components | shared |

---

## 3. Структура директорий

### app/

| Файл | Назначение |
|------|------------|
| `providers.tsx` | QueryClientProvider, BrowserRouter, ToastProvider |
| `router.tsx` | Routes, lazy-загрузка страниц |
| `ProtectedRoute.tsx` | Проверка токена, редирект на /login |
| `LoadingFallback.tsx` | Fallback для Suspense |

### api/

| Файл | Назначение |
|------|------------|
| `client.ts` | `apiFetch()` — базовый HTTP-клиент |
| `auth.ts` | `login()` — авторизация |
| `products.ts` | `fetchProducts()`, search, pagination |

### pages/

| Папка | Маршрут | Защита |
|-------|---------|--------|
| MainPage | `/` | нет |
| LoginPage | `/login` | нет |
| ProductPage | `/products` | да (ProtectedRoute) |

### features/

| Фича | model | ui |
|------|-------|-----|
| auth | authStore | AuthForm, Logout |
| ProductSearch | — | ProductSearch |
| ProductTable | selectedProductsStore | ProductTable, AddProductForm |

### components/

| Компонент | Тип | Описание |
|-----------|-----|----------|
| BaseTable | TanStack Table | Таблица с колонками, сортировкой |
| Input | compound | Root, Box, Slot, Field, Clear, PasswordToggle, Label, Error |
| Checkbox | compound | Root, Box, Label |
| Button | — | Кнопка |
| Modal | Radix Dialog | Модальное окно |
| Toast | Radix Toast | Уведомления |
| Pagination | — | Пагинация |
| ProgressBar | Radix Progress | Прогресс загрузки |
| Icon | SVG | Иконки через vite-plugin-svgr |

---

## 4. Поток данных

### 4.1 Инициализация приложения

| Шаг | Компонент | Действие |
|-----|-----------|----------|
| 1 | main.tsx | Рендер Providers |
| 2 | Providers | QueryClientProvider, BrowserRouter, ToastProvider |
| 3 | Providers | AppRouter |
| 4 | AppRouter | Suspense + lazy load страниц |

### 4.2 Авторизация

| Шаг | Участник | Действие |
|-----|----------|----------|
| 1 | User | Ввод username, password |
| 2 | AuthForm | Валидация (React Hook Form + Zod) |
| 3 | AuthForm | Вызов api/auth.login() |
| 4 | api/auth | POST /auth/login → DummyJSON |
| 5 | AuthForm | setAuth(token, user, rememberMe) |
| 6 | authStore | persist в localStorage или sessionStorage |

### 4.3 Загрузка товаров

| Шаг | Участник | Действие |
|-----|----------|----------|
| 1 | ProductPage | useProducts(params) |
| 2 | TanStack Query | useQuery с ключом [products, params] |
| 3 | api/products | fetchProducts() → GET /products |
| 4 | ProductPage | Получение { data, isLoading } |

### 4.4 Выбор товаров

| Элемент | Действие |
|---------|----------|
| Checkbox в строке | toggle → setSelectedIds |
| selectedProductsStore | selectedIds: string[] |
| Redux DevTools | Отладка (devtools middleware) |

---

## 5. Роутинг и защита маршрутов

### Маршруты

| Путь | Компонент | Защита | Описание |
|------|-----------|--------|----------|
| `/` | MainPage | нет | Главная, ссылки «Войти», «Таблица товаров» |
| `/login` | LoginPage | нет | Форма входа |
| `/products` | ProductPage | да | Таблица товаров (требует token) |

### Переходы

| Откуда | Куда | Условие |
|--------|------|---------|
| /products | /login | token отсутствует |
| /login | /products | успешный вход |
| MainPage | /login | клик «Войти» |
| MainPage | /products | клик «Таблица товаров» |

---

## 6. Состояние (State Management)

### Zustand stores

| Store | Поля | Методы | Middleware | Хранение |
|-------|------|--------|------------|----------|
| authStore | token, user, rememberMe | setAuth, clearAuth | persist, immer, devtools | localStorage / sessionStorage |
| selectedProductsStore | selectedIds | setSelectedIds | devtools | in-memory |

### TanStack Query

| Ключ | Данные | Инвалидация |
|------|--------|-------------|
| products | Список товаров | по params (q, page, sortBy, order) |
| auth | — | не используется для кэша |

---

## 7. Компонентная иерархия

### Уровень 1: Провайдеры

| Родитель | Дети |
|----------|------|
| Providers | QueryClientProvider, BrowserRouter, ToastProvider, AppRouter |

### Уровень 2: Роутинг

| Родитель | Дети |
|----------|------|
| AppRouter | MainPage, LoginPage, ProtectedRoute(ProductPage) |

### Уровень 3: Страницы

| Страница | Дочерние компоненты |
|----------|---------------------|
| MainPage | ссылки на Login, Products |
| LoginPage | AuthForm |
| ProductPage | ProductSearch, ProductTable |

### Уровень 4: ProductTable

| Родитель | Дети |
|----------|------|
| ProductTable | BaseTable, AddProductForm, Modal, Pagination, ProgressBar, Button, Icon |

### Уровень 5: BaseTable

| Родитель | Дети |
|----------|------|
| BaseTable | Checkbox, Button, Icon |

### Уровень 6: AuthForm

| Родитель | Дети |
|----------|------|
| AuthForm | Input, Checkbox, Button |

---

## 8. Feature-модули

| Фича | model | ui | Зависимости |
|------|-------|-----|-------------|
| auth | authStore | AuthForm, Logout | api/auth |
| ProductSearch | — | ProductSearch | api/products, use-debounce |
| ProductTable | selectedProductsStore | ProductTable, AddProductForm | api/products, BaseTable, Modal |

### Связи фич с API

| Фича | API-метод | Описание |
|------|-----------|----------|
| auth | POST /auth/login | Вход |
| ProductSearch | GET /products/search | Поиск с debounce |
| ProductTable | GET /products | Список, пагинация, сортировка |

---

## 9. Зависимости технологий

### По категориям

| Категория | Библиотеки |
|-----------|------------|
| Ядро | React, Vite, TypeScript |
| Роутинг | React Router |
| Данные | TanStack Query, TanStack Table, Zustand |
| Формы | React Hook Form, Zod |
| UI | Radix UI (Dialog, Progress, Toast, Slot), CSS Modules |

### Использование в проекте

| Библиотека | Где используется |
|------------|------------------|
| TanStack Query | useProducts, кэш продуктов |
| TanStack Table | BaseTable, колонки, сортировка |
| Zustand | authStore, selectedProductsStore |
| React Hook Form | AuthForm, AddProductForm |
| Zod | Схемы валидации форм |
| Radix UI | Modal, ProgressBar, Toast |
| use-debounce | ProductSearch (500 ms) |

---

## 10. URL-параметры (ProductPage)

Состояние таблицы в query params для шаринга и навигации «назад».

| Параметр | Тип | Описание |
|----------|-----|----------|
| `q` | string | Поисковый запрос |
| `page` | number | Номер страницы (пагинация) |
| `sortBy` | string | Поле сортировки (name, brand, sku, rating, price) |
| `order` | string | Направление: asc / desc |

### Поток параметров

| Этап | Компонент/хук | Действие |
|------|---------------|----------|
| 1 | useProductPageParams | Чтение searchParams из URL |
| 2 | useProductPageParams | Возврат { q, page, sortBy, order } |
| 3 | useProducts | Запрос с этими параметрами |
| 4 | ProductTable | Отображение данных |

---

## Ссылки

| Документ | Описание |
|----------|----------|
| [TECH_SPEC.MD](./TECH_SPEC.MD) | Техническое задание |
| [DEV_PLAN.MD](./DEV_PLAN.MD) | План разработки |
| [WORKFLOW.MD](./WORKFLOW.MD) | Рабочий процесс |
| [DESIGN.md](./DESIGN.md) | Версия с Mermaid-диаграммами |
