import { createContext } from 'react';

export interface CheckboxContextValue {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  error?: string;
}

export const CheckboxContext = createContext<CheckboxContextValue | null>(null);
