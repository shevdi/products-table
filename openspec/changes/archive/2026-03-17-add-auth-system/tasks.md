## 1. Dependencies

- [x] 1.1 Add react-hook-form, zod, @hookform/resolvers, immer to package.json
- [x] 1.2 Run npm install

## 2. API Layer

- [x] 2.1 Create api/auth.ts with login(username, password) calling POST /auth/login
- [x] 2.2 Handle 400 response: return error for mutation to display (do not throw)
- [x] 2.3 Use credentials: 'include' for cookie support if DummyJSON sets cookies

## 3. Auth Store

- [x] 3.1 Refactor authStore: add token, user, rememberMe state
- [x] 3.2 Add persist middleware with storage selected by rememberMe (localStorage vs sessionStorage)
- [x] 3.3 Add immer middleware
- [x] 3.4 Add setAuth(token, user, rememberMe) and clearAuth() actions

## 4. AuthForm Feature

- [x] 4.1 Create Zod schema for login (username, password required)
- [x] 4.2 Set up useForm with zodResolver
- [x] 4.3 Implement useMutation for login, onSuccess → authStore.setAuth
- [x] 4.4 Render form with Input, Checkbox, Button; wire Controller/register to Input.Root
- [x] 4.5 Display validation errors via Input.Root error prop
- [x] 4.6 Display API errors under form (onError / mutation error state)
- [x] 4.7 Add AuthForm.module.css if needed (or reuse LoginPage styles)

## 5. LoginPage Refactor

- [x] 5.1 Move form markup from LoginPage into AuthForm
- [x] 5.2 LoginPage: keep layout (card, header, logo), compose AuthForm
- [x] 5.3 Remove useState from LoginPage; all form state in AuthForm

## 6. Protected Routes

- [x] 6.1 Create ProtectedRoute component: check authStore, redirect to /login if unauthenticated
- [x] 6.2 Wrap `/` and `/products` routes with ProtectedRoute
- [x] 6.3 Ensure `/login` remains accessible without auth

## 7. Integration

- [x] 7.1 On successful login, redirect to `/` or `/products` (navigate in mutation onSuccess)
- [x] 7.2 Update LoginPage Storybook story to use AuthForm
- [x] 7.3 Verify auth persist: rememberMe → localStorage, else sessionStorage
