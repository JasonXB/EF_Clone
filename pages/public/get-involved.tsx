import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Layout from '../../src/components/Layout';

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} }; // Statically renders page and sets props equal to an empty object
};

const getInvolved: NextPage = ({}) => {
  return (
    <Layout headTitle="Get Involved">
      <h1>Get Involved placeholder</h1>
    </Layout>
  );
};

export default getInvolved;
