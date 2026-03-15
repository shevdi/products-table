## 1. Scaffold

- [x] 1.1 Run `npm create vite@latest . -- --template react-ts` (or equivalent) to scaffold Vite + React + TS in the project root
- [x] 1.2 Install dependencies with `npm install`
- [x] 1.3 Verify `package.json` has scripts: `dev`, `build`, `preview`

## 2. Configuration

- [x] 2.1 Enable TypeScript strict mode in `tsconfig.json`
- [x] 2.2 Add `@/` path alias in `tsconfig.json` (baseUrl, paths)
- [x] 2.3 Add `@/` resolve alias in `vite.config.ts`

## 3. Source

- [x] 3.1 Ensure `src/main.tsx` mounts the React app
- [x] 3.2 Ensure `src/App.tsx` renders a minimal placeholder (default Vite content or simple "Hello" is fine)

## 4. Verification

- [x] 4.1 Run `npm run dev` and confirm the app serves without errors
- [x] 4.2 Run `npm run build` and confirm `dist/` is produced
- [x] 4.3 Add a test import using `@/` and verify build and type-check succeed
