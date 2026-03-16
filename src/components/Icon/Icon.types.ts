export const ICON_NAMES = [
  'search',
  'reload',
  'plus-circle',
  'dots',
  'user',
  'close',
  'lock',
  'eye-off',
  'logo',
] as const;

export type IconName = (typeof ICON_NAMES)[number];
