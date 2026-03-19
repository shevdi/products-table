import { createContext, useContext } from 'react';

export type InputSize = 'sm' | 'md';

export interface InputContextValue {
  id: string;
  errorId: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  size: InputSize;
  setFieldValue: (value: string) => void;
  setFieldType: (type: 'text' | 'password') => void;
  fieldType: 'text' | 'password';
}

const InputContext = createContext<InputContextValue | null>(null);

export function useInputContext() {
  const ctx = useContext(InputContext);
  if (!ctx) {
    throw new Error('Input components must be used within Input.Root');
  }
  return ctx;
}

export { InputContext };
