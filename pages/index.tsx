import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../src/components/Layout';
import MiniProfileCard from '../src/components/miniProfileCard';

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