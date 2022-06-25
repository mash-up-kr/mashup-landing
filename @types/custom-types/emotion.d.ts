import '@emotion/react';
import { ColorsTheme } from '@styles/index';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsTheme;
  }
}
