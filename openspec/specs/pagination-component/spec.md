# pagination-component Specification

## Purpose

Controlled Pagination component for ProductTable and other paginated lists. Displays range text, prev/next arrows (text), and page numbers with ellipsis.

## Requirements

### Requirement: Pagination component exists with controlled API

The project SHALL have a Pagination component in `src/components/Pagination/` that accepts `page`, `onPageChange`, `totalItems`, and `pageSize` props. The component SHALL be fully controlled — parent manages page state.

#### Scenario: Pagination receives required props
- **WHEN** Pagination receives `page={1}`, `totalItems={120}`, `pageSize={20}`, `onPageChange={fn}`
- **THEN** the component renders and displays correct range and page numbers

#### Scenario: Pagination calls onPageChange when page is clicked
- **WHEN** user clicks page number 3
- **THEN** `onPageChange(3)` is called

#### Scenario: Pagination calls onPageChange for prev/next
- **WHEN** user clicks next arrow and current page is 2
- **THEN** `onPageChange(3)` is called

#### Scenario: Prev arrow is disabled on first page
- **WHEN** `page` is 1
- **THEN** prev arrow button is disabled

#### Scenario: Next arrow is disabled on last page
- **WHEN** `page` equals total pages (e.g. 6 for 120 items, pageSize 20)
- **THEN** next arrow button is disabled

### Requirement: Pagination displays range text

The Pagination component SHALL display "Показано X–Y из Z" where X is first item index, Y is last item index, Z is totalItems. No localization support.

#### Scenario: Range on first page
- **WHEN** `page={1}`, `pageSize={20}`, `totalItems={120}`
- **THEN** text displays "Показано 1–20 из 120"

#### Scenario: Range on last partial page
- **WHEN** `page={6}`, `pageSize={20}`, `totalItems={120}`
- **THEN** text displays "Показано 101–120 из 120"

#### Scenario: Empty or zero total
- **WHEN** `totalItems={0}`
- **THEN** text displays "Показано 0–0 из 0" or equivalent

### Requirement: Pagination uses text for arrows

The Pagination component SHALL use text characters `<` and `>` for prev/next navigation, not ChevronLeft/ChevronRight icons.

#### Scenario: Arrows are text
- **WHEN** Pagination is rendered
- **THEN** prev control shows `<` and next control shows `>` as text content

### Requirement: Pagination shows page numbers with ellipsis

The Pagination component SHALL display page number buttons. When total pages exceed a visible limit (e.g. 5), it SHALL show ellipsis to collapse the range.

#### Scenario: Few pages — all visible
- **WHEN** total pages ≤ 5 (e.g. totalItems=100, pageSize=20)
- **THEN** all page numbers 1, 2, 3, 4, 5 are visible

#### Scenario: Many pages — ellipsis shown
- **WHEN** total pages > 5
- **THEN** visible pages include first, last, current, and neighbors; ellipsis indicates gaps

### Requirement: Pagination uses CSS modules and BEM

The project SHALL style the Pagination component using CSS modules with BEM naming.

#### Scenario: Styles use BEM
- **WHEN** developer inspects Pagination.module.css
- **THEN** class names follow BEM convention (e.g., pagination, pagination__range, pagination__page, pagination__page--active) and use CSS variables where appropriate

#### Scenario: Active page uses specified color
- **WHEN** a page number is the current page
- **THEN** it has background color `#797FEA` (via CSS variable or direct value)

### Requirement: Pagination has stories

The Pagination component SHALL have Storybook stories.

#### Scenario: Stories exist
- **WHEN** developer opens Storybook
- **THEN** Pagination stories exist at `src/components/Pagination/` and demonstrate first page, middle page, last page, many pages with ellipsis, and disabled states
