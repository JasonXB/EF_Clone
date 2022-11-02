import type { NextPage } from 'next';
import Layout from '../../src/components/Layout';
import SignUpFormMentee from '../../src/components/signupForm/SignUpFormMentee';

//! Requires getServerSide props to check if a user is offline (required to view this page)
//! check if a user is offline (required to view this page)
const Signup: NextPage = ({}) => {
  return (
    <Layout headTitle="Sign Up" background="secondary">
      <SignUpFormMentee />
    </Layout>
  );
};

export default Signup;
