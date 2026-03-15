### Requirement: Development plan document exists

The project SHALL have a development plan document at `docs/DEV_PLAN.MD`.

#### Scenario: Plan is present
- **WHEN** developer opens the project
- **THEN** `docs/DEV_PLAN.MD` exists and contains a checklist of development tasks

### Requirement: Plan uses checklist format

The development plan SHALL use markdown checkbox format (`- [ ]`) for each task.

#### Scenario: Task is trackable
- **WHEN** developer completes a task
- **THEN** they can mark the checkbox as done (`- [x]`)

### Requirement: Plan covers TECH_SPEC phases

The development plan SHALL include phases: preparation, base components, auth, product list, search, add product, polish.

#### Scenario: All phases represented
- **WHEN** developer reads DEV_PLAN.MD
- **THEN** all major phases from TECH_SPEC are present as sections
