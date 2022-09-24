import type { NextPage } from 'next';
import Head from 'next/head';

import Avatar from '../components/avatar/avatar';

import Cat from '../assets/cat.jpeg';

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
        <Avatar imgLocation={Cat} displaySize="small" personsName="Elon Musk" />
      </div>
    </div>
  );
};

export default Home;
