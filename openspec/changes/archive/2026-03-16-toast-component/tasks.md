## 1. Toast Component Structure

- [x] 1.1 Create ToastProvider component wrapping Radix Toast.Provider + Toast.Viewport
- [x] 1.2 Create toast context and useToast hook that exposes toast({ title?, description }) function
- [x] 1.3 Implement toast() to add entries to state and render Toast.Root + Toast.Title + Toast.Description + Toast.Close for each
- [x] 1.4 Add Toast.module.css with BEM: toast (block), toast__root, toast__title, toast__description, toast__close; use CSS variables for colors and spacing

## 2. Export and Integration

- [x] 2.1 Export ToastProvider, toast (or useToast) from src/components/Toast/index.ts

## 3. Storybook

- [x] 3.1 Add Toast.stories.tsx with Default story (ToastProvider + button to trigger toast)
- [x] 3.2 Add Success story demonstrating "Товар добавлен" (product added) notification
