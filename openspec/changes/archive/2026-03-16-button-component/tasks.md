## 1. Setup

- [x] 1.1 Add @radix-ui/react-slot to dependencies (for asChild support)
- [x] 1.2 Create `src/components/Button/Button.types.ts` with ButtonVariant, ButtonSize, ButtonProps

## 2. Button Component

- [x] 2.1 Create `src/components/Button/Button.module.css` with BEM classes (button, button--primary, button--secondary, button--sm, button--md, button--lg)
- [x] 2.2 Create `src/components/Button/Button.tsx` — native button with variant, size, iconLeft, iconRight, disabled
- [x] 2.3 Integrate Icon component for iconLeft/iconRight (use IconName from Icon.types)
- [x] 2.4 Add asChild support via @radix-ui/react-slot when asChild is true
- [x] 2.5 Update `src/components/Button/index.ts` — export Button and ButtonProps

## 3. Stories

- [x] 3.1 Create `src/components/Button/Button.stories.tsx` — variants (primary, secondary), sizes (sm, md, lg), with icons, disabled state
