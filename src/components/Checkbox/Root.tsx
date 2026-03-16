import type { ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { CheckboxContextProvider } from './CheckboxContextProvider';
import styles from './Checkbox.module.css';

export interface RootProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  children: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  error?: string;
}

export function Root({
  children,
  checked,
  onChange,
  disabled,
  error,
  className,
  ...props
}: RootProps) {
  return (
    <CheckboxContextProvider
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      error={error}
    >
      <div className={clsx(styles.checkbox, className)} {...props}>
        {children}
      </div>
    </CheckboxContextProvider>
  );
}
