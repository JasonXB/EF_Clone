import type { NextPage } from 'next';

import Layout from '../../../src/components/Layout';
import LogInForm from '../../../src/components/loginForm/LogInForm';

const Login: NextPage = ({}) => {
  return (
    <Layout headTitle="Login">
      <LogInForm chosenRole="Mentee" />
    </Layout>
  );
};

export default Login;
