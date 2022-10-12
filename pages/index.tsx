import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../src/components/Layout';

const Home: NextPage = ({}) => {
  return (
    <Layout>
      <h4>Home Page - Hello world!</h4>
      
      <Link href="/become-a-mentor">
        <a>Click</a>
      </Link>
      <br />
      <Link href="/login">
        <a>Login Here</a>
      </Link>
    </Layout>
  );
};

export default Home;
