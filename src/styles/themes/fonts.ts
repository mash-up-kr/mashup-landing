import { css } from '@emotion/react';

export const fonts = {
  sectionTitleFont: css`
    font-size: 3.6rem;
  `,
  sectionSubTitle: css`
    font-size: 2rem;
  `,
  sectionTitleMobile: css`
    font-size: 3.6rem;
  `,
  sectionSubTitleMobile: css`
    font-size: 1.8rem;
  `,
  sectionTitleIphone: css`
    font-size: 2.4rem;
  `,
  sectionSubTitleIphone: css`
    font-size: 1.4rem;
  `,
} as const;

export type FontsTheme = typeof fonts;
