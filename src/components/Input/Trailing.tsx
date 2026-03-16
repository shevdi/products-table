import type { ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

export interface TrailingProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Trailing({ children, className, ...props }: TrailingProps) {
  return (
    <span className={clsx(styles.input__trailing, className)} {...props}>
      {children}
    </span>
  );
}
