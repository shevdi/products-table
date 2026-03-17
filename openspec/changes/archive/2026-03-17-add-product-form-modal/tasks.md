## 1. ToastProvider

- [x] 1.1 Add ToastProvider to app/providers.tsx (wrap App or router content)

## 2. AddProductForm

- [x] 2.1 Create AddProductForm component in features/ProductTable/ui/
- [x] 2.2 Add Zod schema: title (string, min 1), price (coerce number, positive), brand (string, min 1), sku (string, min 1)
- [x] 2.3 Wire useForm + zodResolver + Controller for all 4 fields
- [x] 2.4 Use Input component (same pattern as AuthForm) for each field
- [x] 2.5 Add submit handler: toast({ title: 'Товар добавлен' }), call onSuccess callback (close + reset)
- [x] 2.6 Add AddProductForm.stories.tsx for Storybook

## 3. Modal integration

- [x] 3.1 Add useState for addModalOpen in ProductPage
- [x] 3.2 Wire "Добавить" button onClick to open modal
- [x] 3.3 Render Modal with AddProductForm, pass onSuccess to close modal and reset form
- [x] 3.4 Add Modal title "Добавить товар" (or similar)
