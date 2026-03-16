import { useInputContext } from './InputContext';
import styles from './Input.module.css';

export function Error() {
  const { error } = useInputContext();

  if (!error) {
    return null;
  }

  return <span className={styles.input__error}>{error}</span>;
}
