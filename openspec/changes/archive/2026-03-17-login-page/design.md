## Context

Страница LoginPage — заглушка. Роутер уже настроен на `/login`. В проекте есть Input, Checkbox, Button, Icon. Дизайн предоставлен в Figma: белая карточка с тенью, логотип, заголовок «Авторизация», форма с полями логин/пароль, чекбокс «Запомнить данные», кнопка «Войти», разделитель «или», ссылка «Нет аккаунта? Создать».

## Goals / Non-Goals

**Goals:**

- Сверстать LoginPage по макету Figma
- Использовать существующие компоненты (Input, Checkbox, Button, Icon)
- CSS modules, БЭМ, CSS variables
- Storybook story для LoginPage

**Non-Goals:**

- Реальная авторизация (API, валидация, редирект)
- Регистрация (страница «Создать»)

## Decisions

### 1. Структура страницы

- Центрированная карточка (content) 527×716px, белый фон, border-radius 40px, тень
- Внутренний контейнер с градиентной обводкой и фоном (cornerRadius 34px)
- Вертикальный layout: логотип → текст → форма → ссылка «Создать»

**Альтернатива:** Один контейнер без вложенности — отклонено, т.к. макет явно разделяет внешнюю тень и внутреннюю градиентную обводку.

### 2. Компоненты

- **Input.Root** + Input.Box + Input.Slot (user/lock) + Input.Field + Input.Clear / Input.PasswordToggle
- **Checkbox.Root** + Checkbox.Box + Checkbox.Label для «Запомнить данные»
- **Button** variant primary для «Войти»
- **Icon** name: user, lock, eye, eye-off, close, logo

### 3. Стили

- Отдельный `LoginPage.module.css` с БЭМ-классами
- CSS variables для цветов макета: `--login-card-shadow`, `--login-border`, `--login-text`, `--login-text-muted`, `--login-accent`
- Размеры из Figma: input height 55px, border-radius 12px, gap 32px между блоками

### 4. Логотип

- Использовать `Icon name="logo"` — уже есть в iconComponents

### 5. Адаптивность

- **Fluid**: карточка `width: 100%; max-width: 527px` — без горизонтального скролла
- **Один брейкпоинт** 600px: при `max-width: 600px` убирается внутренняя рамка (cardInner), уменьшается padding, фон градиента заменён на transparent

## Risks / Trade-offs

- **[Risk]** Градиентная обводка сложна в CSS → Mitigation: использовать `border-image` или псевдоэлемент с градиентом
