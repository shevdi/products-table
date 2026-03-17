import { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { SortingState, Updater } from '@tanstack/react-table';
import { fetchProducts } from '@/api/products';
import { ProductTable } from '@/features/ProductTable';
import { ProductSearch } from '@/features/ProductSearch';
import { ProgressBar } from '@/components/ProgressBar';
import { Pagination } from '@/components/Pagination';
import { Logout } from '@/features/auth';
import { Icon } from '@/components/Icon';
import styles from './ProductPage.module.css';

const PAGE_SIZE = 5;

export function ProductPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState<SortingState>([]);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
    setPage(1);
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ['products', search, page],
    queryFn: () =>
      fetchProducts({
        search: search || undefined,
        limit: PAGE_SIZE,
        skip: (page - 1) * PAGE_SIZE,
      }),
  });

  const products = data?.products ?? [];
  const totalItems = data?.total ?? 0;

  const handleSortingChange = (updater: Updater<SortingState>) => {
    setSorting((prev) => (typeof updater === 'function' ? updater(prev) : updater));
  };

  return (
    <div className={styles.page}>
      <Logout />
      <div className={styles.pageSearch}>
        <h1 className={styles.pageTitle}>Товары</h1>
        <div className={styles.pageHeader}>
          <ProductSearch value={search} onChange={handleSearchChange} />
        </div>
      </div>
      <div className={styles.pageContent}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Все позиции</h2>
          <div className={styles.sectionActions}>
            <button type="button" className={styles.refreshBtn} aria-label="Обновить">
              <Icon name="reload" size={20} />
            </button>
            <button type="button" className={styles.addBtn}>
              <Icon name="plus-circle" size={20} />
              Добавить
            </button>
          </div>
        </div>
        {isLoading && <ProgressBar />}
        <ProductTable products={products} sorting={sorting} onSortingChange={handleSortingChange} />
        <Pagination
          className={styles.pagination}
          page={page}
          totalItems={totalItems}
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
