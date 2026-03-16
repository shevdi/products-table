import * as Progress from '@radix-ui/react-progress';
import clsx from 'clsx';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps {
  value?: number | null;
  max?: number;
  className?: string;
}

export function ProgressBar({ value = null, max = 100, className }: ProgressBarProps) {
  const percent =
    typeof value === 'number' && max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : null;

  return (
    <Progress.Root
      value={typeof value === 'number' ? value : null}
      max={max}
      className={clsx(styles.progressBar, className)}
    >
      <Progress.Indicator
        className={styles.progressBar__indicator}
        style={percent !== null ? { width: `${percent}%` } : undefined}
      />
    </Progress.Root>
  );
}
