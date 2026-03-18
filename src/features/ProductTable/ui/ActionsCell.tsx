import { Button, Icon } from '@/components';
import type { Product } from '@/shared/types/product';
import styles from './ProductTable.module.css';

export function ActionsCell({ row }: { row: { original: Product } }) {
  void row; // reserved for add/menu handlers
  return (
    <div className={styles.productTable__actions}>
      <button type="button" className={styles.productTable__iconBtn} aria-label="Добавить">
        <Icon name="plus-click" width={39} height={20} inheritColor={false} />
      </button>
      <Button
        variant="secondary"
        size="sm"
        className={styles.productTable__actionBtn}
        aria-label="Меню"
      >
        <Icon name="dots" size={20} />
      </Button>
    </div>
  );
}
