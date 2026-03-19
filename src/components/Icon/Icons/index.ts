import type { ComponentType, SVGProps } from 'react';
import type { IconName } from '../Icon.types';
import CaretLeftIcon from './CaretLeft.svg?react';
import CaretRightIcon from './CaretRight.svg?react';
import SearchIcon from './SearchIcon.svg?react';
import ReloadIcon from './ReloadIcon.svg?react';
import PlusCircleIcon from './PlusCircleIcon.svg?react';
import DotsIcon from './DotsIcon.svg?react';
import UserIcon from './UserIcon.svg?react';
import CloseIcon from './CloseIcon.svg?react';
import LockIcon from './LockIcon.svg?react';
import EyeOffIcon from './EyeOffIcon.svg?react';
import EyeIcon from './EyeIcon.svg?react';
import LogoIcon from './LogoIcon.svg?react';
import PlusClickIcon from './PlusClickIcon.svg?react';
import ArrowsClockwiseIcon from './ArrowsClockwise.svg?react';

export const iconComponents: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  'caret-left': CaretLeftIcon,
  'caret-right': CaretRightIcon,
  search: SearchIcon,
  reload: ReloadIcon,
  eye: EyeIcon,
  'eye-off': EyeOffIcon,
  'plus-circle': PlusCircleIcon,
  'plus-click': PlusClickIcon,
  'arrows-clockwise': ArrowsClockwiseIcon,
  dots: DotsIcon,
  user: UserIcon,
  close: CloseIcon,
  lock: LockIcon,
  logo: LogoIcon,
};
