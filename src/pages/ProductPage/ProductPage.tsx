import { useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';
import type { SortingState, Updater } from '@tanstack/react-table';
import { fetchProducts } from '@/api/products';
import { AddProductForm, ProductTable } from '@/features/ProductTable';
import { ProductSearch } from '@/features/ProductSearch';
import { ProgressBar } from '@/components/ProgressBar';
import { Pagination } from '@/components/Pagination';
import { Logout } from '@/features/auth';
import { Icon } from '@/components/Icon';
import { Modal } from '@/components/Modal';
import styles from './ProductPage.module.css';

const PAGE_SIZE = 5;
const SEARCH_DEBOUNCE_MS = 500;

const URL_KEYS = {
  search: 'q',
  page: 'page',
  sortBy: 'sortBy',
  order: 'order',
} as const;

function parseSearchParams(searchParams: URLSearchParams) {
  const search = searchParams.get(URL_KEYS.search) ?? '';
  const page = Math.max(1, parseInt(searchParams.get(URL_KEYS.page) ?? '1', 10) || 1);
  const sortBy = searchParams.get(URL_KEYS.sortBy) ?? undefined;
  const order = (searchParams.get(URL_KEYS.order) ?? 'asc') as 'asc' | 'desc';

  const sorting: SortingState =
    sortBy && ['name', 'brand', 'sku', 'rating', 'price'].includes(sortBy)
      ? [{ id: sortBy, desc: order === 'desc' }]
      : [];

  return { search, page, sorting };
}

function buildSearchParams(search: string, page: number, sorting: SortingState): URLSearchParams {
  const params = new URLSearchParams();
  if (search) params.set(URL_KEYS.search, search);
  if (page > 1) params.set(URL_KEYS.page, String(page));
  const [sort] = sorting;
  if (sort) {
    params.set(URL_KEYS.sortBy, sort.id);
    params.set(URL_KEYS.order, sort.desc ? 'desc' : 'asc');
  }
  return params;
}

export function ProductPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { search, page, sorting } = useMemo(() => parseSearchParams(searchParams), [searchParams]);

  const [debouncedSearch] = useDebounce(search, SEARCH_DEBOUNCE_MS);

  const updateParams = useCallback(
    (updates: { search?: string; page?: number; sorting?: SortingState }) => {
      const nextSearch = updates.search ?? search;
      const nextPage = updates.page ?? page;
      const nextSorting = updates.sorting ?? sorting;
      setSearchParams(buildSearchParams(nextSearch, nextPage, nextSorting), { replace: true });
    },
    [search, page, sorting, setSearchParams]
  );

  const handleSearchChange = useCallback(
    (value: string) => {
      updateParams({ search: value, page: 1 });
    },
    [updateParams]
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      updateParams({ page: newPage });
    },
    [updateParams]
  );

  const handleSortingChange = useCallback(
    (updater: Updater<SortingState>) => {
      const next = typeof updater === 'function' ? updater(sorting) : updater;
      updateParams({ sorting: next, page: 1 });
    },
    [sorting, updateParams]
  );

  const queryClient = useQueryClient();
  const queryKey = useMemo(
    () => ['products', debouncedSearch, page, sorting] as const,
    [debouncedSearch, page, sorting]
  );

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () =>
      fetchProducts({
        search: debouncedSearch || undefined,
        limit: PAGE_SIZE,
        skip: (page - 1) * PAGE_SIZE,
        sortBy: sorting[0]?.id,
        order: sorting[0]?.desc ? 'desc' : 'asc',
      }),
  });

  const products = data?.products ?? [];
  const totalItems = data?.total ?? 0;

  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleRefresh = () => {
    queryClient.removeQueries({ queryKey });
    queryClient.fetchQuery({
      queryKey,
      queryFn: () =>
        fetchProducts({
          search: debouncedSearch || undefined,
          limit: PAGE_SIZE,
          skip: (page - 1) * PAGE_SIZE,
          sortBy: sorting[0]?.id,
          order: sorting[0]?.desc ? 'desc' : 'asc',
          cache: 'no-store',
        }),
    });
  };

  return (
    <div className={styles.page}>
      <Logout />
      <div className={styles.pageSearch}>
        <div className={styles.pageSearchContent}>
          <h1 className={styles.pageTitle}>Товары</h1>
          <div className={styles.pageHeader}>
            <ProductSearch value={search} onChange={handleSearchChange} />
          </div>
        </div>
      </div>
      <div className={styles.pageContent}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Все позиции</h2>
          <div className={styles.sectionActions}>
            <button
              type="button"
              className={styles.refreshBtn}
              aria-label="Обновить"
              onClick={handleRefresh}
            >
              <Icon name="reload" size={20} />
            </button>
            <button type="button" className={styles.addBtn} onClick={() => setAddModalOpen(true)}>
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
          onPageChange={handlePageChange}
        />
      </div>
      <Modal open={addModalOpen} onOpenChange={setAddModalOpen}>
        <h2 className={styles.modalTitle}>Добавить товар</h2>
        <AddProductForm onSuccess={() => setAddModalOpen(false)} />
      </Modal>
    </div>
  );
}
