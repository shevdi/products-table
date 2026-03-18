import type { ColumnDef } from '@tanstack/react-table';
import type { Product } from '@/shared/types/product';
import { ProductNameCell } from './ProductNameCell';
import { RatingCell } from './RatingCell';
import { ActionsCell } from './ActionsCell';

export const productTableColumns: ColumnDef<Product, unknown>[] = [
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
];
