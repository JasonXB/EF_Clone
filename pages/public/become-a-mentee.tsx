import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Layout from '../../src/components/Layout';

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} }; // Statically renders page and sets props equal to an empty object
};

const becomeAMentee: NextPage = ({}) => {
  return (
    <Layout headTitle="Become a Mentee">
      <h1>Become a Mentee placeholder</h1>
    </Layout>
  );
};

export default becomeAMentee;
