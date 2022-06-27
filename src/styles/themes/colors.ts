export const colors = {
  pageBgFirstColor: '#000000',
  pageBgSecondColor: '#171718',
  pageTextFirstColor: '#ffffff',
  pageTextSecondColor: '#ced4da',
  selectButtonColor: '#495057',
  selectButtonFocusColor: '#06e8d3',
  talkStartSide: '#353535',
  talkEndSide: '#0078ff',
} as const;

export type ColorsTheme = typeof colors;
