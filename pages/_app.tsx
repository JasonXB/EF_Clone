import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SearchProvider } from '../state-management/ReactContext/SearchContext';
import { Provider } from 'react-redux';
import ReduxStore from '../state-management/ReduxToolkit/store';

function MyApp({ Component, pageProps }: AppProps) {
  // Provider: Redux-related tags that let you share state values project-wide
  return (
    <Provider store={ReduxStore}>
      {/* SearchProvider: current Context API provider (for filter search functionality) */}
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </Provider>
  );
}

export default MyApp;
