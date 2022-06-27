import { css } from '@emotion/react';

export const fonts = {
  kr: {
    bold(fontSize: number) {
      return css`
        font-size: ${fontSize}rem;
        font-family: 'Spoqa Han Sans';
        font-weight: 700;
      `;
    },
    medium(fontSize: number) {
      return css`
        font-size: ${fontSize}rem;
        font-family: 'Spoqa Han Sans';
        font-weight: 500;
      `;
    },
    regular(fontSize: number) {
      return css`
        font-size: ${fontSize}rem;
        font-family: 'Spoqa Han Sans';
        font-weight: 400;
      `;
    },
  },
  en: {
    extraBold(fontSize: number) {
      return css`
        font-size: ${fontSize}rem;
        font-family: Gilroy;
        font-weight: 800;
      `;
    },
    light(fontSize: number) {
      return css`
        font-size: ${fontSize}rem;
        font-family: Gilroy;
        font-weight: 300;
      `;
    },
  },
} as const;

export type FontsTheme = typeof fonts;
