import type { ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { ToastContext, setToastHandler, type ToastOptions } from './ToastContext';
import styles from './Toast.module.css';

interface ToastEntry extends ToastOptions {
  id: string;
}

export interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastEntry[]>([]);

  const addToast = useCallback((opts: ToastOptions) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setToasts((prev) => [...prev, { ...opts, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    setToastHandler(addToast);
    return () => {
      setToastHandler(null);
    };
  }, [addToast]);

  return (
    <ToastContext.Provider value={addToast}>
      <ToastPrimitive.Provider>
        {children}
        <ToastPrimitive.Viewport className={styles.toast__viewport} />
        {toasts.map((toast) => (
          <ToastPrimitive.Root
            key={toast.id}
            open
            onOpenChange={(open) => !open && removeToast(toast.id)}
            className={styles.toast__root}
          >
            {toast.title && (
              <ToastPrimitive.Title className={styles.toast__title}>
                {toast.title}
              </ToastPrimitive.Title>
            )}
            <ToastPrimitive.Description className={styles.toast__description}>
              {toast.description ?? (toast.title ? '' : 'Уведомление')}
            </ToastPrimitive.Description>
            <ToastPrimitive.Close className={styles.toast__close} aria-label="Закрыть">
              ×
            </ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}
