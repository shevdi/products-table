import type { ReactNode } from 'react';
import type { Table } from '@tanstack/react-table';
import clsx from 'clsx';
import { BaseTableBodyCell } from './BaseTableBodyCell';
import styles from './BaseTable.module.css';

export interface BaseTableBodyProps<TData> {
  table: Table<TData>;
  emptyMessage: ReactNode;
}

export function BaseTableBody<TData>({
  table,
  emptyMessage,
}: BaseTableBodyProps<TData>) {
  const leafColumns = table.getAllLeafColumns();
  const isEmpty = table.getRowModel().rows.length === 0;
  return (
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
            )}
          >
            {row.getVisibleCells().map((cell) => (
              <BaseTableBodyCell key={cell.id} cell={cell} />
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
}
