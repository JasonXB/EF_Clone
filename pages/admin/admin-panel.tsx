import type { NextPage } from 'next';
import Head from 'next/head';
import AdminSort from './admin-mentor-sort';

const adminPanel: NextPage = ({}) => {
  return (
    <div>
      <Head>
        <title>Empowered Futures - Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminSort />
    </div>
  );
};

export default adminPanel;
