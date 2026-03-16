import type { ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

export interface LeadingProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Leading({ children, className, ...props }: LeadingProps) {
  return (
    <span className={clsx(styles.input__leading, className)} {...props}>
      {children}
    </span>
  );
}
