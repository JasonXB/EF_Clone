import type { NextPage } from 'next';
import Link from 'next/link';
import PercentageBar from '../components/percentBar/percent-bar';
import Layout from '../src/components/Layout';

const Home: NextPage = ({}) => {
  return (
    <Layout>
      <h1>Home Page - Hello world!</h1>
      <Link href="/become-a-mentor">
        <a>Click</a>
      </Link>
      <PercentageBar percentage={55} color={'pink'} showPercentageText={true} />
    </Layout>
  );
};

export default Home;
