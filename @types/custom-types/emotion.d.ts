import '@emotion/react';
import { ColorsTheme } from '@styles/index';
import { BreakPointTheme } from '@styles/themes/breakPoint';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsTheme;
    breakPoint: BreakPointTheme;
  }
}
