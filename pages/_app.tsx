import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ContextProvider } from '../state-management/ReactContext/Context';
import { Provider } from 'react-redux';
import ReduxStore from '../state-management/ReduxToolkit/store';

function MyApp({ Component, pageProps }: AppProps) {
  // Provider: Redux-related tags that let you share state values project-wide
  return (
    <Provider store={ReduxStore}>
      {/* ContextProvider: current Context API provider (for filter search functionality) */}
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </Provider>
  );
}

export default MyApp;
