import type { NextPage } from 'next';
import Layout from '../src/components/Layout';
import style from '../styles/aboutUs.module.css';
import { GetStaticProps } from 'next';

import fetch from '../src/components/mentorDashboard/functions/fetch-mentorship-requests';

import Button from '../src/components/buttons/reusable-buttons';

// Statically renders page and sets props equal to an empty object
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};

const aboutUs: NextPage = ({}) => {
  return (
    <Layout background="none" contentCustomClass="p-0">
      <div className="flex items-center justify-center w-screen">
        <Button clickHandler={fetch}>CLICK</Button>
      </div>
    </Layout>
  );
};

export default aboutUs;
