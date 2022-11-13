import type { NextPage } from 'next';
import Layout from '../../src/components/Layout';
import { GetStaticProps } from 'next';
// import { isLoggedInAPI } from '../../src/api/auth';
// import { useAuth } from '../../state-management/ReactContext/AuthContext';

// Statically renders page and sets props equal to an empty object
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
const findAMentor: NextPage = ({}) => {
  return (
    <Layout headTitle="Find a Mentor">
      <h1>Find a Mentor placeholder</h1>
      {/* Search for the perfect mentor for you!  */}

      {/* Search input, Search button  */}

      {/* Trending searches  */}

      {/* Footer */}
    </Layout>
  );
};

export default findAMentor;
