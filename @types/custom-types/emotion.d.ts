import '@emotion/react';
import { ColorsTheme, BreakPointTheme, FontsTheme } from '@styles/index';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsTheme;
    breakPoint: BreakPointTheme;
    fonts: FontsTheme;
  }
}
