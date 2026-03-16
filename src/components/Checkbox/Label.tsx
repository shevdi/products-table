import type { ReactNode, LabelHTMLAttributes } from 'react';
import clsx from 'clsx';
import { useCheckboxContext } from './useCheckboxContext';
import styles from './Checkbox.module.css';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function Label({ children, className, htmlFor, ...props }: LabelProps) {
  const { id } = useCheckboxContext();

  return (
    <label
      htmlFor={htmlFor ?? id}
      className={clsx(styles.checkbox__label, className)}
      {...props}
    >
      {children}
    </label>
  );
}
