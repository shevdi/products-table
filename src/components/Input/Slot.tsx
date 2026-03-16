import type { ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

export interface SlotProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Slot({ children, className, ...props }: SlotProps) {
  return (
    <span className={clsx(styles.input__slot, className)} {...props}>
      {children}
    </span>
  );
}
