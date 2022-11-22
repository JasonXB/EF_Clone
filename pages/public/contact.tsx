import type { NextPage } from 'next';

import { GetStaticProps } from 'next';
import Layout from '../src/components/Layout';
import ContactForm from '../src/components/contactUs/ContactForm';

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} }; // Statically renders page and sets props equal to an empty object
};

const contact: NextPage = ({}) => {
  return (
    <Layout headTitle="Contact" background="secondary">
      <div className="max-w-4xl p-10 mx-auto my-10 rounded-lg bg-hue-200 ">
        <div id="contactUs" className="mx-auto">
          <h1 className="my-4 text-4xl font-bold text-center text-primary-1 secondaryFont">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto my-4 text-xl text-center">
            Please reach out, we would love to hear from you.
          </p>

          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default contact;
