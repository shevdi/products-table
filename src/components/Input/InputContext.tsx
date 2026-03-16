import {
  createContext,
  useContext,
  useId,
  useState,
  useCallback,
  type ReactNode,
} from 'react';

export type InputSize = 'sm' | 'md';

export interface InputContextValue {
  id: string;
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
