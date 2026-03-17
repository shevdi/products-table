import { useMemo, type ReactNode } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type RowSelectionState,
  type OnChangeFn,
} from '@tanstack/react-table';
import clsx from 'clsx';
import { Checkbox } from '../Checkbox';
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

function createSelectionColumn<TData>(): ColumnDef<TData, unknown> {
  return {
    id: 'select',
    header: ({ table }) => (
      <Checkbox.Root
        checked={table.getIsAllRowsSelected()}
        onChange={(checked) => table.toggleAllRowsSelected(checked)}
      >
        <Checkbox.Box aria-label="Выбрать все" />
      </Checkbox.Root>
    ),
    cell: ({ row }) => (
      <Checkbox.Root
        checked={row.getIsSelected()}
        onChange={() => row.toggleSelected()}
      >
        <Checkbox.Box aria-label={`Выбрать строку ${row.id}`} />
      </Checkbox.Root>
    ),
    enableSorting: false,
    meta: { truncate: false },
  };
}

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
  const tableColumns = useMemo(() => {
    if (enableRowSelection) {
      return [createSelectionColumn<TData>(), ...columns];
    }
    return columns;
  }, [enableRowSelection, columns]);

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

  const leafColumns = table.getAllLeafColumns();
  const isEmpty = data.length === 0;

  return (
    <div className={styles.baseTable}>
      <table className={styles.baseTable__table}>
        <thead className={styles.baseTable__thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={styles.baseTable__tr}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={clsx(
                    styles.baseTable__th,
                    header.column.getCanSort() && styles.baseTable__th_sortable
                  )}
                  style={{ width: header.getSize() }}>
                  <div
                    className={styles.baseTable__headerContent}
                    onClick={header.column.getToggleSortingHandler()}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        header.column.getToggleSortingHandler()?.(e as unknown as React.MouseEvent);
                      }
                    }}
                    role={header.column.getCanSort() ? 'button' : undefined}
                    tabIndex={header.column.getCanSort() ? 0 : undefined}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanSort() && (
                      <span className={styles.baseTable__sortIndicator} aria-hidden>
                        {header.column.getIsSorted() === 'asc'
                          ? ' ↑'
                          : header.column.getIsSorted() === 'desc'
                            ? ' ↓'
                            : ''}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.baseTable__tbody}>
          {isEmpty ? (
            <tr className={styles.baseTable__tr}>
              <td colSpan={leafColumns.length} className={styles.baseTable__emptyCell}>
                {emptyMessage}
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={clsx(
                  styles.baseTable__tr,
                  row.getIsSelected() && styles.baseTable__tr_selected
                )}>
                {row.getVisibleCells().map((cell) => {
                  const columnDef = cell.column.columnDef;
                  const meta = (columnDef.meta ?? {}) as { truncate?: boolean };
                  const truncate = meta.truncate !== false;
                  return (
                    <td
                      key={cell.id}
                      className={clsx(
                        styles.baseTable__td,
                        truncate && styles.baseTable__td_truncate
                      )}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
