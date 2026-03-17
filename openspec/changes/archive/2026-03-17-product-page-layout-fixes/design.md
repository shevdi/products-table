## Context

ProductPage displays a table of products via ProductTable (TanStack Table + BaseTable). The name column currently shows only title + category without thumbnail. Column widths use TanStack defaults (~150px), causing name truncation. Pagination component exists but is not integrated; ProductPage uses fixed `limit: 5, skip: 0` in useQuery.

## Goals / Non-Goals

**Goals:**
- Match Figma layout: name column 280px, thumbnail 48×48 in name cell
- Integrate Pagination on ProductPage with limit/skip from useQuery
- Preserve horizontal scroll on narrow screens (BaseTable overflow-x)

**Non-Goals:**
- Changing Pagination component API or styling
- Server-side pagination (API already supports limit/skip; keep client-side page state)

## Decisions

### 1. Column sizing via TanStack Table column def

Use `size` and `minSize` in the column definition for "Наименование". BaseTable already applies `header.getSize()` to `<th>`, so TanStack's column sizing will work without BaseTable changes.

**Alternative:** CSS `min-width` on cells — rejected; TanStack column API is the source of truth for table layout.

### 2. ProductNameCell structure: checkbox | photo | text

The selection checkbox is rendered by BaseTable's `createSelectionColumn`, so ProductNameCell only controls: photo | title + category. Order in the name column: [checkbox from select column] [photo] [title + category].

**Placeholder:** Gray `div` or `span` with fixed 48×48, background `var(--color-placeholder)` or similar. No external asset.

### 3. Pagination state in ProductPage

Add `page` state (1-based). Derive `skip = (page - 1) * limit`, pass to `fetchProducts`. Pagination props: `page`, `totalItems` (from `data.total`), `pageSize` (5), `onPageChange`. Reset page to 1 when search changes.

**Alternative:** URL query params for page — out of scope; DEV_PLAN does not require it.

### 4. Search + pagination interaction

When `search` changes, reset `page` to 1 so the user sees the first page of new results.

## Risks / Trade-offs

- **[Risk]** TanStack Table may need `columnResizeMode` or similar for fixed widths — **Mitigation:** Default behavior with `size`/`minSize` is usually sufficient; verify in implementation.
- **[Risk]** Pagination alignment (active "1" offset) — **Mitigation:** Minor CSS fix in Pagination if needed (DEV_PLAN 7.4).
