import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import styles from './Toast.module.css';

export interface ToastOptions {
  title?: string;
  description?: string;
}

interface ToastEntry extends ToastOptions {
  id: string;
}

let toastHandler: ((opts: ToastOptions) => void) | null = null;

export function toast(opts: ToastOptions) {
  toastHandler?.(opts);
}

const ToastContext = createContext<((opts: ToastOptions) => void) | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return ctx;
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
    toastHandler = addToast;
    return () => {
      toastHandler = null;
    };
  }, [addToast]);

  return (
    <ToastContext.Provider value={addToast}>
      <ToastPrimitive.Provider>
        {children}
        <ToastPrimitive.Viewport className={styles.toast__viewport} />
        {toasts.map((t) => (
          <ToastPrimitive.Root
            key={t.id}
            open
            onOpenChange={(open) => !open && removeToast(t.id)}
            className={styles.toast__root}
          >
            {t.title && (
              <ToastPrimitive.Title className={styles.toast__title}>{t.title}</ToastPrimitive.Title>
            )}
            <ToastPrimitive.Description className={styles.toast__description}>
              {t.description ?? (t.title ? '' : 'Уведомление')}
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
