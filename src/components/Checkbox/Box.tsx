import { forwardRef, useCallback } from 'react';
import clsx from 'clsx';
import { useCheckboxContext } from './useCheckboxContext';
import styles from './Checkbox.module.css';

export type BoxProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'>;

export const Box = forwardRef<HTMLInputElement, BoxProps>(
  ({ className, onChange: propsOnChange, ...props }, ref) => {
    const { id, checked, onChange, disabled, error } = useCheckboxContext();

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
        propsOnChange?.(e);
      },
      [onChange, propsOnChange]
    );

    return (
      <div
        className={clsx(
          styles.checkbox__box,
          error && styles['checkbox__box--error'],
          disabled && styles['checkbox__box--disabled'],
          className
        )}
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={!!error}
          aria-disabled={disabled}
          className={styles.checkbox__input}
          {...props}
        />
        <div className={styles.checkbox__indicator} aria-hidden />
      </div>
    );
  }
);

Box.displayName = 'Checkbox.Box';
