import type { NextPage } from 'next';
import Head from 'next/head';

import PercentageBar from '../components/percentBar/percent-bar';

const Home: NextPage = ({}) => {
  return (
    <div>
      <Head>
        <title>Empowered Futures</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home Page - Hello world!</h1>
      <div>
        <PercentageBar percentage={50} color="pink" />
      </div>
    </div>
  );
};

export default Home;
