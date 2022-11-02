import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SearchProvider } from '../state-management/ReactContext/SearchContext';
import { AuthProvider } from '../state-management/ReactContext/AuthContext';
import { CalendarProvider } from '../state-management/ReactContext/CalendarContext';
import { TimezoneProvider } from '../state-management/ReactContext/TimezoneContext';
import { Provider } from 'react-redux';
import ReduxStore from '../state-management/ReduxToolkit/store';

function MyApp({ Component, pageProps }: AppProps) {
  // Provider: Redux-related tags that let you share state values project-wide
  return (
    <Provider store={ReduxStore}>
      <AuthProvider>
        {/* SearchProvider: current Context API provider (for filter search functionality) */}
        <SearchProvider>
          <TimezoneProvider>
            <CalendarProvider>
              <Component {...pageProps} />
            </CalendarProvider>
          </TimezoneProvider>
        </SearchProvider>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
