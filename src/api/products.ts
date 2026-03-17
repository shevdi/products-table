import { apiFetch } from './client';
import type { Product } from '@/shared/types/product';

interface ApiProduct {
  id: number;
  title: string;
  category: string;
  brand: string;
  sku?: string;
  rating: number;
  price: number;
  thumbnail?: string;
}

interface ProductsResponse {
  products: ApiProduct[];
  total: number;
  skip: number;
  limit: number;
}

const mapApiProduct = (p: ApiProduct): Product => ({
  id: p.id,
  title: p.title,
  category: p.category,
  brand: p.brand,
  sku: p.sku,
  rating: p.rating,
  price: p.price,
  thumbnail: p.thumbnail,
});

const COLUMN_TO_API_FIELD: Record<string, string> = {
  name: 'title',
  brand: 'brand',
  sku: 'sku',
  rating: 'rating',
  price: 'price',
};

export async function fetchProducts(params?: {
  search?: string;
  limit?: number;
  skip?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
  cache?: RequestCache;
}): Promise<{ products: Product[]; total: number }> {
  const limit = params?.limit ?? 5;
  const skip = params?.skip ?? 0;
  const sortBy = params?.sortBy ? COLUMN_TO_API_FIELD[params.sortBy] ?? params.sortBy : undefined;
  const order = params?.order ?? 'asc';

  const searchParams = new URLSearchParams();
  if (params?.search) searchParams.set('q', params.search);
  searchParams.set('limit', String(limit));
  searchParams.set('skip', String(skip));
  if (sortBy) {
    searchParams.set('sortBy', sortBy);
    searchParams.set('order', order);
  }

  const path = params?.search
    ? `/products/search?${searchParams.toString()}`
    : `/products?${searchParams.toString()}`;
  const fetchOptions = params?.cache ? { cache: params.cache } : undefined;
  const res = await apiFetch<ProductsResponse>(path, fetchOptions);
  return {
    products: res.products.map(mapApiProduct),
    total: res.total,
  };
}
