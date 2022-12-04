import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SimilarMentorsProvider } from '../state-management/ReactContext/SimilarMentorsContext';
import { SearchProvider } from '../state-management/ReactContext/SearchContext';
import { AuthProvider } from '../state-management/ReactContext/AuthContext';
import { CalendarProvider } from '../state-management/ReactContext/CalendarContext';
import { TimezoneProvider } from '../state-management/ReactContext/TimezoneContext';
import { ScheduleModalProvider } from '../state-management/ReactContext/ScheduleModalContext';
import { MentorshipRequestsProvider } from '../state-management/ReactContext/MentorshipRequestsContext';
import { Provider } from 'react-redux';
import ReduxStore from '../state-management/ReduxToolkit/store';
import ErrorBoundary from '../src/components/errorPages/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  // Provider: Redux-related tags that let you share state values project-wide
  return (
    <ErrorBoundary>
      <Provider store={ReduxStore}>
        <AuthProvider>
          {/* SearchProvider: current Context API provider (for filter search functionality) */}
          <SearchProvider>
            <SimilarMentorsProvider>
              <MentorshipRequestsProvider>
                <CalendarProvider>
                  <TimezoneProvider>
                    <ScheduleModalProvider>
                      <Component {...pageProps} />
                    </ScheduleModalProvider>
                  </TimezoneProvider>
                </CalendarProvider>
              </MentorshipRequestsProvider>
            </SimilarMentorsProvider>
          </SearchProvider>
        </AuthProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default MyApp;
