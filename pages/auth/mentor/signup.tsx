import type { NextPage } from 'next';

import Layout from '../../../src/components/Layout';
import SignUpForm from '../../../src/components/signupForm/SignUpForm';

//! Requires getServerSide props to check if a user is offline (required to view this page)
//! check if a user is offline (required to view this page)
const Signup: NextPage = ({}) => {
  return (
    // <Layout headTitle="Sign Up" background="secondary">
    <Layout headTitle="Sign Up">
      <SignUpForm chosenRole="Mentor" />
    </Layout>
  );
};

export default Signup;
