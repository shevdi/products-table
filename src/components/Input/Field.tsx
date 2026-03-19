import { forwardRef, useCallback } from 'react';
import type { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { useInputContext } from './InputContext';
import styles from './Input.module.css';

export type FieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { value: valueProp, onChange: onChangeProp, type, disabled, className, ...props },
  ref
) {
  const {
    id,
    errorId,
    value: contextValue,
    onChange: contextOnChange,
    disabled: contextDisabled,
    fieldType,
    error,
  } = useInputContext();

  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : contextValue;
  const resolvedType = type === 'password' ? fieldType : (type ?? 'text');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      contextOnChange(newValue);
      onChangeProp?.(e);
    },
    [contextOnChange, onChangeProp]
  );

  return (
    <input
      ref={ref}
      id={id}
      type={resolvedType}
      value={value}
      onChange={handleChange}
      disabled={disabled ?? contextDisabled}
      className={clsx(styles.input__field, className)}
      {...props}
      aria-invalid={!!error}
      aria-describedby={error ? errorId : undefined}
    />
  );
});
