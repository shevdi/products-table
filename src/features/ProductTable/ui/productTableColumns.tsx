import type { ColumnDef } from '@tanstack/react-table';
import type { Product } from '@/shared/types/product';
import { ProductNameCell } from './ProductNameCell';
import { RatingCell } from './RatingCell';
import { PriceCell } from './PriceCell';
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
    cell: ({ getValue }) => <strong>{getValue() as string}</strong>,
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
    header: 'Цена, ₽',
    enableSorting: true,
    cell: ({ getValue }) => <PriceCell value={getValue() as number} />,
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }) => <ActionsCell row={row} />,
    enableSorting: false,
    meta: { truncate: false },
  },
];
