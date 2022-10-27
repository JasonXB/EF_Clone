import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../src/components/Layout';
import SignUpFormMentee from '../DevTest/SignUpFormMentee';
import bg from "../../public/assets/Sign-Up-page.png";

const signup: NextPage = ({}) => {
  return (
    <div className='w-full h-full bg-local bg-center bg-no-repeat bg-auto' style={{backgroundImage: `url(${bg.src})`}}>
      
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
