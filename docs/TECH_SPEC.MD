# Техническое задание

## Цель

Реализовать приложение, которое загружает список товаров и позволяет пользователю удобно взаимодействовать с данными: сортировать и добавлять новые позиции.

---

## API

В качестве источника данных использовать публичное API:

- **Продукты:** [DummyJSON Products](https://dummyjson.com/docs/products)
- **Авторизация:** [DummyJSON Auth](https://dummyjson.com/docs/auth)

### Маппинг полей (макет ↔ API)

| Макет (UI)   | API (DummyJSON) |
| ------------ | --------------- |
| Наименование | title           |
| Категория    | category        |
| Вендор       | brand           |
| Артикул      | sku             |
| Оценка       | rating          |
| Цена         | price           |
| Изображение  | thumbnail       |

---

## Функциональные требования

### Форма входа

- Валидация полей (обязательность заполнения)
- Обработка ошибок: при ошибке API выводить уведомление или текст ошибки под полями

### Логика запоминания данных для входа

- Авторизация по username
- Если чекбокс установлен — сохранять токен в localStorage (сессия живёт после закрытия браузера)
- Если не установлен — сессия в sessionStorage, сбрасывается при закрытии вкладки
- Если пользователь не авторизован, редиректить его на страницу логина
- Защищённые роуты: `/` и `/products` требуют авторизации; `/login` доступна без авторизации

### Главная страница (`/`)

- Landing-страница с навигацией: ссылки «Войти» и «Таблица товаров»

### Вывод списка товаров

- Соответствие столбцам: Наименование (с thumbnail), Вендор, Артикул, Оценка, Цена, действия
- Прогресс-бар при подгрузке
- Подгрузка данных из API

### Сортировка

- Сортировка по столбцам (name, brand, sku, rating, price)
- Состояние сортировки сохраняется в URL (query params: `sortBy`, `order`)

### Выбор товара

- Чекбоксы в строках таблицы добавляют (убирают) товар в store выбранных

### Добавление товара

- По нажатию кнопки «Добавить» открывается модал с формой
- Поля: Наименование, цена, вендор, артикул
- При успешной отправке — Toast-уведомление «Товар добавлен», закрытие модала
- Локальное добавление товара в таблицу (без API) в текущей реализации не реализовано

### Логика интерфейса

- Если рейтинг товара ниже 3, значение подсвечивать красным цветом

### Поиск товаров

- Поиск через API (DummyJSON search)
- Пагинация: 5 товаров на страницу
- Debounce 500ms (библиотека `use-debounce`)
- При пустом запросе показывать весь список
- Параметры поиска и страницы в URL (query params: `q`, `page`)

### Дополнительные элементы

- Кнопка Refresh — обновление данных (invalidate cache)
- Кнопка «Добавить» — открывает модал добавления
- Кнопка «...» (меню) — сверстана, без логики

### Не требуется реализация

- Ссылка «Создать» — только сверстать

## Технические требования

- Component-Driven Development. Максимально готовое решение собрать в Storybook, затем проект.
- Feature-Driven Architecture.
- CSS modules. БЭМ. CSS variables. Кастомные стили.
- Radix UI primitives: Dialog, Progress, Toast, Slot.
- Иконки в одном компоненте `Icon` (SVG через vite-plugin-svgr).
- Stories хранить рядом с компонентами.
- Compound components (Input, Checkbox).
- экспортировать компоненты через корневой index.ts
- Tanstack Table для таблицы (компонент BaseTable).
- Tanstack Query для запросов.
- Zustand: auth store — immer + persist; selectedProducts — devtools.

## Используемые технологии

- Vite
- React
- React Router
- TypeScript
- Storybook
- Tanstack Query
- Tanstack Table
- Zustand
- React Hook Form
- Zod
- clsx
- use-debounce
- vite-plugin-svgr
- ESLint
- Prettier

## Структура

```
src/
├── app/
│   ├── providers.tsx
│   ├── router.tsx
│   ├── ProtectedRoute.tsx
│   └── LoadingFallback.tsx
├── api/
│   ├── client.ts
│   ├── auth.ts
│   └── products.ts
├── pages/
│   ├── MainPage/
│   │   ├── MainPage.tsx
│   │   └── MainPage.module.css
│   ├── LoginPage/
│   │   ├── LoginPage.tsx
│   │   ├── LoginPage.module.css
│   │   └── LoginPage.stories.tsx
│   └── ProductPage/
│       ├── ProductPage.tsx
│       └── ProductPage.module.css
├── features/
│   ├── auth/
│   │   ├── model/
│   │   │   └── authStore.ts
│   │   ├── ui/
│   │   │   ├── AuthForm.tsx
│   │   │   ├── AuthForm.module.css
│   │   │   ├── Logout.tsx
│   │   │   └── Logout.module.css
│   │   └── index.ts
│   ├── ProductSearch/
│   │   ├── ui/
│   │   │   └── ProductSearch.tsx
│   │   └── index.ts
│   └── ProductTable/
│       ├── model/
│       │   └── selectedProductsStore.ts
│       ├── ui/
│       │   ├── ProductTable.tsx
│       │   ├── ProductTable.module.css
│       │   ├── AddProductForm.tsx
│       │   ├── AddProductForm.module.css
│       │   └── *.stories.tsx
│       └── index.ts
├── components/
│   ├── BaseTable/
│   ├── Input/          (compound: Root, Box, Slot, Field, Clear, PasswordToggle, Label, Error)
│   ├── Checkbox/       (compound: Root, Box, Label)
│   ├── Button/
│   ├── Modal/
│   ├── Toast/
│   ├── Pagination/
│   ├── ProgressBar/
│   └── Icon/
└── shared/
    └── types/
        └── product.ts
```

**Назначение слоёв:**

- `app/` — инициализация, провайдеры (Query, Router), роутинг, ProtectedRoute, LoadingFallback
- `api/` — HTTP-клиент и методы запросов к API
- `pages/` — страницы-контейнеры (MainPage, LoginPage, ProductPage)
- `features/` — фичи с логикой и моделями: auth (AuthForm, Logout, authStore), ProductSearch, ProductTable (ProductTable, AddProductForm, selectedProductsStore)
- `components/` — переиспользуемые UI-компоненты (Storybook)
- `shared/` — общие типы
