import { useMemo, useCallback } from 'react';
import type { ColumnDef, SortingState, OnChangeFn } from '@tanstack/react-table';
import { BaseTable } from '@/components/BaseTable';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { useSelectedProductsStore } from '@/stores/selectedProductsStore';
import type { Product } from '@/shared/types/product';
import styles from './ProductTable.module.css';

export interface ProductTableProps {
  products: Product[];
  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
}

function ProductNameCell({ row }: { row: { original: Product } }) {
  const p = row.original;
  return (
    <div className={styles.productTable__nameCell}>
      <div className={styles.productTable__nameCellTitle}>{p.title}</div>
      <div className={styles.productTable__nameCellCategory}>{p.category}</div>
    </div>
  );
}

function RatingCell({ row }: { row: { original: Product } }) {
  const rating = row.original.rating;
  const isLow = rating < 3;
  return (
    <span className={isLow ? styles.productTable__ratingLow : undefined}>
      {rating.toFixed(1)}/5
    </span>
  );
}

function ActionsCell({ row }: { row: { original: Product } }) {
  void row; // reserved for add/menu handlers
  return (
    <div className={styles.productTable__actions}>
      <button
        type="button"
        className={styles.productTable__iconBtn}
        aria-label="Добавить"
      >
        <Icon name="plus-click" width={39} height={20} inheritColor={false} />
      </button>
      <Button
        variant="secondary"
        size="sm"
        className={styles.productTable__actionBtn}
        aria-label="Меню"
      >
        <Icon name="dots" size={20} />
      </Button>
    </div>
  );
}

export function ProductTable({ products, sorting = [], onSortingChange }: ProductTableProps) {
  const { selectedIds, setSelectedIds } = useSelectedProductsStore();

  const rowSelection = useMemo(() => {
    const sel: Record<string, boolean> = {};
    for (const id of selectedIds) {
      sel[String(id)] = true;
    }
    return sel;
  }, [selectedIds]);

  const handleRowSelectionChange = useCallback<OnChangeFn<Record<string, boolean>>>(
    (updaterOrValue) => {
      const next =
        typeof updaterOrValue === 'function' ? updaterOrValue(rowSelection) : updaterOrValue;
      setSelectedIds(Object.keys(next).filter((id) => next[id]));
    },
    [rowSelection, setSelectedIds]
  );

  const columns = useMemo<ColumnDef<Product, unknown>[]>(
    () => [
      {
        accessorKey: 'title',
        id: 'name',
        header: 'Наименование',
        cell: ({ row }) => <ProductNameCell row={row} />,
        enableSorting: true,
        meta: { truncate: false },
      },
      {
        accessorKey: 'brand',
        header: 'Вендор',
        enableSorting: true,
      },
      {
        accessorKey: 'sku',
        header: 'Артикул',
        enableSorting: true,
      },
      {
        accessorKey: 'rating',
        header: 'Оценка',
        cell: ({ row }) => <RatingCell row={row} />,
        enableSorting: true,
        meta: { truncate: false },
      },
      {
        accessorKey: 'price',
        header: 'Цена, Р',
        enableSorting: true,
        cell: ({ getValue }) =>
          (getValue() as number).toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
      },
      {
        id: 'actions',
        header: '',
        cell: ({ row }) => <ActionsCell row={row} />,
        enableSorting: false,
        meta: { truncate: false },
      },
    ],
    []
  );

  return (
    <BaseTable<Product>
      data={products}
      columns={columns}
      sorting={sorting}
      onSortingChange={onSortingChange}
      rowSelection={rowSelection}
      onRowSelectionChange={handleRowSelectionChange}
      enableRowSelection
      getRowId={(row) => String(row.id)}
      emptyMessage="Нет товаров"
    />
  );
}
