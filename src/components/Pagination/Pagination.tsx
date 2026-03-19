import clsx from 'clsx';
import { Icon } from '../Icon';
import styles from './Pagination.module.css';
import { getVisiblePages } from './utils';

export interface PaginationProps {
  page: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  page,
  totalItems,
  pageSize,
  onPageChange,
  className,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = totalItems === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const end = Math.min(safePage * pageSize, totalItems);
  const visiblePages = getVisiblePages(totalPages, safePage);

  const isFirstPage = safePage <= 1;
  const isLastPage = safePage >= totalPages;

  return (
    <nav className={clsx(styles.pagination, className)} role="navigation" aria-label="Пагинация">
      <span className={styles.pagination__range}>
        <span className={styles.pagination__rangeLabel}>Показано</span>
        <span className={styles.pagination__rangeValue}>{start}-{end}</span>
        <span className={styles.pagination__rangeLabel}>из</span>
        <span className={styles.pagination__rangeValue}>{totalItems}</span>
      </span>

      <div className={styles.pagination__nav}>
        <button
          type="button"
          className={styles.pagination__arrow}
          onClick={() => onPageChange(safePage - 1)}
          disabled={isFirstPage}
          aria-label="Предыдущая страница"
        >
          <Icon name="caret-left" size={20} />
        </button>

        {visiblePages.map((item, index) =>
          item === 'ellipsis' ? (
            <span key={`ellipsis-${index}`} className={styles.pagination__ellipsis}>
              …
            </span>
          ) : (
            <button
              key={item}
              type="button"
              className={clsx(
                styles.pagination__page,
                item === safePage && styles['pagination__page--active']
              )}
              onClick={() => onPageChange(item)}
              aria-label={`Страница ${item}`}
              aria-current={item === safePage ? 'page' : undefined}
            >
              {item}
            </button>
          )
        )}

        <button
          type="button"
          className={styles.pagination__arrow}
          onClick={() => onPageChange(safePage + 1)}
          disabled={isLastPage}
          aria-label="Следующая страница"
        >
          <Icon name="caret-right" size={20} />
        </button>
      </div>
    </nav>
  );
}
