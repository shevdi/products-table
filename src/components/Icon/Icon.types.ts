export const ICON_NAMES = [
  'caret-left',
  'caret-right',
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
