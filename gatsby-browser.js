import './src/style/main.scss';

// Gatsby discovers this browser API by its named export.
// eslint-disable-next-line import/prefer-default-export
export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  const scrollY = location.state?.blogScrollY;
  if (!Number.isFinite(scrollY)) return true;

  window.scrollTo({ top: scrollY, behavior: 'instant' });
  return false;
};
