import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Layout from '../../src/components/Layout';

// Statically renders page and sets props equal to an empty object
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
const suggestAProgram: NextPage = ({}) => {
  return (
    <Layout headTitle="Suggest a Program">
      <h1>Suggest a Program placeholder</h1>
    </Layout>
  );
};

export default suggestAProgram;
