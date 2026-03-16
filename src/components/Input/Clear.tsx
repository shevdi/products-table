import { useInputContext } from './InputContext';
import { Icon } from '../Icon';
import styles from './Input.module.css';

export function Clear() {
  const { value, setFieldValue, disabled } = useInputContext();

  if (value.length === 0) {
    return null;
  }

  return (
    <button
      type="button"
      className={styles.input__clear}
      onClick={() => setFieldValue('')}
      disabled={disabled}
      aria-label="Clear"
    >
      <Icon name="close" size={16} />
    </button>
  );
}
