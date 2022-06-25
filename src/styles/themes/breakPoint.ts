export const breakPoint = {
  value: {
    iphoneSE: 320,
    iphone: 520,
    mobile: 768,
    tablet: 960,
    pc: 1200,
  },
  media: {
    iphoneSE: '320px',
    iphone: '520px',
    mobile: '768px',
    tabletM: '960px',
    tabletL: '1200px',
    // 1201px부터 Desktop
  },
} as const;

export type BreakPointTheme = typeof breakPoint;
