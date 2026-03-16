import type { ButtonHTMLAttributes } from 'react';
import type { IconName } from '../Icon';

export const BUTTON_VARIANTS = ['primary', 'secondary'] as const;
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_SIZES = ['sm', 'md', 'lg'] as const;
export type ButtonSize = (typeof BUTTON_SIZES)[number];

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: IconName;
  iconRight?: IconName;
  asChild?: boolean;
  children?: React.ReactNode;
}
