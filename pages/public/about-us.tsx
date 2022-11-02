import type { NextPage } from 'next';
import Layout from '../../src/components/Layout';
import style from '../../styles/aboutUs.module.css';
import { GetStaticProps } from 'next';

// Statically renders page and sets props equal to an empty object
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};

const aboutUs: NextPage = ({}) => {
  return (
    <Layout background="none" contentCustomClass="p-0">
      <div className="flex items-center justify-center w-screen">
        <div className={`${style.image}`}>
          <div className={`${style.title} w-fit`}>About Us</div>
        </div>
      </div>
    </Layout>
  );
};

export default aboutUs;
