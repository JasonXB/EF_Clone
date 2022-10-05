import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '../src/components/Layout';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [signIn, isSignIn] = useState(false); //placeholder, will need to be updated with login auth information

  // SessionProvider: wrapper so NextAuth methods can be used across projects to check auth status, login, logout... etc
  return (
    <SessionProvider session={pageProps.session}>
      <Layout signedIn={signIn}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
