import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../src/components/Layout';

const Home: NextPage = ({}) => {
  return (
    <Layout>
      <h1>Home Page - Hello world!</h1>
      <Link href="/become-a-mentor">
        <a>Click</a>
      </Link>
    </Layout>
  );
};

export default Home;
