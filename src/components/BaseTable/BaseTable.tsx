import type { ReactNode } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
  type RowSelectionState,
  type OnChangeFn,
} from '@tanstack/react-table';
import { useTableColumnsWithSelection } from './useTableColumnsWithSelection';
import { BaseTableHeader } from './BaseTableHeader';
import { BaseTableBody } from './BaseTableBody';
import styles from './BaseTable.module.css';

export interface BaseTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData, unknown>[];
  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  emptyMessage?: ReactNode;
  getRowId?: (row: TData) => string;
  enableRowSelection?: boolean;
}

const DEFAULT_EMPTY_MESSAGE = 'Нет данных';

export function BaseTable<TData>({
  data,
  columns,
  sorting = [],
  onSortingChange,
  rowSelection = {},
  onRowSelectionChange,
  emptyMessage = DEFAULT_EMPTY_MESSAGE,
  getRowId,
  enableRowSelection = false,
}: BaseTableProps<TData>) {
  // TanStack Table's useReactTable uses interior mutability incompatible with React Compiler memoization.
  // See: https://react.dev/reference/eslint-plugin-react-hooks/lints/incompatible-library
  'use no memo';
  const tableColumns = useTableColumnsWithSelection(columns, enableRowSelection);

  // eslint-disable-next-line react-hooks/incompatible-library -- useReactTable uses interior mutability; "use no memo" above opts out.
  const table = useReactTable({
    data,
    columns: tableColumns,
    state: {
      sorting,
      rowSelection,
    },
    onSortingChange,
    onRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableRowSelection,
    getRowId: getRowId ? (originalRow) => getRowId(originalRow as TData) : undefined,
    defaultColumn: {
      cell: ({ getValue }) => (getValue() != null ? String(getValue()) : ''),
    },
  });

  return (
    <div className={styles.baseTable}>
      <table className={styles.baseTable__table}>
        <BaseTableHeader table={table} />
        <BaseTableBody table={table} emptyMessage={emptyMessage} />
      </table>
    </div>
  );
}
