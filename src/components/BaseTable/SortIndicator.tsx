import styles from './BaseTable.module.css';

export interface SortIndicatorProps {
  direction: 'asc' | 'desc' | false;
}

export function SortIndicator({ direction }: SortIndicatorProps) {
  return (
    <span className={styles.baseTable__sortIndicator} aria-hidden>
      {direction === 'asc' ? ' ↑' : direction === 'desc' ? ' ↓' : ''}
    </span>
  );
}
