## 1. Dependencies

- [x] 1.1 Install react-router-dom and @tanstack/react-query
- [x] 1.2 Install zustand (for stores layer)

## 2. App layer

- [x] 2.1 Create src/app/ folder and move App.tsx from src/ to src/app/App.tsx
- [x] 2.2 Create app/providers.tsx with QueryClientProvider and BrowserRouter
- [x] 2.3 Create app/router.tsx with routes for /, /products, /login (placeholder components)
- [x] 2.4 Update main.tsx to render app through providers and router

## 3. API layer

- [x] 3.1 Create src/api/client.ts with base URL (VITE_API_URL or DummyJSON default) and fetch wrapper

## 4. Stores layer

- [x] 4.1 Create src/stores/ folder with authStore.ts and selectedProductsStore.ts stubs

## 5. Pages layer

- [x] 5.1 Create src/pages/LoginPage/LoginPage.tsx placeholder
- [x] 5.2 Create src/pages/ProductPage/ProductPage.tsx placeholder

## 6. Features layer

- [x] 6.1 Create src/features/AuthForm/ with AuthForm.tsx placeholder
- [x] 6.2 Create src/features/ProductSearch/ with ProductSearch.tsx placeholder
- [x] 6.3 Create src/features/ProductTable/ with ProductTable.tsx placeholder

## 7. Components layer

- [x] 7.1 Create src/components/ folders: Table, Input, Checkbox, Button, Modal, Toast, Pagination, ProgressBar (with minimal index or placeholder if needed)

## 8. Shared layer

- [x] 8.1 Create src/shared/utils/, src/shared/styles/, src/shared/types/ subfolders

## 9. Verification

- [x] 9.1 Wire router to use LoginPage and ProductPage placeholders for /login and /products
- [ ] 9.2 Run npm run build and npm run dev to verify app starts
