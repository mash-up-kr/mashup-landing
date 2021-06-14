import ReactGA from 'react-ga';

const initializeGa = (): void => {
  ReactGA.initialize('G-WMN7DVVS6F');
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
