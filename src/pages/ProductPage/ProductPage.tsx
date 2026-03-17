import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { SortingState, Updater } from '@tanstack/react-table';
import { fetchProducts } from '@/api/products';
import { ProductTable } from '@/features/ProductTable';
import { ProductSearch } from '@/features/ProductSearch';
import { ProgressBar } from '@/components/ProgressBar';

export function ProductPage() {
  const [search, setSearch] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);

  const { data, isLoading } = useQuery({
    queryKey: ['products', search],
    queryFn: () => fetchProducts({ search: search || undefined, limit: 5, skip: 0 }),
  });

  const products = data?.products ?? [];

  const handleSortingChange = (updater: Updater<SortingState>) => {
    setSorting((prev) => (typeof updater === 'function' ? updater(prev) : updater));
  };

  return (
    <div>
      <ProductSearch value={search} onChange={setSearch} />
      {isLoading && <ProgressBar />}
      <ProductTable products={products} sorting={sorting} onSortingChange={handleSortingChange} />
    </div>
  );
}
