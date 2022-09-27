import '../styles/globals.css';
import { themeChange } from 'theme-change';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    themeChange(false);
  });

  return <Component {...pageProps} />;
}

export default MyApp;
