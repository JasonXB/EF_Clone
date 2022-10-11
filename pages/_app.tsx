import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SearchProvider } from '../state-management/ReactContext/SearchContext';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import ReduxStore from '../state-management/ReduxToolkit/store';

function MyApp({ Component, pageProps }: AppProps) {
  // SessionProvider: wrapper so NextAuth methods can be used across projects to check auth status, login, logout... etc
  return (
    <Provider store={ReduxStore}>
      <SessionProvider session={pageProps.session}>
        {/* SearchProvider: current Context API provider (for filter search functionality) */}
        <SearchProvider>
          <Component {...pageProps} />
        </SearchProvider>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
