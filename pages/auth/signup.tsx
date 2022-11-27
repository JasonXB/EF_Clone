import type { NextPage } from 'next';

import Layout from '../../src/components/Layout';
import SignUpFormMentee from '../../src/components/signupForm/SignUpFormMentee';

const Signup: NextPage = ({}) => {
  return (
    <Layout headTitle="Sign Up" background="secondary">
      <SignUpFormMentee />
    </Layout>
  );
};

export default Signup;
