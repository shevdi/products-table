import { useMemo } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';
import type { SortingState } from '@tanstack/react-table';
import { fetchProducts } from '@/api/products';

const PAGE_SIZE = 5;
const SEARCH_DEBOUNCE_MS = 500;

function buildFetchParams(
  search: string,
  page: number,
  sorting: SortingState,
  cache?: RequestCache
) {
  return {
    search: search || undefined,
    limit: PAGE_SIZE,
    skip: (page - 1) * PAGE_SIZE,
    sortBy: sorting[0]?.id,
    order: sorting[0]?.desc ? ('desc' as const) : ('asc' as const),
    ...(cache && { cache }),
  };
}

export function useProductsQuery(search: string, page: number, sorting: SortingState) {
  const [debouncedSearch] = useDebounce(search, SEARCH_DEBOUNCE_MS);

  const queryKey = useMemo(
    () => ['products', debouncedSearch, page, sorting] as const,
    [debouncedSearch, page, sorting]
  );

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => fetchProducts(buildFetchParams(debouncedSearch, page, sorting)),
  });

  const products = data?.products ?? [];
  const totalItems = data?.total ?? 0;

  const handleRefresh = () => {
    queryClient.removeQueries({ queryKey });
    queryClient.fetchQuery({
      queryKey,
      queryFn: () =>
        fetchProducts(buildFetchParams(debouncedSearch, page, sorting, 'no-store')),
    });
  };

  return {
    products,
    totalItems,
    isLoading,
    handleRefresh,
    pageSize: PAGE_SIZE,
  };
}
