import type { ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { useInputContext } from './InputContext';
import styles from './Input.module.css';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Box({ children, className, ...props }: BoxProps) {
  const { error, disabled, size } = useInputContext();

  return (
    <div
      className={clsx(
        styles.input,
        styles[`input--${size}`],
        error && styles['input--error'],
        disabled && styles['input--disabled'],
        className
      )}
      data-disabled={disabled}
      {...props}
    >
      {children}
    </div>
  );
}
