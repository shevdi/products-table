import type { ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { InputContextProvider } from './InputContextProvider';
import type { InputSize } from './InputContext';
import styles from './Input.module.css';

export interface RootProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  children: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  size?: InputSize;
  type?: 'text' | 'password';
}

export function Root({
  children,
  value,
  onChange,
  error,
  disabled,
  size = 'sm',
  type,
  className,
  ...props
}: RootProps) {
  return (
    <InputContextProvider
      value={value}
      onChange={onChange}
      error={error}
      disabled={disabled}
      size={size}
      type={type}
    >
      <div className={clsx(styles.inputRoot, className)} {...props}>
        {children}
      </div>
    </InputContextProvider>
  );
}
