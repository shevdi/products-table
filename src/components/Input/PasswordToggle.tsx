import type { IconName } from '../Icon';
import { useInputContext } from './InputContext';
import { Icon } from '../Icon';
import styles from './Input.module.css';

export function PasswordToggle() {
  const { fieldType, setFieldType, disabled } = useInputContext();

  const isVisible = fieldType === 'text';
  const toggle = () => setFieldType(isVisible ? 'password' : 'text');
  const iconName: IconName = isVisible ? 'eye-off' : 'eye';

  return (
    <button
      type="button"
      className={styles['input__password-toggle']}
      onClick={toggle}
      disabled={disabled}
      aria-label={isVisible ? 'Hide password' : 'Show password'}
    >
      <Icon name={iconName} size={25} />
    </button>
  );
}
