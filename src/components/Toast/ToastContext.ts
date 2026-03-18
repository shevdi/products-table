import { createContext, useContext } from 'react';

export interface ToastOptions {
  title?: string;
  description?: string;
}

let toastHandler: ((opts: ToastOptions) => void) | null = null;

export function setToastHandler(handler: ((opts: ToastOptions) => void) | null) {
  toastHandler = handler;
}

export function toast(opts: ToastOptions) {
  toastHandler?.(opts);
}

export const ToastContext = createContext<((opts: ToastOptions) => void) | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return ctx;
}
