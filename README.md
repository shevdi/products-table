# Products Table

Веб-приложение для работы со списком товаров: авторизация, просмотр, поиск, сортировка и добавление новых позиций. Сделано с использованием OpenSpec в Cursor. Модель Composer 1.5. О рабочем процессе в [WORKFLOW.MD](./docs/WORKFLOW.MD)

## Возможности

- **Авторизация** — вход по username с опцией «Запомнить меня» (сессия в localStorage или sessionStorage)
- **Список товаров** — загрузка из [DummyJSON Products API](https://dummyjson.com/docs/products)
- **Поиск** — с debounce 500ms и пагинацией (по 5 товаров на страницу)
- **Сортировка** — по столбцам, состояние сохраняется в URL
- **Выбор товаров** — чекбоксы для добавления/удаления из store
- **Добавление товара** — форма с полями: наименование, цена, вендор, артикул
- **Подсветка** — рейтинг ниже 3 отображается красным цветом

## Технологии

- **Vite** + **React** + **TypeScript**
- **React Router** — маршрутизация
- **Tanstack Query** — запросы к API
- **Tanstack Table** — таблица
- **Zustand** + **Immer** — состояние (auth, выбранные товары)
- **React Hook Form** + **Zod** — формы и валидация
- **Radix UI** — примитивы (Dialog, Progress, Toast)
- **Storybook** — разработка компонентов
- **CSS Modules** + **БЭМ** — стили

## Запуск

```bash
# Установка зависимостей
npm install

# Режим разработки
npm run dev

# Сборка
npm run build

# Предпросмотр сборки
npm run preview

# Storybook
npm run storybook
```

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Сборка проекта |
| `npm run preview` | Предпросмотр production-сборки |
| `npm run storybook` | Запуск Storybook (порт 6006) |
| `npm run build-storybook` | Сборка Storybook |
| `npm run lint` | Проверка ESLint |
| `npm run lint:fix` | Исправление ESLint |
| `npm run format` | Форматирование Prettier |
| `npm run format:check` | Проверка Prettier |

## Структура проекта

```
src/
├── app/          # Инициализация, провайдеры, роутинг
├── api/          # HTTP-клиент, методы запросов (auth, products)
├── stores/       # Zustand stores (auth, selectedProducts)
├── pages/        # Страницы (LoginPage, ProductPage)
├── features/     # Фичи (AuthForm, ProductSearch, ProductTable)
├── components/   # UI-компоненты (Button, Input, Table, Modal, Toast и др.)
└── shared/       # Типы, стили, утилиты
```

## API

- **Продукты:** [DummyJSON Products](https://dummyjson.com/docs/products)
- **Авторизация:** [DummyJSON Auth](https://dummyjson.com/docs/auth)

## Документация

- [TECH_SPEC.MD](./docs/TECH_SPEC.MD) — техническое задание
- [DEV_PLAN.MD](./docs/DEV_PLAN.MD) — план разработки
- [WORKFLOW.MD](./docs/WORKFLOW.MD) — AI spec driven development
