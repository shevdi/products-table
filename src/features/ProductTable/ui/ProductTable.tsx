import type { SortingState, OnChangeFn } from '@tanstack/react-table';
import { BaseTable } from '@/components';
import { useSelectedProductsStore } from '../model/selectedProductsStore';
import { useTableRowSelection } from '../hooks/useTableRowSelection';
import { productTableColumns } from './productTableColumns';
import type { Product } from '@/shared/types/product';

export interface ProductTableProps {
  products: Product[];
  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
  isLoading?: boolean;
}

export function ProductTable({
  products,
  sorting = [],
  onSortingChange,
  isLoading,
}: ProductTableProps) {
  const { selectedIds, setSelectedIds } = useSelectedProductsStore();
  const { rowSelection, handleRowSelectionChange } = useTableRowSelection(
    selectedIds,
    setSelectedIds
  );

  console.log('rowSelection', rowSelection);

  return (
    <BaseTable<Product>
      data={products}
      columns={productTableColumns}
      sorting={sorting}
      onSortingChange={onSortingChange}
      rowSelection={rowSelection}
      onRowSelectionChange={handleRowSelectionChange}
      enableRowSelection
      getRowId={(row) => String(row.id)}
      emptyMessage={isLoading ? 'Загружается' : 'Нет товаров'}
    />
  );
}
