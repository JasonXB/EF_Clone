import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  // SessionProvider: wrapper so NextAuth methods can be used across projects to check auth status, login, logout... etc
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
