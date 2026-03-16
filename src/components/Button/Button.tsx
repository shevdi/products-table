import { Slot } from '@radix-ui/react-slot';
import { Icon } from '../Icon';
import styles from './Button.module.css';
import { type ButtonProps, BUTTON_VARIANTS, BUTTON_SIZES } from './Button.types';
import clsx from 'clsx';

const ICON_SIZE_MAP = { sm: 16, md: 20, lg: 24 } as const;

export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  asChild = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const variantClass = BUTTON_VARIANTS.includes(variant) ? styles[`button--${variant}`] : '';
  const sizeClass = BUTTON_SIZES.includes(size) ? styles[`button--${size}`] : '';
  const classNames = clsx([styles.button, variantClass, sizeClass, className]);

  const iconSize = ICON_SIZE_MAP[size];

  const content = (
    <>
      {iconLeft && (
        <span className={styles.button__icon}>
          <Icon name={iconLeft} size={iconSize} />
        </span>
      )}
      <span>{children}</span>
      {iconRight && (
        <span className={styles.button__icon}>
          <Icon name={iconRight} size={iconSize} />
        </span>
      )}
    </>
  );

  if (asChild) {
    return (
      <Slot className={classNames} {...(disabled !== undefined && { disabled })} {...props}>
        {children}
      </Slot>
    );
  }

  return (
    <button type="button" className={classNames} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
