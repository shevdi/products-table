# auth-flow Specification

## Purpose

Login via DummyJSON API, session state in Zustand with persist, protected routes, and remember-me (localStorage vs sessionStorage).

## Requirements

### Requirement: Login API integration

The system SHALL call DummyJSON POST /auth/login with username and password and store the returned accessToken and user in authStore on success.

#### Scenario: Successful login
- **WHEN** user submits valid credentials via AuthForm
- **THEN** system calls POST /auth/login with username and password
- **AND** on 200 response, stores accessToken and user in authStore
- **AND** persists state according to rememberMe (localStorage or sessionStorage)

#### Scenario: Failed login
- **WHEN** user submits invalid credentials
- **THEN** system receives 400 from API
- **AND** displays error message under form inputs (not Toast)
- **AND** does not update authStore

### Requirement: Session state in Zustand

The system SHALL maintain auth state (token, user, rememberMe) in a Zustand store with persist and immer middleware.

#### Scenario: Persist middleware
- **WHEN** user logs in with rememberMe checked
- **THEN** auth state is persisted to localStorage
- **AND** session survives browser close and reopen

#### Scenario: Session-only storage
- **WHEN** user logs in with rememberMe unchecked
- **THEN** auth state is persisted to sessionStorage
- **AND** session is cleared when tab/browser is closed

#### Scenario: Immer middleware
- **WHEN** developer inspects authStore implementation
- **THEN** store uses immer middleware for state updates

### Requirement: Protected routes

The system SHALL require authentication for `/` and `/products` and allow unauthenticated access to `/login`.

#### Scenario: Protected route redirect
- **WHEN** unauthenticated user navigates to `/` or `/products`
- **THEN** system redirects to `/login`

#### Scenario: Login route accessible
- **WHEN** unauthenticated user navigates to `/login`
- **THEN** LoginPage renders without redirect

#### Scenario: Authenticated access
- **WHEN** authenticated user navigates to `/` or `/products`
- **THEN** requested page renders without redirect

### Requirement: Login uses Tanstack Query mutation

The system SHALL use useMutation for the login API call.

#### Scenario: Mutation usage
- **WHEN** developer inspects AuthForm implementation
- **THEN** useMutation is used to call the login API
- **AND** onSuccess updates authStore
- **AND** onError handles API errors for display under inputs
