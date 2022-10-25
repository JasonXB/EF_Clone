import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../src/components/Layout';
import SignUpFormMentee from '../DevTest/SignUpFormMentee';

const signup: NextPage = ({}) => {
  return (
    <div>
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

export default signup;
