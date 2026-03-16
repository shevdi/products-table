## 1. Icon

- [x] 1.1 Add EyeIcon.svg to src/components/Icon/Icons/ (open eye, no slash)
- [x] 1.2 Add `eye` to ICON_NAMES in Icon.types.ts
- [x] 1.3 Register EyeIcon in Icons/index.ts

## 2. Input Context and Styles

- [x] 2.1 Create InputContext.tsx with InputContextProvider, useInputContext, value/onChange/error/disabled/size/fieldType
- [x] 2.2 Create Input.module.css with BEM (input, input--sm, input--md, input--error, input__leading, input__field, input__trailing, input__clear, input__password-toggle, input__label, input__error, input-root)

## 3. Input Compound Components

- [x] 3.1 Create Root.tsx (context provider, value/onChange/error/disabled/size props, input-root wrapper)
- [x] 3.2 Create Box.tsx (bordered container for Leading, Field, Trailing; applies size and error modifiers)
- [x] 3.3 Create Leading.tsx (input__leading slot)
- [x] 3.4 Create Field.tsx (native input, forwardRef, syncs with context value/onChange)
- [x] 3.5 Create Trailing.tsx (input__trailing slot)
- [x] 3.6 Create Clear.tsx (visible when value.length > 0, onClick clears)
- [x] 3.7 Create PasswordToggle.tsx (toggles fieldType password/text, shows eye/eye-off)
- [x] 3.8 Create Label.tsx (input__label, htmlFor from context id)
- [x] 3.9 Create Error.tsx (input__error, renders context error)

## 4. Public API and Stories

- [x] 4.1 Update index.ts to export Input as compound (Root, Box, Leading, Field, Trailing, Clear, PasswordToggle, Label, Error)
- [x] 4.2 Create Input.stories.tsx with stories: Default, Search, UsernameWithClear, Password, WithLabel, WithError, Disabled, Sizes
