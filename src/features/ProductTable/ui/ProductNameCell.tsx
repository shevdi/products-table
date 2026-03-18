import type { Product } from '@/shared/types/product';
import styles from './ProductTable.module.css';

export function ProductNameCell({ row }: { row: { original: Product } }) {
  const p = row.original;
  const hasThumbnail = p.thumbnail && p.thumbnail.trim() !== '';
  return (
    <div className={styles.productTable__nameCell}>
      <div className={styles.productTable__nameCellThumb}>
        {hasThumbnail ? (
          <img
            src={p.thumbnail}
            alt=""
            width={48}
            height={48}
            className={styles.productTable__nameCellImg}
          />
        ) : (
          <div className={styles.productTable__nameCellPlaceholder} aria-hidden />
        )}
      </div>
      <div className={styles.productTable__nameCellText}>
        <div className={styles.productTable__nameCellTitle}>{p.title}</div>
        <div className={styles.productTable__nameCellCategory}>{p.category}</div>
      </div>
    </div>
  );
}
