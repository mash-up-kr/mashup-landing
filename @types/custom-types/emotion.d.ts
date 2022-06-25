import '@emotion/react';
import { ColorsType } from '@styles/index';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
  }
}
