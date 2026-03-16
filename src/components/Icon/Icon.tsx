import type { SVGProps } from 'react';
import styles from './Icon.module.css';
import { iconComponents } from './Icons';
import { ICON_NAMES, type IconName } from './Icon.types';

export { ICON_NAMES, type IconName } from './Icon.types';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: number;
}

function isIconName(name: string): name is IconName {
  return ICON_NAMES.includes(name as IconName);
}

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  if (!isIconName(name)) {
    return null;
  }

  const IconComponent = iconComponents[name];
  if (!IconComponent) {
    return null;
  }
  return (
    <IconComponent
      width={size}
      height={size}
      className={className ? `${styles.icon} ${className}` : styles.icon}
      {...props}
    />
  );
}
