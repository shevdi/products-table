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

export async function fetchProducts(params?: {
  search?: string;
  limit?: number;
  skip?: number;
}): Promise<{ products: Product[]; total: number }> {
  const limit = params?.limit ?? 5;
  const skip = params?.skip ?? 0;
  const path = params?.search
    ? `/products/search?q=${encodeURIComponent(params.search)}&limit=${limit}&skip=${skip}`
    : `/products?limit=${limit}&skip=${skip}`;
  const res = await apiFetch<ProductsResponse>(path);
  return {
    products: res.products.map(mapApiProduct),
    total: res.total,
  };
}
