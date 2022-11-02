import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef, useState } from 'react';
import Layout from '../../src/components/Layout';
import bg from '../../public/assets/Sign-Up-page.png';
import SignUpFormAdmin from '../../src/components/signupForm/SignUpFormAdmin';

const SignupAsAdmin: NextPage = ({}) => {
  return (
    <div
      className="w-full h-full bg-local bg-center bg-no-repeat bg-auto"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Head>
        <title>Empowered Futures - Sign Up As Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <SignUpFormAdmin />
      </Layout>
    </div>
  );
};

export default SignupAsAdmin;
