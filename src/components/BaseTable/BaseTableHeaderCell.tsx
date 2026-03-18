import { flexRender, type Header } from '@tanstack/react-table';
import clsx from 'clsx';
import { SortIndicator } from './SortIndicator';
import styles from './BaseTable.module.css';

export interface BaseTableHeaderCellProps<TData> {
  header: Header<TData, unknown>;
}

export function BaseTableHeaderCell<TData>({ header }: BaseTableHeaderCellProps<TData>) {
  const canSort = header.column.getCanSort();
  return (
    <th
      key={header.id}
      className={clsx(
        styles.baseTable__th,
        canSort && styles.baseTable__th_sortable
      )}
    >
      <div
        className={styles.baseTable__headerContent}
        onClick={header.column.getToggleSortingHandler()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            header.column.getToggleSortingHandler()?.(e as unknown as React.MouseEvent);
          }
        }}
        role={canSort ? 'button' : undefined}
        tabIndex={canSort ? 0 : undefined}
      >
        {flexRender(header.column.columnDef.header, header.getContext())}
        {canSort && <SortIndicator direction={header.column.getIsSorted()} />}
      </div>
    </th>
  );
}
