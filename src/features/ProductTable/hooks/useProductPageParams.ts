import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { OnChangeFn, SortingState } from '@tanstack/react-table';

const URL_KEYS = {
  search: 'q',
  page: 'page',
  sortBy: 'sortBy',
  order: 'order',
} as const;

const SORTABLE_COLUMNS = ['name', 'brand', 'sku', 'rating', 'price'] as const;

function parseSearchParams(searchParams: URLSearchParams) {
  const search = searchParams.get(URL_KEYS.search) ?? '';
  const page = Math.max(1, parseInt(searchParams.get(URL_KEYS.page) ?? '1', 10) || 1);
  const sortBy = searchParams.get(URL_KEYS.sortBy) ?? undefined;
  const order = (searchParams.get(URL_KEYS.order) ?? 'asc') as 'asc' | 'desc';

  const sorting: SortingState =
    sortBy && SORTABLE_COLUMNS.includes(sortBy as (typeof SORTABLE_COLUMNS)[number])
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

export function useProductPageParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { search, page, sorting } = useMemo(
    () => parseSearchParams(searchParams),
    [searchParams]
  );

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

  const handleSortingChange = useCallback<OnChangeFn<SortingState>>(
    (updater) => {
      const next = typeof updater === 'function' ? updater(sorting) : updater;
      updateParams({ sorting: next, page: 1 });
    },
    [sorting, updateParams]
  );

  return {
    search,
    page,
    sorting,
    handleSearchChange,
    handlePageChange,
    handleSortingChange,
  };
}
