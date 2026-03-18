import * as ToastPrimitive from '@radix-ui/react-toast';
import type { ToastOptions } from './ToastContext';
import styles from './Toast.module.css';

interface ToastItemProps extends ToastOptions {
  id: string;
  onClose: () => void;
}

export function ToastItem({ title, description, onClose }: ToastItemProps) {
  return (
    <ToastPrimitive.Root
      open
      onOpenChange={(open) => !open && onClose()}
      className={styles.toast__root}
    >
      {title && (
        <ToastPrimitive.Title className={styles.toast__title}>{title}</ToastPrimitive.Title>
      )}
      <ToastPrimitive.Description className={styles.toast__description}>
        {description ?? (title ? '' : 'Уведомление')}
      </ToastPrimitive.Description>
      <ToastPrimitive.Close className={styles.toast__close} aria-label="Закрыть">
        ×
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
}
