import type { ReactNode, LabelHTMLAttributes } from 'react';
import clsx from 'clsx';
import { useInputContext } from './InputContext';
import styles from './Input.module.css';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function Label({ children, className, htmlFor, ...props }: LabelProps) {
  const { id } = useInputContext();

  return (
    <label htmlFor={htmlFor ?? id} className={clsx(styles.input__label, className)} {...props}>
      {children}
    </label>
  );
}
