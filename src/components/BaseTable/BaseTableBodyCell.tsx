import { flexRender, type Cell } from '@tanstack/react-table';
import clsx from 'clsx';
import styles from './BaseTable.module.css';

export interface BaseTableBodyCellProps<TData> {
  cell: Cell<TData, unknown>;
}

export function BaseTableBodyCell<TData>({ cell }: BaseTableBodyCellProps<TData>) {
  const columnDef = cell.column.columnDef;
  const meta = (columnDef.meta ?? {}) as { truncate?: boolean };
  const truncate = meta.truncate !== false;
  return (
    <td
      className={clsx(
        styles.baseTable__td,
        truncate && styles.baseTable__td_truncate
      )}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
}
