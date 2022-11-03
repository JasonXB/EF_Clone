import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import Layout from '../../src/components/Layout';
import SignUpFormAdmin from '../../src/components/signupForm/SignUpFormAdmin';

const SignupAsAdmin: NextPage = ({}) => {
  return (
    <Layout headTitle="Sign Up As Admin" background="secondary">
      <SignUpFormAdmin />
    </Layout>
  );
};

export default SignupAsAdmin;
