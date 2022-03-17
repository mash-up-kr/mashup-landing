import ReactGA from 'react-ga';

const initializeGa = (): void => {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
  if (window) {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
};

const collectGaEvent = (label: string, action = "click"): void => {
  ReactGA.event({
    category: 'Mashup',
    action,
    label,
  });
};

export { initializeGa, collectGaEvent };
