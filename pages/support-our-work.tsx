import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Layout from '../src/components/Layout';

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};

const supportOurWork: NextPage = () => {
  return (
    <Layout headTitle="Support Our Work ">
      <h1>Support our Work placeholder</h1>
    </Layout>
  );
};

export default supportOurWork;
