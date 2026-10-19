import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import { hasSeenHome, markSeenHome } from '../utils/seenHome';

const IndexPage = () => {
  useEffect(() => {
    markSeenHome();
  }, []);

  if (typeof window !== 'undefined' && hasSeenHome()) {
    document.documentElement.classList.add('no-anim');
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{headData.title}</title>
        <html lang={headData.lang || 'en'} />
        <meta name="description" content={headData.description} />
      </Helmet>
      <App />
    </>
  );
};

export default IndexPage;
