import { useCallback, useEffect, useState } from 'react';
import { setToastHandler, type ToastOptions } from './ToastContext';

interface ToastEntry extends ToastOptions {
  id: string;
}

export function useToastState() {
  const [toasts, setToasts] = useState<ToastEntry[]>([]);

  const addToast = useCallback((opts: ToastOptions) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...opts, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    setToastHandler(addToast);
    return () => setToastHandler(null);
  }, [addToast]);

  return { toasts, addToast, removeToast };
}
