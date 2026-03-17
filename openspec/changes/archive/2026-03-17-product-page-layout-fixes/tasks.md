## 1. Column widths

- [x] 1.1 In ProductTable.tsx, add `size: 280` and `minSize: 200` to the "Наименование" column definition
- [x] 1.2 Set `minSize` on other columns if needed (default 150px acceptable per DEV_PLAN)

## 2. ProductNameCell with thumbnail

- [x] 2.1 Add 48×48 image block in ProductNameCell: render `<img src={thumbnail}>` when `thumbnail` exists
- [x] 2.2 Add gray placeholder (48×48) when `thumbnail` is absent or empty
- [x] 2.3 Update ProductNameCell layout: photo | title + category (checkbox is in separate column)
- [x] 2.4 Add/update ProductTable.module.css for thumbnail and placeholder styles (BEM)

## 3. Pagination on ProductPage

- [x] 3.1 Add `page` state (1-based) to ProductPage
- [x] 3.2 Pass `skip: (page - 1) * 5` and `limit: 5` to fetchProducts in useQuery
- [x] 3.3 Add Pagination component below ProductTable with `page`, `totalItems` (data.total), `pageSize: 5`, `onPageChange`
- [x] 3.4 Reset `page` to 1 when `search` changes

## 4. Minor fixes

- [x] 4.1 Check pagination button alignment (active "1" offset) and fix if needed
- [x] 4.2 Verify spacing and alignment against Figma
