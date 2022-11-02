import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef, useState } from 'react';
import Layout from '../../src/components/Layout';
import bg from '../../public/assets/Sign-Up-page.png';
import SignUpFormAdmin from '../../src/components/signupForm/SignUpFormAdmin';
import useAuthStatusCheck from '../../src/hooks/useAuthStatusCheck';
import Spinner from '../../src/components/loadingVisuals/spinner';
import Router from 'next/router';

const SignupAsAdmin = ({}) => {
  //# Check what the user is authorized as (Guest, Mentee, Mentor, or Admin)
  //# If the user is logged in as an Admin already, redirect them to /admin/panel
  const authStatus = useAuthStatusCheck();
  if (authStatus === 'Loading') return <Spinner />;
  else if (authStatus === 'Admin') Router.replace('/admin/panel');
  else
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
