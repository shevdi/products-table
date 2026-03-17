## 1. LoginPage layout and styles

- [x] 1.1 Create `LoginPage.module.css` with БЭМ classes: card container (527×716px), white background, border-radius 40px, drop shadow, inner gradient border frame
- [x] 1.2 Add CSS variables for login page colors (card shadow, border, text, accent) in module or index.css
- [x] 1.3 Implement LoginPage layout: centered card, vertical flex (gap 32px), logo → header → form → link

## 2. Login form content

- [x] 2.1 Add logo (Icon name="logo") in circular container with gradient border
- [x] 2.2 Add header: title "Авторизация", subtitle "Пожалуйста, авторизируйтесь" with correct typography
- [x] 2.3 Add login field: Input.Root (size md) with Input.Label "Логин", Input.Slot (Icon user), Input.Field, Input.Clear
- [x] 2.4 Add password field: Input.Root (type password, size md) with Input.Label "Пароль", Input.Slot (Icon lock), Input.Field, Input.PasswordToggle
- [x] 2.5 Add Checkbox for "Запомнить данные"
- [x] 2.6 Add Button "Войти" (primary variant, full width)
- [x] 2.7 Add "или" separator with horizontal lines
- [x] 2.8 Add "Нет аккаунта? Создать" text with Link to /register (or # for now)

## 3. Storybook

- [x] 3.1 Create `LoginPage.stories.tsx` with Default story rendering LoginPage
