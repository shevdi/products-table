export interface Product {
  id: number | string;
  title: string;
  category: string;
  brand: string;
  sku?: string;
  rating: number;
  price: number;
  thumbnail?: string;
}
