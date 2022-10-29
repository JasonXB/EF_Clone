import Head from 'next/head';
import type { NextPage } from 'next';
import SignUpFormMentee from '../../src/components/signupForm/SignUpFormMentee';
import Layout from '../../src/components/Layout';

import bg from '../../public/assets/Sign-Up-page.png';

const SignupMentee: NextPage = ({}) => {
  return (
    <div
      className="w-full h-full bg-local bg-center bg-no-repeat bg-auto"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Head>
        <title>Empowered Futures - Sign up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <SignUpFormMentee />
      </Layout>
    </div>
  );
};

export default SignupMentee;
