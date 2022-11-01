import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SimilarMentorsContextProvider } from '../state-management/ReactContext/SimilarMentorsContext';
import { SearchContextProvider } from '../state-management/ReactContext/SearchContext';

import { CalendarProvider } from '../state-management/ReactContext/CalendarContext';
import { TimezoneProvider } from '../state-management/ReactContext/TimezoneContext';
import { Provider } from 'react-redux';
import ReduxStore from '../state-management/ReduxToolkit/store';

function MyApp({ Component, pageProps }: AppProps) {
  // Provider: Redux-related tags that let you share state values project-wide
  return (
    <Provider store={ReduxStore}>
      {/* ContextProvider: current Context API provider (for filter search functionality) */}
      <SearchContextProvider>
      <SimilarMentorsContextProvider>
        <Component {...pageProps} />
      </SimilarMentorsContextProvider>
      </SearchContextProvider>
    </Provider>
  );
}

export default MyApp;
