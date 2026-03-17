### Requirement: Add Product Form displays in modal

The system SHALL show a modal with AddProductForm when the user clicks the "Добавить" button on ProductPage.

#### Scenario: Modal opens on Add click
- **WHEN** user clicks the "Добавить" button
- **THEN** a modal opens containing the AddProductForm

#### Scenario: Modal can be closed
- **WHEN** user closes the modal (overlay click or escape)
- **THEN** the modal closes and form is dismissed

### Requirement: AddProductForm has required fields with validation

The form SHALL have four fields: Наименование (title), цена (price), вендор (brand), артикул (sku). Validation SHALL use React Hook Form with Zod schema.

#### Scenario: All fields required
- **WHEN** user submits with any field empty
- **THEN** validation errors are shown for empty required fields

#### Scenario: Price must be positive number
- **WHEN** user enters a non-positive value or non-numeric value in price
- **THEN** validation error is shown (e.g. "Цена должна быть положительным числом")

#### Scenario: Valid submission
- **WHEN** user fills all fields correctly (price > 0) and submits
- **THEN** form passes validation and onSubmit handler runs

### Requirement: Successful submit shows Toast and resets form

On successful form submission, the system SHALL show a Toast with text "Товар добавлен", close the modal, and reset the form.

#### Scenario: Toast on submit
- **WHEN** user successfully submits the form
- **THEN** a Toast appears with title/description "Товар добавлен"

#### Scenario: Modal closes and form resets on submit
- **WHEN** user successfully submits the form
- **THEN** the modal closes and form fields are cleared for next use
