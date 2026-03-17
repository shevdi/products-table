# Техническое задание

## Цель

Реализовать приложение, которое загружает список товаров и позволяет пользователю удобно взаимодействовать с данными: сортировать и добавлять новые позиции.

---

## Макет

https://www.figma.com/design/NO3iFfoTbjHhDCt9whuQLo/Aiti-Guru-%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5

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

### Логика запоминания данных для входа:

- Авторизация по username
- Если чекбокс установлен — сохранять токен авторизации так, чтобы сессия жила после закрытия браузера
- Если не установлен — сессия сбрасывается при закрытии вкладки
- Если пользователь не авторизован, редиректить его на страницу логина
- Защищённые роуты: `/` и `/products` требуют авторизации; `/login` доступна без авторизации

### Вывод списка товаров

- Соответствие столбцам из макета Figma
- Прогресс-бар при подгрузке
- Подгрузка данных из API

### Сортировка

- Возможность сортировки по столбцам (например, по цене или рейтингу)
- Состояние сортировки должно сохраняться в URL (query params)

### Выбор товара

- При нажатии чекбокса просто добавлять (убирать) товар в store.

### Добавление товара

- По нажатию кнопки «Добавить» открывается форма с полями: Наименование, цена, вендор, артикул
- При успешном добавлении показывать базовое Toast-уведомление
- Логику сохранения через API реализовывать не нужно. Только локальный state — новый товар в таблице, без вызова API.
- Структура нового товара при локальном добавлении: `id` — временный (например, `temp-${Date.now()}`), `rating` — 0, `category` — пустая строка, `thumbnail` — placeholder

### Логика интерфейса

- Если рейтинг товара ниже 3, значение подсвечивать красным цветом

### Поиск товаров

- Использовать API
- Использовать пагинацию. 5 товаров на страницу
- Поиск по вводу с debounce 500ms
- При пустом запросе показывать весь список

### Не требуется реализация

- Элементы, которые не указаны в ТЗ — только сверстать: ссылка «Создать», кнопка «+», «...», кнопка Refresh

## Технические требования

- Component-Driven Development. Максимально готовое решение собрать в Storybook, затем проект.
- Feature-Driven Architecture.
- CSS modules. БЭМ. Без лишних библиотек. Предпочтительнее CSS variables. Использовать кастомные стили.
- Использовать radix-ui primitives.
- Иконки в одном компоненте
- stories хранить рядом с компонентами
- Compound components
- Tanstack Table для таблицы.
- Tanstack Query для запросов.
- zustand. Испоьзовать immer middleware. slices for auth and table page

## Используемые технологии

- Vite
- React
- React Router
- TS
- Storybook
- Tanstack Query
- Tanstack Table
- Zustand
- React Hook Form
- Zod
- clsx
- eslint
- prettier

## Структура

```
src/
 ├── app/
 │    ├── App.tsx
 │    ├── providers.tsx
 │    └── router.tsx
 ├── api/
 │    ├── client.ts
 │    ├── auth.ts
 │    └── products.ts
 ├── stores/
 │    ├── authStore.ts
 │    └── selectedProductsStore.ts
 ├── pages/
 │    ├── LoginPage/
 │    │    └── LoginPage.tsx
 │    └── ProductPage/
 │         └── ProductPage.tsx
 ├── features/
 │    ├── AuthForm/
 │    │    ├── AuthForm.tsx
 │    │    └── AuthForm.module.css
 │    ├── ProductSearch/
 │    │    ├── ProductSearch.tsx
 │    │    └── ProductSearch.module.css
 │    └── ProductTable/
 │         ├── ProductTable.tsx
 │         ├── AddProductForm.tsx
 │         └── ProductTable.module.css
 ├── components/
 │    ├── Table/
 │    ├── Input/
 │    ├── Checkbox/
 │    ├── Button/
 │    ├── Modal/
 │    ├── Toast/
 │    ├── Pagination/
 │    └── ProgressBar/
 └── shared/
      ├── utils/
      ├── styles/
      └── types/
```

**Назначение слоёв:**

- `app/` — инициализация приложения, провайдеры (Query, Router), роутинг
- `api/` — HTTP-клиент и методы запросов к API
- `stores/` — Zustand stores (сессия, выбранные товары)
- `pages/` — страницы-контейнеры, композиция фич
- `features/` — фичи с логикой (AuthForm, ProductSearch, ProductTable + AddProductForm)
- `components/` — переиспользуемые UI-компоненты (Storybook)
- `shared/` — общие типы, стили, утилиты
