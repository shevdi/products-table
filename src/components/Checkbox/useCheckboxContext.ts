import { useContext } from 'react';
import { CheckboxContext } from './CheckboxContext';

export function useCheckboxContext() {
  const ctx = useContext(CheckboxContext);
  if (!ctx) {
    throw new Error('Checkbox components must be used within Checkbox.Root');
  }
  return ctx;
}
