import { useId, useState, useCallback, type ReactNode } from 'react';
import { InputContext, type InputContextValue, type InputSize } from './InputContext';

interface InputContextProviderProps {
  children: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  size?: InputSize;
  type?: 'text' | 'password';
}

export function InputContextProvider({
  children,
  value: controlledValue,
  onChange: controlledOnChange,
  error,
  disabled,
  size = 'sm',
  type: fieldTypeProp = 'text',
}: InputContextProviderProps) {
  const id = useId();
  const [internalValue, setInternalValue] = useState('');
  const [fieldType, setFieldTypeState] = useState<'text' | 'password'>(fieldTypeProp);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const setFieldValue = useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      controlledOnChange?.(newValue);
    },
    [isControlled, controlledOnChange]
  );

  const onChange = useCallback(
    (newValue: string) => {
      setFieldValue(newValue);
    },
    [setFieldValue]
  );

  const setFieldType = useCallback((type: 'text' | 'password') => {
    setFieldTypeState(type);
  }, []);

  const ctxValue: InputContextValue = {
    id,
    value,
    onChange,
    error,
    disabled,
    size,
    setFieldValue,
    setFieldType,
    fieldType,
  };

  return <InputContext.Provider value={ctxValue}>{children}</InputContext.Provider>;
}
