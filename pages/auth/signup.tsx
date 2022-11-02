import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../../src/components/Layout';
import SignUpFormMentee from '../../src/components/signupForm/SignUpFormMentee';
import bg from '../../public/assets/Sign-Up-page.png';

//! Requires getServerSide props to check if a user is offline (required to view this page)
//! check if a user is offline (required to view this page)
const Signup: NextPage = ({}) => {
  return (
    <div
      className="w-full h-full bg-local bg-center bg-no-repeat bg-auto"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Head>
        <title>Empowered Futures - Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <SignUpFormMentee />
      </Layout>
    </div>
  );
};

export default Signup;
