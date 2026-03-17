export const ICON_NAMES = [
  'search',
  'reload',
  'plus-circle',
  'plus-click',
  'dots',
  'user',
  'close',
  'lock',
  'eye',
  'eye-off',
  'logo',
  'arrows-clockwise',
] as const;

export type IconName = (typeof ICON_NAMES)[number];
