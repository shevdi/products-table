import type { ReactNode } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { ToastContext, toast } from './ToastContext';
import { ToastItem } from './ToastItem';
import { useToastState } from './useToastState';
import styles from './Toast.module.css';

export interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const { toasts, removeToast } = useToastState();

  return (
    <ToastContext.Provider value={toast}>
      <ToastPrimitive.Provider duration={5000}>
        {children}
        <ToastPrimitive.Viewport className={styles.toast__viewport} />
        {toasts.map((t) => (
          <ToastItem key={t.id} {...t} onClose={() => removeToast(t.id)} />
        ))}
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}
