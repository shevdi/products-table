import type { Table } from '@tanstack/react-table';
import { BaseTableHeaderCell } from './BaseTableHeaderCell';
import styles from './BaseTable.module.css';

export interface BaseTableHeaderProps<TData> {
  table: Table<TData>;
}

export function BaseTableHeader<TData>({ table }: BaseTableHeaderProps<TData>) {
  return (
    <thead className={styles.baseTable__thead}>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className={styles.baseTable__tr}>
          {headerGroup.headers.map((header) => (
            <BaseTableHeaderCell key={header.id} header={header} />
          ))}
        </tr>
      ))}
    </thead>
  );
}
