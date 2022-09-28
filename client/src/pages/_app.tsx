import '../styles/globals.css';
import { themeChange } from 'theme-change';
import { useEffect } from 'react';
import Store from '../redux';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    themeChange(false);
  });

  return (
    <Provider store={Store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
