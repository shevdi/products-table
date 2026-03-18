import type { Product } from '@/shared/types/product';
import styles from './ProductTable.module.css';

export function RatingCell({ row }: { row: { original: Product } }) {
  const rating = row.original.rating;
  const isLow = rating < 3;
  return (
    <span className={isLow ? styles.productTable__ratingLow : undefined}>
      {rating.toFixed(1)}/5
    </span>
  );
}
