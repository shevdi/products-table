import {
  useId,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
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
  const [internalChecked, setInternalChecked] = useState(false);

  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const onChange = useCallback(
    (newChecked: boolean) => {
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      controlledOnChange?.(newChecked);
    },
    [isControlled, controlledOnChange]
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
