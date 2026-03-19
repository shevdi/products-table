import { useInputContext } from './InputContext';
import styles from './Input.module.css';

export function Error() {
  const { error, errorId } = useInputContext();

  if (!error) {
    return null;
  }

  return (
    <span id={errorId} role="alert" className={styles.input__error}>
      {error}
    </span>
  );
}
