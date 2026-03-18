import { useId, type ReactNode } from 'react';
import { useControlledState } from '@/shared/hooks/useControlledState';
import { CheckboxContext } from './CheckboxContext';
import type { CheckboxContextValue } from './CheckboxContext';

interface CheckboxContextProviderProps {
  children: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  error?: string;
}

export function CheckboxContextProvider({
  children,
  checked: controlledChecked,
  onChange: controlledOnChange,
  disabled,
  error,
}: CheckboxContextProviderProps) {
  const id = useId();
  const [checked, onChange] = useControlledState(
    controlledChecked,
    controlledOnChange,
    false
  );

  const ctxValue: CheckboxContextValue = {
    id,
    checked,
    onChange,
    disabled,
    error,
  };

  return (
    <CheckboxContext.Provider value={ctxValue}>{children}</CheckboxContext.Provider>
  );
}
