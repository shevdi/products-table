## ADDED Requirements

### Requirement: Vite project scaffold exists

The project SHALL be initialized using the official Vite React-TypeScript template.

#### Scenario: Project files present

- **WHEN** developer inspects the project root
- **THEN** `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, and `index.html` exist

#### Scenario: Source entry exists

- **WHEN** developer inspects `src/`
- **THEN** `main.tsx` and `App.tsx` exist and `main.tsx` renders `App`

### Requirement: Development server runs

The project SHALL provide a development server that serves the application.

#### Scenario: Dev server starts

- **WHEN** developer runs `npm run dev`
- **THEN** the server starts without errors and serves the app at a local URL (e.g., http://localhost:5173)

#### Scenario: App renders in browser

- **WHEN** developer opens the dev server URL in a browser
- **THEN** a minimal React page is visible (e.g., default Vite + React content or a simple placeholder)

### Requirement: Production build succeeds

The project SHALL produce a production build.

#### Scenario: Build completes

- **WHEN** developer runs `npm run build`
- **THEN** the build completes without errors and outputs files to `dist/`

### Requirement: TypeScript path alias configured

The project SHALL support the `@/` path alias mapping to `src/`.

#### Scenario: Alias resolves in imports

- **WHEN** a file imports using `@/` (e.g., `import X from '@/components/X'`)
- **THEN** the import resolves correctly during build and type-check

### Requirement: TypeScript strict mode enabled

The project SHALL use TypeScript strict mode.

#### Scenario: Strict mode active

- **WHEN** developer inspects `tsconfig.json`
- **THEN** `"strict": true` (or equivalent strict options) is set
