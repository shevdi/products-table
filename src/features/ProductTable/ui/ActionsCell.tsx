import { Button, Icon } from '@/components';
import type { Product } from '@/shared/types/product';
import styles from './ProductTable.module.css';

export function ActionsCell({ row }: { row: { original: Product } }) {
  void row; // reserved for add/menu handlers
  return (
    <div className={styles.productTable__actions}>
      <Button variant="secondary" className={styles.productTable__iconBtn} aria-label="Добавить">
        <Icon name="plus-click" width={50} height={30} inheritColor={false} />
      </Button>
      <Button
        variant="secondary"
        size="md"
        className={styles.productTable__actionBtn}
        aria-label="Меню"
      >
        <Icon name="dots" size={30} />
      </Button>
    </div>
  );
}
