import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SearchProvider } from '../context/SearchContext';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  // SessionProvider: wrapper so NextAuth methods can be used across projects to check auth status, login, logout... etc
  return (
   <SessionProvider session={pageProps.session}>
  // SearchProvider: current Context API provider (for filter search functionality)
   <SearchProvider>
   <Component {...pageProps} />
   </SearchProvider>
   </SessionProvider>
  )
}

export default MyApp;
