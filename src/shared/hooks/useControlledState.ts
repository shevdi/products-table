import { useCallback, useState } from 'react';

/**
 * Handles controlled/uncontrolled state pattern.
 * When controlledValue is undefined, uses internal state; otherwise uses controlled value.
 * @param defaultValue - Initial value when uncontrolled (required when controlledValue may be undefined)
 */
export function useControlledState<T>(
  controlledValue: T | undefined,
  onChange?: (value: T) => void,
  defaultValue?: T
): [T, (value: T) => void] {
  const [internalValue, setInternalValue] = useState<T>(
    () => (defaultValue ?? controlledValue) as T
  );

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const setValue = useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  return [value, setValue];
}
